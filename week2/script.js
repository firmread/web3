var superhero1 = "Superman";
var superhero2 = "Spiderman";
var superhero3 = "Aquaman";

document.write(superhero1);

//----------------

var superheroes = new Array("Superman", "Spiderman", "Aquaman");

// variation
// which is easier to read in seperate line
var superheroes = new Array();
superheroes[0] = "Superman";
superheroes[1] = "Spiderman";

// variation
var superheroes = new Array();
superheroes.push("Superman"); //first goes to 0 slot
superheroes.push("Spiderman");


document.write(superheroes[0]);






// new file
var hero = new Array("Superman",
					 "Clark Kent", 
					 new Array("Fly",
					 		   "Fight Fucking Crazy Shit",
					 		   "Beat up his brother",
					 		   "Save Cats"),
					 "Freaking planet blew up.",
					 37);
//shorthand
//var hero = [];


hero[0]; 		// Superman
hero[3]; 		// Freaking planet blew up.
hero[2][3] 		// superpower: Save Cats 
hero[4]; 		// age

//inside {} ":" means "=" sign
var hero = { name:"Superman",
			 alias:"Clark Kent",
			 superpowers:new Array("Fly",
			 					   "Fight",
			 					   "Jump over train",
			 					   "whatever"),
			 origin: "Didn't com from moon",
			 age:37,
			 key:value,
			 "0":key need to be string
// inside of objects or array use only "," not ";"
};

hero.name;  //Superman
