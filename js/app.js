document.observe("dom:loaded", function(){
  colrojo();

  $('activarJuego').observe('change', inicioJuego);
})


//Animación que cambia color del titulo
