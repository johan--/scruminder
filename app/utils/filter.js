function filter(selector, val) {
  var s = new RegExp(val, "i");
  var container = $('#'+ selector +'>ul>li');
  container.each(function() {
    if(s.test(this.innerHTML)) 
      $(this).show();
    else
      $(this).hide();
  });
}

export default filter;