$(function(){
  colrojo();
})

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
