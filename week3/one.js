var foo = [];

// declare array with [] is much shorter
// syntaxic sugar // shorthands

var superheroes = [(
{
	name: 			"Superman",
	secretIdentity: {
						first_name:"Clark",last_name:"Kent"},
 	powers: 		new Array("Bad breath","Looks like Godzilla"),
 	wins: 			10000,
 	losses: 		8,
 	origin: 		"Grew up in Kansas but OMG he's an alien."
},
{
	name: 			"Spiderman",
	secretIdentity: {first_name:"Peter",last_name:"Parker"},
 	powers: 		new Array("Web slinging","Crack bad jokes"),
 	wins: 			10,
 	losses: 		80,
 	origin: 		"Grew up in Queens but OMG he's an alien."
}];

superheroes[1].secretIdentity.last_name;
superheroes[1]["secretIdentity"]["last_name"];
// the same thing !

//jQuery > select things the same exact way you do in CSS
$("h1").text("Hello");
//syntax sugar of...
//jQuery("h1").text("Hello");
$("h1").html("<h2>Hello</h2>");

$("h1").text("Hello");




for(var i=0; i<superheroes.length; i++){
	var hero = superheroes[i];

	//copy html with this class to the memory
	var template = $("#superhero-template").clone();
	//replace the data in these tags to the following data
	template.find("h1").text(hero.name);
	template.find("h2").text(hero.secretIdentity.first_name + " " + hero.secretIdentity.last_name);
	//for(var j=0; j<superheroes[i].powers.length; j++) {}
	for(var j=0; j<hero.powers.length; j++){
		template.find(".super-powers").append("<li>")
	}


	$("#superhero-container").append(template);
	// loop through associative array in JS
}

$.each(superheroes[0].secretIdentity)

$("#superhero-template").remove();

