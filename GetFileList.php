<?php 

$dir = './MyFiles/';
$contents = scandir($dir);
$files = array();

for ($item=0; $item < count($contents); $item++) { 
	if (is_file($dir.$contents[$item])) {
		array_push($files, $contents[$item]);
	}
}

echo json_encode($files);

?>