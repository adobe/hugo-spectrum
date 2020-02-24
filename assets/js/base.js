/*
 *
 *    ADOBE CONFIDENTIAL
 *    ___________________
 *
 *    Copyright 2020 Adobe Systems Incorporated
 *    All Rights Reserved.
 *
 *    NOTICE:  All information contained herein is, and remains
 *    the property of Adobe Systems Incorporated and its suppliers,
 *    if any.  The intellectual and technical concepts contained
 *    herein are proprietary to Adobe Systems Incorporated and its
 *    suppliers and are protected by all applicable intellectual property
 *    laws, including trade secret and copyright laws.
 *    Dissemination of this information or reproduction of this material
 *    is strictly forbidden unless prior written permission is obtained
 *    from Adobe Systems Incorporated.
 *
 */
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
