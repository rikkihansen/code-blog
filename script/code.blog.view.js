  (function(module) {
    var view = {};

    view.populateFilters = function() {
      $('article').each(function() {
        console.log(this);
        if (!$(this).hasClass('template')) {
          var val = $(this).find('address a').text();
          console.log('val', val);
          var optionTag = '<option value="' + val +'">' + val + '</option>';
          $('#author-filter').append(optionTag);
          val = $(this).attr('data-category');
          optionTag = '<option value ="' + val + '">' + val + '</option>';
          if ($('#category-filter option[value="' + val +'"]').length === 0) {
            $('#category-filter').append(optionTag);

          }
        }
      });
    };

    view.handleAuthorFilter = function() {    // making a filter to show you which author "contributers" projects you choose
      $('#author-filter').on('change', function() {
        if ($(this).val()) {
          var $selectedAuthor = $('article[data-attribute="' + $(this).val() + '"]'); $('article').not($selectedAuthor).hide();
          $selectedAuthor.show();

        } else {
          $('artcle').not('.template').show();
        }
        $('#author-filter').val('');
      });

    };

    view.handleCategoryFilter = function() {   // making a filter to show you which categorys projects you choose
      $('#category-filter').on('change', function() {
        if ($(this).val()) {
          var $selectedCategory = $('article[data-category="' + $(this).val () + '"]');
          $('article').not($selectedCategory).hide();
          $selectedCategory.show();

        } else {
          $('artcle').not('.template').show();
        }
        $('#category-filter').val('');

      });

    };

    view.articleView = function() {    // adding to routes.js to to be SPA
      Article.fetchAll();
      $('#article').show();
      $('#about').hide();

    };

    // view.about = function() {
    //   $('#about').show();
    //   $('#article').hide();
    // };

    view.setTeasers = function() {
      $('.article-body *:nth-of-type(n+2)').hide();

      $('section#article .read-on').on('click', function(e) {
        e.preventDefault();
        var readOnLink= $(e.target);

        readOnLink.hide();
        readOnLink.parent().find('p').show();
      });

    };

    $(function() {               // calling
      view.populateFilters();
      view.handleAuthorFilter();
      view.handleCategoryFilter();
      view.setTeasers();
      // view.about();
      view.articleView();
    });

    module.view = view;

  }) (window);
