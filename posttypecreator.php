<?php 

	$file_name = "testFile.txt";
	$file_handle = fopen($file_name, 'wt') or die("Can't open file");
	$stringData = "Test 1 \nTest 2";
	fwrite($file_handle , $stringData);
	fclose($file_handle);

?>