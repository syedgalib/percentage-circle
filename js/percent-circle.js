function percent_circle(circle_id, prop=null) {
  var circle_id     = '#' + circle_id;
  var circle        = $(circle_id);
  var circle_wrap   = circle_id + ' .circle-wrap';
  var percent_value = circle.attr('data-percent');
  var caption_value = circle.attr('data-caption');
  var deg           = (360 * percent_value) / 100;

  circle.html('<div class="circle-wrap"><span>0%</span><div class="percent-slice"><div class="percent-fill"></div><div class="percent-bar"></div></div></div><div class="percent-caption"></div>');

  var caption       = $(circle_id + ' .percent-caption');

  $(circle_wrap + ' span').html(percent_value +'%');
  caption.html(caption_value);

  if (prop) {
    if (prop.size) {
      $(circle_wrap).css('font-size', prop.size + 'px');
    }
    if (prop.bar_fill_color) {
      $(circle_wrap).css('background-color', prop.bar_fill_color);
    }
    if (prop.bar_active_color) {
      $(circle_wrap + ' .percent-slice').css('border-color', prop.bar_active_color);
    }
    if (prop.font_color) {
      $(circle_wrap + ' span').css('color', prop.font_color);
    }

    if (prop.caption) {
      for (var i in prop.caption) {
        caption.css(i, prop.caption[i]);
      }
    }
  }

  if (percent_value > 50) {
    $(circle_wrap + ' .percent-bar').css('transform', 'rotate('+ 180 +'deg)');
    $(circle_wrap + ' .percent-fill').css('border-color', 'inherit');
    $(circle_wrap + ' .percent-slice').css('clip', 'rect(auto, auto, auto, auto)');
  }

  setTimeout(function(){
    $(circle_wrap + ' .percent-bar').css('transform', 'rotate('+ deg +'deg)');
  }, 300);
}
