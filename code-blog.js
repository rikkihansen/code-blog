// $(document).ready(function(){
//
// });
var articles = [];

function Article (opts) {
  this.title = opts.title;
  this.contributers = opts.contributers;
  this.body = opts.body;
  this.contributersUrl = opts.contributersUrl;
}

Article.prototype.toHtml= function () {
  var $newArticle = $('article.template').clone();
  $newArticle.attr('data-catagory', this.catagory);
  $newArticle.find('h1').text(this.title);
  $newArticle.find("address > a").html(this.contributers);
  $newArticle.find("address > a").attr('href', this.contributersUrl);
  $(".article-body").html(this.body);

  $newArticle.append('<hr>');

  $newArticle.removeClass('template');
return $newArticle;
}

console.log("foo");
