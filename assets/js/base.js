(function($) {
  'use strict';
  var LanguageSelector = {
    init: function() {
      $(document).ready(function() {
        $(document).on('change', '#coral-language-selector', function(e) {
          location.href = $(this).val();
          return false;
        });
      });
    },
  };

  LanguageSelector.init();

}(jQuery));
