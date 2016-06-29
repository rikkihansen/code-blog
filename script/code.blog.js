(function(module) {
  var articles = [];

  function Article (opts) {
    this.title = opts.title;
    this.contributers = opts.contributers;
    this.body = opts.body;
    this.contributersUrl = opts.contributersUrl;
    this.category = opts.category;
  }

  Article.prototype.toHtml= function () {
    var appTemplate = $('#project-template').html();
    var compileTemplate = Handlebars.compile(appTemplate);
    // console.log(compileTemplate);
        // console.log(compileTemplate(this));
    return compileTemplate(this);
  };

  Article.fetchAll = function (callback) {

    if (localStorage.getItem('articles')) {
      var storedDataString = JSON.parse(localStorage.getItem('articles'));
      storedDataString.forEach(function(article){
        var a = new Article(article);
        $('#article').append(a.toHtml());
      });
    } else {
      $.ajax({
        type: 'GET',
        url: 'data/blog.content.json',
        success: function (data) {
          data.forEach(function(article){
            var a = new Article(article);
            articles.push(a);
            $('#article').append(a.toHtml());
          });

          localStorage.setItem('articles', JSON.stringify(articles));
        },
        error: function(error) {
          console.log('what', error);
        }
      });
    }
  };

  module.Article = Article;

})(window);
