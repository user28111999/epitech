<?php 
session_start();
include_once '../models/users.php';
include_once '../models/files.php';
$user = new User();
$files = new Files(); 
$id = $_SESSION['id'];

if (!$user->returnSession()){
	header("location:login.php");
}

if (isset($_GET['q'])){
	$user->logOut();
	header("location:login.php");
}
?>
<!-- todos: 
	- ameliorer le css 
	- faire plus joli -->
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Drive by CyberLife&trade;</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="assets/css/style-dashboard.css">
		<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.2/angular.min.js"></script>
	</head>
	<body>
		<div class="container">
			<div class="row">
				<h2>Welcome <?php $user->getUsername($id); ?></h2>
				<br><br><br>
				<p>your files: <br><br>
					<?php $files->showFileName($id); ?>
				</p>
				<br>
				<p><a href="upload.php">upload a file here</a><br><a href="dashboard.php?q=logOut">log out</a></p>
			</div>
		</div>
	</body>
</html>