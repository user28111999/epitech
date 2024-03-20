<?php
class Files {
	public $db;

	public function __construct() {
		$this->db = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_DATABASE);
		if(mysqli_connect_errno()) {
			echo "Error 7825, Please contact the CyberLife&trade; support if you see this message.";
			exit;
		}
	}

	public function showFileName($id) {
		$sql4 = "SELECT name FROM files WHERE id_user = $id";
		$result = mysqli_query($this->db, $sql4);
		$user_data = mysqli_fetch_all($result);
		print(json_encode($user_data));
	}

	public function uploadFile($id, $name, $path) {
		$sql4 = "INSERT INTO files SET id_user='$id', name='$name', path='$path'";
		$result = mysqli_query($this->db, $sql4);
		return true;
	}
}
?>