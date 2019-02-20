<?php

function prime_numbers(int $number) {
	for($x = 2; $x < $number; $x++) {
		if($number %$x == 0) {
			print("false\n");
		}
	}
	print($number . " est premier\n");
}

prime_numbers(97);

?>