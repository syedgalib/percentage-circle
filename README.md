# Percentage Circle
[View Demo](https://syedgalib.github.io/percentage-circle)


# How to Use?
### HTML
```
<div id="circle-1" class="percent-circle" data-percent="98" data-caption="HTML"></div>
<div id="circle-2" class="percent-circle" data-percent="80" data-caption="CSS"></div>
<div id="circle-3" class="percent-circle" data-percent="75" data-caption="Javascript"></div>
<div id="circle-4" class="percent-circle" data-percent="95" data-caption="Bootstrap"></div>

<div id="circle-5" class="percent-circle" data-percent="95" data-caption="PHP"></div>
<div id="circle-6" class="percent-circle" data-percent="80" data-caption="Laravel"></div>
<div id="circle-7" class="percent-circle" data-percent="75" data-caption="Wordpress"></div>
```

### JS
Load with default style
```
percent_circle('circle-1');
```

Load with custom style
```
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
```
