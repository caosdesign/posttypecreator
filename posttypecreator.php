<?php
	
	/*
	Plugin Name: Post Type Creator 
	Description: Plugin to create custom post types
	*/

	$post_name = $_GET['post_name'];

	function ptc_admin() {  
    	include('');  
	}

	function ptc_admin_actions() {  
		add_options_page("Post Type Creator Options", "Post Type Creator Options", 1, "Post Type Creator Options", "ptc_admin");  
	}  
	add_action('admin_menu', 'ptc_admin_actions');  

	$post_folder = './'. $post_name . '/';
	
	if(is_dir($post_folder) == true)
    {
    	die('Folder already exist');
    }
    else{
    	if (!mkdir($post_folder, 0777, true)) {
    		die('Failed to create folders');
		}
    }

	$file_name = ''. $post_folder . 'test_file.php';

	if(file_exists($file_name)){
		die('File already exist');
	}
	else{
		$file_handle = fopen($file_name, 'wt') or die("Can't open file");
	}

	$stringData = "<?php\n 	
		/*
			Plugin Name: $post_name 
			Description: Plugin to create and manipulate post type $post_name
		*/
	\n?>";
	
	fwrite($file_handle , $stringData);
	fclose($file_handle);

?>