<?php 

class BSQ {
	public $errors = [];
	public $file;
	public $max;
	public $number_of_lines;
	public $arr_map;
	public $formated_map;
	public $result;

	public function __construct($file) {
		$this->file = $file;
	}

	public function __destruct() {
		foreach ($this->errors as $error) {
			echo $this->error . "\n";
		}
	}

	public function drawBsq() {
		$first_time_max = true;
		for ($i = 0; $i < count($this->arr_map); $i++) {
			for ($j = 0; $j < count($this->arr_map[$i]); $j++) {
				if ($this->result[$i][$j] == $this->max && $first_time_max == true) {
					$first_time_max = false;
					for ($a = 0; $a !== $this->max; $a++) {
						for ($b = 0; $b !== $this->max; $b++) {
							$this->arr_map[$i-$a][$j-$b] = "x";
						}
					} 
				}
			}
		} foreach ($this->arr_map as $line) {
			foreach ($line as $char) {
				if ($char == "x") {
					echo $this->char . "\n";
				} else if ($char == "o") {
					echo $this->$char . "\n";
				} else {
					return null;
				}
			}
			echo "\n";
		}
		echo "\n";
	}

	public function defineBsq() {
		$result = $this->formated_map;
		$max = 0;
		for ($i = 0; $i < count($this->formated_map); $i++) {
			$result[$i][0] = $this->formated_map[$i][0];
			if ($result[$i][0] == 1) {
				$max = 1;
			}
		}
		for ($i = 0; $i < count($this->formated_map[0]); $i++) {
			$result[0][$i] = $this->formated_map[0][$i];
			if ($result[0][$i] == 1) {
				$max = 1;
			}
		}
		for ($i = 1; $i < count($this->formated_map); $i++) {
			for ($j = 1; $j < count($this->formated_map[$i]); $j++) {
				if ($this->formated_map[$i][$j] == 0) {
					continue;
				}
				$t = min($result[$i-1][$j], $result[$i-1][$j-1], $result[$i][$j-1]);
				$result[$i][$j] = $t + 1;
				if ($result[$i][$j] > $max) {
					$max = $result[$i][$j];
				}
			}
		}
		echo $this->max = $max;
		$this->result = $result;
		echo $this->drawBsq();
		return $this->max;
	}

	public function deleteJumpLine($arr) {
		for ($i = 0; $i < count($arr); $i++) {
			array_pop($arr[$i]);
		}
		return $arr;
	}

	public function verifyMapHeight($map, $mapHeight) {
		$lines = count(file($map)) - 1;
		$mapHeight = (int)$mapHeight;
		if ($lines !== $mapHeight) {
			return false;
		}
	}

	public function getMap() {
		$arr_map = [];
		$map = fopen($this->file, 'r+');
		for ($i = 0; $i <= $this->number_of_lines; $i++) {
	    	$line = fgets($map);
	    	$full_line = str_split($line);
	    	$arr_map[] = $full_line;
	    }
	    array_shift($arr_map);
	    fclose($map);
	    $this->arr_map = $this->deleteJumpLine($arr_map);
	}

	public function validatesAsInt($number) {
	    $number = filter_var($number, FILTER_VALIDATE_INT);
	    if (is_int($number)) {
	    	return true;
	    } else {
			return false;
	    }
	}

	public function getNumberLines() {
	    if (file_exists($this->file)) {
	        $map = fopen($this->file, 'r+');
	        $number_of_lines = fgets($map);
	        fclose($map);
	        if ($this->validatesAsInt($number_of_lines)) {
	        	if(!$this->verifyMapHeight($this->file, $number_of_lines)) {
	        		$this->number_of_lines = $number_of_lines;
	        	}
	        }      
	 	}
	    else {
	        return null;
	    }
	}

	public function transformMap() {
		$formated_map = $this->arr_map;
		for ($i = 0; $i < count($this->arr_map); $i++) {
			for ($j = 0; $j < count($this->arr_map[$i]); $j++) {
				if ($formated_map[$i][$j] == ".") {
					$formated_map[$i][$j] = preg_replace("/\./", 1, $this->arr_map[$i][$j]);
				}
				else if ($formated_map[$i][$j] == "o") {
					$formated_map[$i][$j] = preg_replace("/o/", 0, $this->arr_map[$i][$j]);
				}

			}
		}
		$this->formated_map = $formated_map;
	}
}

if ($argv[1]) {
	$map = new BSQ($argv[1]);
	$numberOfLines = $map->getNumberLines();
	$arr_map = $map->getMap();
	$formated_map = $map->transformMap();
	$map->defineBsq() . "\n";
} else {
	print("enter a file ples");
}