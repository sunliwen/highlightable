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
    var $elem = $(this);

    // class name of the highlightable wrapper
    var jsHighlightable = "js-highlightable";
    var jsHighlighted = "js-highlighted";
    var jsHovered = "js-hovered";

    var reg = /\b(\w+)\b/g;
    var wrapper = "<span class='" + jsHighlightable + "'>$1</span>";
    var color = "rgb(255, 242, 168)";  // yellow
    var clickColor = "rgb(168, 209, 255)";  // blue

    this.each(function(){
      var $self = $(this);
      $self.html($self.text().replace(reg, wrapper));
    });

    $('.' + jsHighlightable, $elem).hover(
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

    $('.' + jsHighlightable, $elem).click(
      function () {
        var $self = $(this);

        // if click an element already highlighted, de-highlight it
        if($self.hasClass(jsHighlighted)) {
          $self.css('background-color', '');
          $self.removeClass(jsHighlighted);
        } else {
          var highlighteds = $("." + jsHighlighted);
          var prev = $($self.prev()[0]);
          var next = $($self.next()[0]);

          if(next.text() != $(highlighteds[0]).text() && prev.text() != $(highlighteds[highlighteds.length-1]).text()){
            highlighteds.each(function() {
              $(this).css('background-color', '');
              $(this).removeClass(jsHighlighted);
            });
          }

          $self.css('background-color', clickColor);
          $self.addClass(jsHighlighted);
        }

        // send highlighted event
        var event = $.Event("highlighted");
        var words = [];
        $("." + jsHighlighted, $elem).each(function() {
          words.push($(this).text());
        })
        event.words = words;
        $elem.trigger(event);
      }
    );

    return this;
  };
})(jQuery);