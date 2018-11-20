document.observe("dom:loaded", function(){

  $(".main-titulo").observe('mouseover', function(){
    this.addClassName('activo');
  })
  $(".main-titulo").observe('mouseleave', function(){
    this.removeClassName('activo');
  })




})
