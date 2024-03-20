<?php  
include "../controllers/database.php";
class User {
	public $db;

	public function __construct() {
		$this->db = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_DATABASE);
		if(mysqli_connect_errno()) {
			echo "Error 7825, Please contact the CyberLife&trade; support if you see this message.";
			exit;
		}
	}

	public function register($username, $password, $email) {
		// $password = password_hash($password, PASSWORD_BCRYPT);
		$sql = "SELECT * FROM users WHERE username='$username' OR email='$email'";

		$check =  $this->db->query($sql) ;
		$count_row = $check->num_rows;

		if ($count_row == 0) {
			$sql1 = "INSERT INTO users SET username='$username', password='$password', email='$email'";
			$result = mysqli_query($this->db,$sql1) or die(mysqli_connect_errno() . "Error 3012, Please contact the CyberLife&trade; support.");
			return $result;
		} else { 
			return false;
		}
	}

	public function login($emailusername, $password) {
		// $password = password_hash($password, PASSWORD_BCRYPT);
		$sql2="SELECT id from users WHERE email='$emailusername' or username='$emailusername' and password='$password'";

		$result = mysqli_query($this->db,$sql2);
		$user_data = mysqli_fetch_array($result);
		$count_row = $result->num_rows;

		if ($count_row == 1) {
			$_SESSION['login'] = true;
			$_SESSION['id'] = $user_data['id'];
			return true;
		} else {
			return false;
		}
	}

	public function getUsername($id) {
		$sql3 = "SELECT username FROM users WHERE users.id = $id";
		$result = mysqli_query($this->db, $sql3);
		$user_data = mysqli_fetch_array($result);
		echo $user_data['username'];
	}

	public function returnSession() {
		return $_SESSION['login'];
	}

	public function logOut() {
		$_SESSION['login'] = FALSE;
		session_destroy();
	}
}
?>