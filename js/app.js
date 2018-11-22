//funciones para cambiar color de titulo
function colrojo(){
  $('.main-titulo').delay(500).animate({
    color: 'red'
  }, 5, function(){
    colamarillo();
  })
}

function colamarillo(){
  $('.main-titulo').delay(500).animate({
    color: 'yellow'
  }, 5, function(){
    colrojo();
  })
}

//Cargar el inicio
$(function(){
  colrojo();
})


//Funcion que carga aleatoriamente las imagenes
$(".btn-reinicio").click(function(){
  $("#s1").attr("src",function(){
    var numero = Math.floor((Math.random() * 4) + 1);
    var ruta = "image/" + numero + ".png";
    return ruta;
  });
});
