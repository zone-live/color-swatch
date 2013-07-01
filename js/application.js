// Extend JS String with repeat method
String.prototype.repeat = function(num) {
    return new Array(num + 1).join(this);
};

(function($) {

  // Add segments to a slider
  $.fn.addSliderSegments = function (amount) {
    return this.each(function () {
      var segmentGap = 100 / (amount - 1) + "%"
        , segment = "<div class='ui-slider-segment' style='margin-left: " + segmentGap + ";'></div>";
      $(this).prepend(segment.repeat(amount - 2));
    });
  };

  $(function() {
  
    // Todo list
    $(".todo li").click(function() {
        $(this).toggleClass("todo-done");
    });

    // Custom Select
    $("select[name='herolist']").selectpicker({style: 'btn-primary', menuStyle: 'dropdown-inverse'});

    // Tooltips
    $("[data-toggle=tooltip]").tooltip("show");

    // Tags Input
    $(".tagsinput").tagsInput();

    // jQuery UI Sliders
    var $slider = $("#slider");
    if ($slider.length) {
      $slider.slider({
        min: 1,
        max: 5,
        value: 2,
        orientation: "horizontal",
        range: "min"
      }).addSliderSegments($slider.slider("option").max);
    }

    // Placeholders for input/textarea
    $("input, textarea").placeholder();

    // Make pagination demo work
    $(".pagination a").on('click', function() {
      $(this).parent().siblings("li").removeClass("active").end().addClass("active");
    });

    $(".btn-group a").on('click', function() {
      $(this).siblings().removeClass("active").end().addClass("active");
    });

    // Disable link clicks to prevent page scrolling
    $('a[href="#fakelink"]').on('click', function (e) {
      e.preventDefault();
    });

    // Switch
    $("[data-toggle='switch']").wrap('<div class="switch" />').parent().bootstrapSwitch();
    
  });
  
})(jQuery);


//App code! 
$(document).ready(function() {
     $('#colorpicker').farbtastic('#color');
 });

function darkestColor(col, amt) {
  
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  
}

function colorCtrl($scope) {
  
  $('#generate').live('click', function() {

    $('.demo-panel-title').fadeIn();

    var color1 = $scope.color1;
    var color2 = $scope.color2;
    var color3 = $scope.color3;

    var darkColor1 = darkestColor(color1, -20);
    var darkColor2 = darkestColor(color2, -20);
    var darkColor3 = darkestColor(color3, -20);

    $('.mbl').append('<article><div class="span2">' +
                        '<dl class="palette" style="background-color:'+color1+';">' +
                          '<dt>'+ color1 +'</dt>' +
                        '</dl>' +
                        '<dl class="palette" style="background-color:'+darkColor1+';">' +
                          '<dt>'+ darkColor1 +'</dt>' +
                        '</dl>' +
                    '</div>' + 
                    '<div class="span2">' +
                        '<dl class="palette" style="background-color:'+color2+';">' +
                          '<dt>'+ color2 +'</dt>' +
                        '</dl>' +
                        '<dl class="palette" style="background-color:'+darkColor2+';">' +
                          '<dt>'+ darkColor2 +'</dt>' +
                        '</dl>' +
                    '</div>' +
                    '<div class="span2">' +
                        '<dl class="palette" style="background-color:'+color3+';">' +
                          '<dt>'+ color3 +'</dt>' +
                        '</dl>' +
                        '<dl class="palette" style="background-color:'+darkColor3+';">' +
                          '<dt>'+ darkColor3 +'</dt>' +
                        '</dl>' +
                    '</div></article>');
  });

}