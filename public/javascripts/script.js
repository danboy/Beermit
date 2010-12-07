/* Author: 
*/
Raphael.fn.circlePath = function(x , y, r) {      
    var s = "M" + x + "," + (y-r) + "A"+r+","+r+",0,1,1,"+(x-0.1)+","+(y-r)+" z";   
      return s; 
}

//(function( $ ){

  jQuery.fn.createRatingWheel = function(options) {
  
      var settings = {
      radius : 180,
      levels : 5,
      stops : []
      };
      step=(settings.radius/settings.levels);
      square = (step*(settings.levels+1.5)*2);
      settings.x = square/2;
      settings.y=settings.x;
      // If options exist, lets merge them
      // with our default settings
      if ( options ) { 
        $.extend( settings, options );
      }
      var createDrag = function(handle,index){
        
        var start = function () {

        // storing original coordinates
        this.ox = this.attr("cx");
        this.oy = this.attr("cy");
        this.attr({opacity: 1});
        },
        move = function (dx, dy) {
        // move will be called with dx and dy
        this.attr({cx: this.ox + dx, cy: this.oy + dy});
        },
        up = function () {
        // restoring state
        this.attr({opacity: .5});
        };
        
        
        handle.drag(move,start,up);
      }
      this.each(function(){
        canvas = Raphael(this,square, square);
        line = 'M'+(settings.x-settings.radius)+" 10"
        console.log(line)
        path = canvas.circlePath(settings.x, settings.y, settings.radius);
        path = canvas.path(path).attr({ 'stroke' : '#ccc' });
        circumference = Math.PI*(settings.radius*2);
        count = $('#characteristics li').size();
        $('#characteristics li').each(function(index){
          $(this).hide();
          var p = canvas.circlePath(settings.x, settings.y, (settings.radius/settings.levels)*index);
          p = canvas.path(p).attr({ 'stroke': '#ccc'});
          var c = path.getPointAtLength( parseInt((circumference/count)*index) );
          canvas.text(c.x, c.y,$(this).text());
          
          var handle = canvas.circle(c.x,c.y,10).attr({
            fill: "#d60",
            stroke: "none",
            opacity: .5
          });

          createDrag(handle,index);

        });
      });
    };

//  })(jQuery);

$('.flavor_wheel').createRatingWheel();





















