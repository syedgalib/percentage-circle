$(document).ready(function(){
  /*
    ====================================
    Percent Circle
    ====================================
  */
  percent_circle('circle-1');

  percent_circle('circle-2', {
    size              : '140',
    bar_fill_color    : '#f2f2f2',
    bar_active_color  : '#243182',
    font_color        : '#243182',
    caption           : {
      'color'       : '#243182'
    }
  });

  percent_circle('circle-3', {
    size              : '140',
    caption           : {
      'color'       : '#000',
      'font-size'   : '18px'
    }
  });

  percent_circle('circle-4', {
    size              : '140',
  });

  percent_circle('circle-5', {
    size              : '140',
  });
  percent_circle('circle-6', {
    size              : '200',
  });
  percent_circle('circle-7', {
    size              : '260',
  });
});
