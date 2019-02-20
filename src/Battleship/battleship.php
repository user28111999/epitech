<?php



function fuck($x, $y)
{
    if ($x == 0 || $y == 0)
    {
        return -1;
    }
    $str = "+";
    $str2 = "|";
    $i = 0;
    while ($i != $x) 
    {
        $str .= "---+";
        $str2 .= "   |";
        $i++;       
    }
    $i = 0;
    while ($i != $y)
    {
        echo $str . "\n";
        echo $str2 . "\n";
        $i++;
    }
    echo $str . "\n";
}

function initFuck($x, $y, $arr)
{
    $i = 0;
    while ($i != $x)
    {
        $j = 0;
        while ($j != $y) 
        {
            $arr[$i][$j] = " ";
            $j++;
        }
        $i++;
    }
    return ($arr);
}

function displayFuck($x, $y, $arr)
{
    $i = 0;
    $thot = " ";
    while ($i != $x)
    {
        $j = 0;
        $str = "+";
        $str2 = "|";
        while ($j != $y)
        {
            $str .= "---+";
            $str2 .= "   |";
            $j++;
        }
        $thot .= $str . "\n" . $str2 . "\n";
        $i++;
    }
    $thot .= $str . "\n";
    echo $thot;
}



function startFuck($x, $y, $coords = null)
{
    if ($x == 0 || $y == 0) 
    {
        return -1;
    }
    $arr = [];
    $arr = initFuck($x, $y, $arr);
    foreach ($coords as $val) 
    {
        $arr[$val[0][$val[1]]] = "x";
    }
    displayFuck($x, $y, $arr);
    while (($f = fgets(STDIN)) != "quit\n")
    {
        echo $f;
    }
}

fuck(3,2);