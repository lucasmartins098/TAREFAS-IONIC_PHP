<?php

class Pessoa extends Conexao {

	private $login;
	private $senha;
	private $nome;
	private $email;
	private $cpf;
	private $tel;

	
	public function setEmail($emailUsuario){
		$this->email = $emailUsuario;
	}
	public function getEmail(){
		return $this->email;
	}
	
	public function setCpf($cpfusuario){
		$this->cpf = $cpfusuario;
	}
	public function getCpf(){
		return $this->cpf;
	}
	
	public function setTel($telusuario){
		$this->tel = $telusuario;
	}
	public function getTel(){
		return $this->tel;
	}
	
	
	public function setNome($nomeUsuario){
		$this->nome = $nomeUsuario;
		
	}
	public function getNome(){
		
		return $this->nome;
		
	}
	
	public function setLogin($login){
		$this->login = $login;
	}
	public function setSenha($senha){
		$this->senha = $senha;
	}
	public function getLogin(){
		return $this->login;
	}
	public function getSenha(){
		return $this->senha;
	}

	// function login() {
    
	// 	$request = \Slim\Slim::getInstance()->request();
	// 	$data = json_decode($request->getBody());
		
	// 	try {
			
	// 		$db = getDB();
	// 		$userData ='';
	// 		$sql = "SELECT user_id, fname, lname, username FROM users WHERE username=:username and password = :password";
	// 		$stmt = $db->prepare($sql);
	// 		$stmt->bindParam("username", $data->username,PDO::PARAM_STR);
	// 		$password=hash('sha256',$data->password);
	// 		$stmt->bindParam("password", $password,PDO::PARAM_STR);
	// 		$stmt->execute();
	// 		$mainCount=$stmt->rowCount();
	// 		$userData = $stmt->fetch(PDO::FETCH_OBJ);
			
	// 		if(!empty($userData))
	// 		{
	// 			$user_id=$userData->user_id;
	// 			$userData->token = apiToken($user_id);
	// 		}
			
	// 		$db = null;
	// 		 if($userData){
	// 			   $userData = json_encode($userData);
	// 				echo '{"userData": ' .$userData . '}';
	// 			} else {
	// 			   echo '{"error":{"text":"Bad request wrong Username & Password"}}';
	// 			}
	
			   
	// 	}
	// 	catch(PDOException $e) {
	// 		echo '{"error":{"text":'. $e->getMessage() .'}}';
	// 	}
	// }


	public function logar(){
		try 
          {
		$pdo = parent::getDB();

		$logar = $pdo->prepare("SELECT * FROM usuario WHERE login = ? AND senha = ?");
		$logar->bindValue(1, $this->getLogin());
		$logar->bindValue(2, $this->getSenha());
		$logar->execute();
		if ($logar->rowCount() == 1){
			$retorno = array();
			//$dados = $logar->fetch(PDO::FETCH_OBJ);
			$login_Cri = base64_encode($this->getLogin());
			$rand = uniqid();
			$token = $login_Cri.$rand;
			//$_SESSION['nome'] = $dados->admnistrador_nome;
			//$_SESSION['logado'] = true;
			//$_SESSION['nivel'] = $dados->nivel;
			$stmt = $pdo->prepare("UPDATE usuario set token = ? where idUsuario = ?");
			$stmt->bindValue(1, $token);
			$stmt->bindValue(2, $this->getIdUsuario());
			$stmt->execute();
			while($row = $logar->fetch(PDO::FETCH_OBJ))
              {
                $retorno[] = $row;
              }
              echo json_encode($retorno);
		}
		else
		{
			echo "Usuário não existe";
		}
	}
	catch(PDOException $e)
	{
		echo $e->getMessage();
	}

	}

	public static function deslogar() {
		if(isset($_SESSION['logado'])):
			unset($_SESSION['logado']);
		$_SESSION['nivel'] = "";
			session_destroy();
			header("Location: index.php");
		endif;
	}
	
	
	
	public function cadastrarAluno(){
		try {
    $pdo = parent::getDB();
   $query = $pdo->prepare("select * from aluno where matricula = ?");
	 $query->bindValue(1, $this->getLogin());	
			$query->execute();
			
			if($query->rowCount() >= 1){
				echo "Usuario já existe!";
			}
			else{
  		$stmt2 = $pdo->prepare("INSERT INTO aluno(nome,senha,matricula, email, cpf, tel) VALUES(?,?,?,?,?,?)");
 
				$stmt2->bindValue(1, $this->getNome());
				$stmt2->bindValue(2, $this->getSenha());
				$stmt2->bindValue(3, $this->getLogin());
				$stmt2->bindValue(4, $this->getEmail());
				$stmt2->bindValue(5, $this->getCpf());
				$stmt2->bindValue(6, $this->getTel());
				$stmt2->execute();

				
				//faz o usuario e senha
				$stmt3 = $pdo->prepare("INSERT INTO administrador(administrador_usuario, administrador_senha, admnistrador_nome, nivel) VALUES (?,?,?,?)");
 
				$stmt3->bindValue(1, $this->getLogin());
				$stmt3->bindValue(2, $this->getSenha());
				$stmt3->bindValue(3, $this->getNome());
				$stmt3->bindValue(4, "Usuario");
				$stmt3->execute();
				
				
				


?>
  				<div class="alert alert-success container" role="alert">
							Aluno cadastrado com sucesso.
				</div>
<?php
				}
} catch(PDOException $e) {
			
  echo 'Error: ' . $e->getMessage();
			
	}
}
	
	//public function Carregarcomentarios(){
		
		 //$pdo = parent::getDB();
   //$query = $pdo->prepare("select * from comentarios");
	 //$query->execute();
		
	//	$dados = $query->fetch(PDO::FETCH_OBJ);
		
	//	foreach($dados as $listar){
       //     echo $listar->conteudo;
		//}
	
	
	
	//}
	
}

?>
