//var dwarves = ["Dopey", "Grumpy", "Bashful"];

function dwarfRollCall(dwarves) {
  
	var newStr = "";
	
	dwarves.forEach(function(dwarf, index))
	
	//for(var i = 0; i < dwarves.length; i++) {
	 
			//newStr += (i+1 + ". " + dwarves[i] + " ");
	
// 	}
	
	return newStr;
}

//
//

//var veggies = ["carrot", "cucumber", "pepper"];
 //var fruits = ["apple", "banana", "orange"];
 
function summonCaptainPlanet(fruits) {
  
	return fruits.map(function(fruit) {
	  
		return fruit.toUpperCase() + "!";
		
	})
	
 //return(veggies.length);

	}
	
  //
  //
  
  var longWords = ["banana", "elephant"]
  
  function longPlaneteerCalls(longWords) {
    
	for(var i = 0; i < longWords.length; i++) {
	  
		if(longWords[i].length > 4) {
		  
			return true;
		}
	}
	return false;
}

//
//

var cheese = ["swiss", "cheddar", "mozzarella"];

var foods = ["car","cheddar","banana"];

function findTheCheese(foods) {
  
	for(var i = 0; i < foods.length; i++) {
	  
		var cheeseIndex = cheese.indexOf(foods[i]);
		
		if(cheeseIndex !== -1) {
		  
			return foods[i];
		}
	}
	
	return "no cheese!";
}