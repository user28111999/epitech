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
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Drive by CyberLife&trade;</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="assets/css/style-upload.css">
		<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.2/angular.min.js"></script>
	</head>
	<body>
		<div class="background"></div>
		<label class="file-upload" for="filefile">
			<img src="assets/img/drive_logo.png" alt="drive_logo.png" title="Go on, upload a file, we are watching.">
			<form method="POST" action="?fileUploaded" enctype="multipart/form-data">
				<input type="file" name="filefile" style="opacity: 0.2;" required>
				<input type="submit" name="submit" value="Upload" title="Please select a file to upload.">
			</form>
		</label>
		<?php
		if (isset($_POST['submit'])) {
			$realFile = $_FILES['filefile']['tmp_name'];
			$srcfile = $_FILES['filefile']['name'];
			$destfile = "assets/upload/" . $id . "/" . $srcfile;
			$path = $destfile;
			$destfolder = "assets/upload/" . $id;
			if ($_FILES['filefile']['size'] < 52428800) {
				if (is_dir($destfolder)) {
					move_uploaded_file($realFile, $destfile);
					$files->uploadFile($id, $srcfile, $path);
					echo "<span class='uploaded'>File uploaded</span>";
				} else {
					mkdir(dirname($destfile), 0777, true);
					move_uploaded_file($realFile, $destfile);
					$files->uploadFile($id, $srcfile, $path);
					echo "<span class='uploaded'>File uploaded</span>";
				}
			} else {
				echo "<span class='uploaded'>File has not been uploaded because it is more than 50 Mo</span>";
				exit;
			}
		}
		?>
		<output class="file-upload_result" style="opacity: 0.7;"></output>
		<p title="50 Mo == 51.200 Ko == 52.428.800 octets" style="opacity: 0.5;">Maximum Size: 50Mo</p>
		<br><br>
		<a href="dashboard.php" title="Return to your dashboard."><img src="assets/img/exit.png" alt="exit" width="24" height="24"></a>
	</body>
	<script type="text/javascript">
		'use strict';

		var FileUpload = function(el) {
			this.noValue = 'No Files Chosen';
			this.$container = $(el);
			this.$input = this.$container.find('input');
			this.$result = this.$container.next('.file-upload_result').html(this.noValue);
			this.getValue();
		};

		FileUpload.prototype.getValue = function() {
			var self = this;
			this.$input.on('change', function() {
				var valueArray = $(this).val().split('\\'),
				value = valueArray[valueArray.length-1];
				if(value.length === 0) {
					self.$result.html(self.noValue);
				} else {
					self.$result.html(value);
				}
			});
		};

		new FileUpload('.file-upload');
	</script>
</html>