<?php 
	
	/*
	Plugin Name: Post Type Creator 
	Description: Plugin to create custom post types
	*/

	$html = '<form id=post_type_form action="functions.php" method="get"><input id="post_name" name="post_name" val="post_name"><input type="submit" id="create_bt" value="Create"></form>';
	echo($html);

?>