$(function() {
    var Accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;
   
      var items = this.el.find('.item');
      items.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }
   
    Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el;
        $this = $(this);
        $next = $this.next();
   
      $next.slideToggle();
      $this.parent().toggleClass('open');
   
      if (!e.data.multiple) {
        $el.find('.list').not($next).slideUp().parent().removeClass('open');
      };
    }  
   
    var accordion = new Accordion($('#accordion'), false);

});
