<?php

	$post_name = $_GET['post_name'];

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

	$stringData = "<?php\n\n 	echo('Test 1');\n 	echo('Test 2'); \n\n?>";
	
	fwrite($file_handle , $stringData);
	fclose($file_handle);

?>