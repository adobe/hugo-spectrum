(function($) {
    'use strict';
    var Search = {
        init: function() {
            $(document).ready(function() {
               $(document).on('coral-search:submit', 'coral-search', function(e) {
                    var query = $(this).val();
                    var searchPage = "{{ "search/" | absURL }}?q=" + query;
                    document.location = searchPage;

                    return false;
                });

            });
        },
    };

    Search.init();

}(jQuery));
