<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Drive by CyberLife&trade;</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="assets/css/style-login.css">
		<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.2/angular.min.js"></script>
	</head>
	<body>
		<div class="background"></div>
		<header>
			<div class="main">
				<img src="assets/img/drive_logo.png" alt="drive_logo.png" title="Your files are safe with us. Trust us.">
			</div>
		</header>
		<div class="main">
			<div class="container">
				<div class="row">
				</div>
				<div class="row">
					<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-offset-3">
						<form id="contact-form" class="form" method="POST" role="form">
							<div class="form-group">
								<input type="text" class="form-control" id="username" name="username" placeholder="Username" tabindex="1" required>
							</div>
							<div class="form-group">
								<input type="password" class="form-control" id="password" name="password" placeholder="Password" tabindex="2" required>
							</div>
							<div class="form-group">
								<input type="email" class="form-control" id="email" name="email" placeholder="E-mail" tabindex="3" required>
							</div>
							<div class="text-center">
								<input type="submit" name="submit" class="btn btn-start-order" value="register"></input>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div class="text-center">
			<span>By registering, you accept the <a href="policy.php">privacy policy.</a></span><br>
			<span>If you already have an account, click <a href="login.php">here.</a></span>
		</div>
		<?php
		include_once '../models/users.php';  
		$user = new User();
		if (isset($_REQUEST['submit'])){
			extract($_REQUEST);
			$register = $user->register($username, $password, $email);
			if ($register) {
				echo '<h5>Registration successful. <br><a href="login.php">Click here to login</a></h5>';
			} else {
				echo 'Registration failed. Email or Username already exists please try again';
			}
		}
		?>
	</body>
</html>