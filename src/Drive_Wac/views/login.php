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
						<form id="contact-form" name="login" class="form" action="#" method="POST" role="form">
							<div class="form-group">
								<input type="text" class="form-control" id="username" name="emailusername" placeholder="Username" tabindex="1" required>
							</div>                            
							<div class="form-group">
								<input type="password" class="form-control" id="password" name="password" placeholder="Password" tabindex="2" required>
							</div>
							<div class="text-center">
								<input type="submit" name="submit" class="btn btn-start-order" value="Submit"></button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div class="text-center">
			<span>If you would like to register, please register <a href="register.php">here.</a></span>
		</div>
		<?php
		session_start();
		include_once '../models/users.php';
		$user = new User();
		if (isset($_REQUEST['submit'])) {
			extract($_REQUEST);
			$login = $user->login($emailusername, $password);
			if ($login) {
				header("location:dashboard.php");
			} else {
				echo '<h5 style="color: red;">Wrong username or password</h5>';
			}
		}
		?>
	</body>
</html>