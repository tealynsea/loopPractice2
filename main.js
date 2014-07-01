$(document).on('ready', function() {
  
var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

/*for(var i=0; i<animals.length; i++) {
 console.log(animals[i]);
}*/

//problem 1//
/*for(var i=0; i<animals.length-1; i++) {
	console.log(animals[i]);
}*/

/*problem 2
*for(var i=0; i<animals.length; i+=2)
*{
*	console.log(animals[i]);


}*/

//problem  3

/*for(var i=animals.length - 1; i>= 0; i--) {
*
*	console.log(animals[i]);
*}
*/

for(var i=0; i < animals.length; i++) {
	var dup=animals.splice(1,2,3)
	console.log(animals(dup));
}











});