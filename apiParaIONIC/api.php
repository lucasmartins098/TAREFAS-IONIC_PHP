<?php
    require_once('Usuario.class.php');
	require_once('Tarefa.class.php');
	
    //http://stackoverflow.com/questions/18382740/cors-not-working-php
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
    //http://stackoverflow.com/questions/15485354/angular-http-post-to-php-and-undefined
    $postdata = file_get_contents("php://input");
    
    //if (isset($postdata)) {
        $json    =  file_get_contents('php://input');
        $obj     =  json_decode($json);
        $key     =  strip_tags($obj->key);
        $request = json_decode($postdata);
        $usuario = new Usuario;
		$tarefa = new Tarefa;
		
        $key = strip_tags($obj->key);
        switch($key)
         {
         CASE "cadastrar" :
         $nome = $obj->nome;
         $usuario->cadastrarUsuario($nome);
         break;
         CASE "deletar" :
         $idUsuario =  $obj->IdUsuario;
		 if(is_null($idUsuario)){
			 echo "usuario nulo".$idUsuario;
		 }
		else{
         $usuario->deletarUsuario($idUsuario);
		 }
         break;
         CASE "editar":
         $idUsuario =  $obj->IdUsuario;
         $nome = $obj->nome;
		 if(is_null($idUsuario) || is_null($nome)){
			 echo "Nome ou Id não pode ser nulo".$idUsuario;
		 }
		else{
         $usuario->editarUsuario($idUsuario,$nome);
		}
		 break;
         CASE "listar":
         $usuario->listarUsuario();
         break;
		 CASE "cadastrarTarefa":
		 $tarefa->setNome($obj->nome);
		 $tarefa->setDescricao($obj->descricao);
		 $tarefa->setFavorito($obj->favorito);
		 $tarefa->setHorario($obj->horario);
         $tarefa->setData($obj->data);
		 $tarefa->setIdUsuario($obj->idUsuario);
		 $tarefa->cadastrarTarefa();
         break;
		 CASE "listarTarefas":
		 //echo "IdUsuario: //////".$obj->idUsuario."//////////////";
		 $tarefa->setIdUsuario($obj->idUsuario);
         $tarefa->listarTarefas();
         break;
		 CASE "deletarTarefa":
		 	 if(is_null($obj->idTarefa)){
			 echo "Id não pode ser nulo";
		 }
		 else{
		 $tarefa->setIdTarefa($obj->idTarefa);
         $tarefa->deletarTarefa();
         }
		 break;
		 CASE "logar":
         $usuario->setLogin($obj->login);
    	 $usuario->setSenha($obj->senha);
         $usuario->logar();
         break;
		 CASE "editarTarefa":
         $tarefa->setNome($obj->nome);
    	 $tarefa->setDescricao($obj->descricao);
		 $tarefa->setIdTarefa($obj->idTarefa);
		 $tarefa->setHorario($obj->horario);
		 $tarefa->setData($obj->data);
		 $tarefa->setFavorito($obj->favorito);
		 $tarefa->setRealizada($obj->realizada);
         $tarefa->editarTarefa();
         break;
         }
//    }
//    else 
//     {
//         echo "Os parametros estão nulos";
//     }
?>