<?php
$teste = "Lucas";
$token = uniqid();
$teste2 = base64_encode($teste);
echo $token . $teste2;
?>
<html>
<br>

<?php
echo base64_decode($teste2);
?>
<br>
<?php
$json = '{"nome:" "'.$teste.'", "token":"'. $token.'"}';

//json_encode($json)
echo("<script>console.log('$json');</script>");
$json2 = json_encode($json);
echo("<script>console.log('$json2');</script>");
$json3 = json_decode($json);
//$nome = $json3->nome;
echo $json3->nome;
//echo $nome;
?>
<HTML/>
