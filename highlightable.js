/*global jQuery:false */
/*!
 * Highlightable v0.0.1
 * https://github.com/sunliwen/highlightable
 *
 * Copyright 2013 Sun Liwen
 * Released under the MIT license
 */
 (function($) {
  'use strict';

  $.fn.highlightable = function() {

    // class name of the highlightable wrapper
    var highlightable = "js-highlightable";
    var reg = /\b(\w+)\b/g;
    var wrapper = "<span class='" + highlightable + "'>$1</span>";
    var color = "rgb(255, 255, 102)";  // yellow
    var clickColor = "rgb(255, 0, 0)";  // red

    this.each(function(){
      var self = this;
      var $self = $(self);
      $self.html($self.text().replace(reg, wrapper));
    });

    $('.' + highlightable).hover(
      function () {
        var $self = $(this);
        if($self.css('background-color') != clickColor){
          $self.css('background-color', color);
        }
      },
      function () {
        var $self = $(this);
        if($self.css('background-color') === color){
          $self.css('background-color', '');
        }
      }
    );

    $('.' + highlightable).click(
      function () {
        var cssClass = "js-highlighted";
        var $self = $(this);

        // if click an element already highlighted, de-highlight it
        if($self.hasClass(cssClass)) {
          $self.css('background-color', '');
          $self.removeClass("js-highlighted");
        } else {
          var highlighteds = $(".js-highlighted");
          var prev = $($self.prev()[0]);
          var next = $($self.next()[0]);

          if(next.text() != $(highlighteds[0]).text() && prev.text() != $(highlighteds[highlighteds.length-1]).text()){
            highlighteds.each(function() {
              $(this).css('background-color', '');
              $(this).removeClass("js-highlighted");
            });
          }

          $self.css('background-color', clickColor);
          $self.addClass("js-highlighted");
        }
      }
    );

    return this;
  };
})(jQuery);