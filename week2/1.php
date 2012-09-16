<?php
	//$ = var in JS; sign that mean declaring variable
	$link = "http://www.google.com";
	echo $link;
?>

<!doctype>
<html>
	<head>
		<title> Baby's first site </title>
		<!--
			Just like how we put other language in HTML
			<style>CSS goes here</style>
			<script>JS goes here</script>
		-->
		<h1>HI YO!</h1>
			
		<?php
			//here is where PHP goes!
			echo "something with echo (a bit faster)"
		?>

		<!--neverput space in "quote before php tag!"-->
		<a href="<?php echo $link; ?>">
			<h2><?php echo "what what now" ?></h2>
		</a>


		<?php $barbecueSauce = "http://parsons.edu"; ?>
		<a href="<?php echo $barbecueSauce; ?>">
			Whatever
		</a>



	</head>
</html>