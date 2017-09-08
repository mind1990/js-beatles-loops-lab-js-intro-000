
musicians = new Array();
instrument = new Array();

function theBeatlesPlay(musicians, instruments) {
  var array = new Array();
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians} plays ${instruments}`)
  }
  return array
}
