<!-- 
CREATING A VARIABLE
MOST ABSTRACT > MOST SPECIFIC
-->


<?php
	$superheroes = array(
		array("name"=>"Superman",
			"secretIdentity"=>array(
				"first_name"=>"Clark",
				"last_name"=>"Kent"),
			"powers"=>array(
				"Bad breath",
				"Looks like Godzilla"),
			"wins"=>10000,
			"losses"=>8
		),
		array("name"=>"Spiderman",
			"secretIdentity"=>array(
				"first_name"=>"Peter",
				"last_name"=>"Parker"),
			"powers"=>array(
				"Web slinging",
				"Crack bad jokes"),
			"wins"=>10,
			"losses"=>80
		)		
	);

	$superheroes[0]["secretIdentity"]["first_name"]; // Clark
	$superheroes[1]["losses"];

	// WRONGS
	//$superheroes[1].losses
	//$superheroes[1]->losses


	
?>