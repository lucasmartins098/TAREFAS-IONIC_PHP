<?php
	//session_start();

	require_once "classes/Conexao.class.php";
	require_once "classes/Usuario.class.php";

	if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }
 
    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
 
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
 
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
 
        exit(0);
    }

	$postdata = file_get_contents("php://input");
    
    
    
// 	if (isset($_POST['ok'])):

// 		$login = filter_input(INPUT_POST, "login", FILTER_SANITIZE_MAGIC_QUOTES);
// 		$senha = filter_input(INPUT_POST, "senha", FILTER_SANITIZE_MAGIC_QUOTES);

// 		$l = new Pessoa;
// 		$l->setLogin($login);
// 		$l->setSenha($senha);

// 		if($l->logar()):
// 			//header("Location: dashboard.php");
// 		else:
// 		  return $erro = "Erro ao logar";
// 		endif;
// 	endif;


// 	if(isset($_SESSION['logado']) && $_SESSION['nivel'] == "usuario"){
// 		header("Location: dashboard.php");
// }
// else if(isset($_SESSION['logado']) && $_SESSION['nivel'] == "admin"){
//  header("Location: adm.php");
// }

// 	else
?>