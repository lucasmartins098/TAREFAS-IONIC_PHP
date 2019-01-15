<?php
	require_once("conexao.class.php");
	session_start();
	if($_SESSION['logado'] == true){
	class Usuario extends Conexao{

		private $nome;
		private $idTarefa;
		private $descricao;
		private $favorito;
		private $idUsuario;
		private $dataInicio;
		private $dataFim;
	
	public function getNome(){
		return $this->nome;
	}

	public function setNome($nome){
		$this->nome = $nome;
	}

	public function getIdTarefa(){
		return $this->idTarefa;
	}

	public function setIdTarefa($idTarefa){
		$this->idTarefa = $idTarefa;
	}

	public function getDescricao(){
		return $this->descricao;
	}

	public function setDescricao($descricao){
		$this->descricao = $descricao;
	}

	public function getIdUsuario(){
		return $this->idUsuario;
	}

	public function setIdUsuario($idUsuario){
		$this->idUsuario = $idUsuario;
	}

	public function getFavorito(){
		return $this->favorito;
	}

	public function setFavorito($favorito){
		$this->favorito = $favorito;
	}

	public function getDataInicio(){
		return $this->dataInicio;
	}

	public function setDataInicio($dataInicio){
		$this->dataInicio = $dataInicio;
	}

	public function getDataFim(){
		return $this->dataFim;
	}

	public function setDataFim($dataFim){
		$this->dataFim = $dataFim;
	}
	
	
    public function cadastrarTarefa(){
      try{
          $pdo = parent::getDB();
          // $query = $pdo->prepare("select * from tarefa where nome = ?");
          // $query->bindValue(1, $nome);	
          // $query->execute();
        
            // if($query->rowCount() >= 1)
              // {
              // echo "Usuario já existe!";
              //}
              //else
                //{
				$idUsuario = $_SESSION['IdUsuario'];
                $stmt2 = $pdo->prepare("INSERT INTO tarefa(nome, descricao, favorito, dataInicio, dataFim, IdUsuario) VALUES(?,?,?,?,?)");
                $stmt2->bindValue(1, $this->getNome());
				$stmt2->bindValue(2, $this->getDescricao());
				$stmt2->bindValue(3, $this->getFavorito());
				$stmt2->bindValue(4, $this->getDataInicio());
				$stmt2->bindValue(5, $this->getDataFim());
				$stmt2->bindValue(5, $idUsuario );
                $stmt2->execute();
                echo "tarefa inserida com sucesso";
                //} 
          }//fim do try
                catch(PDOException $e)
                {
                echo $e->getMessage();
                }
        }

		
			
		public function deletarTarefa()
       {
        try
        {
          $pdo = parent::getDB();
          $query = $pdo->prepare("DELETE FROM tarefa WHERE idTarefa = ?");
          $query->bindParam(1, $this->getIdTarefa);
          $query->execute();

          echo ('Tarefa excluída com sucesso');
        }
          catch(PDOException $e)
          {
              echo $e->getMessage();
          }
       }
    
       public function editarTarefa()
       {
        try
        {
          $pdo = parent::getDB();
          $query = $pdo->prepare("UPDATE Usuario SET nome = ? WHERE id = ?");
          $query->bindParam(1, $nome);
          $query->bindParam(2, $idUsuario);
          $query->execute();

          echo ('Usuário editado com sucesso');
        }
          catch(PDOException $e)
          {
              echo $e->getMessage();
          }
       }

      public function listarUsuario()
      {
          try 
          {
            $data = array();
            $pdo = parent::getDB();
            $query = $pdo->prepare("SELECT id, nome FROM Usuario ORDER BY nome ASC");
              while($row  = $query->fetch(PDO::FETCH_OBJ))
              {
                $data[] = $row;
              }
              echo json_encode($data);
          }
            catch(PDOException $e)
            {
                echo $e->getMessage();
            }
      }

	  public function logar(){
		try 
          {
		$pdo = parent::getDB();

		$logar = $pdo->prepare("SELECT nome,login,IdUsuario,token FROM usuario WHERE login = ? AND senha = ?");
		$logar->bindValue(1, $this->getLogin());
		$logar->bindValue(2, $this->getSenha());
		$logar->execute();
		if ($logar->rowCount() == 1){
			$retorno = array();
			$dados = $logar->fetch(PDO::FETCH_OBJ);
			$login_Cri = base64_encode($this->getLogin());
			$rand = uniqid();
			$token = $login_Cri.$rand;
			//$_SESSION['nome'] = $dados->admnistrador_nome;
			//$_SESSION['logado'] = true;
			//$_SESSION['nivel'] = $dados->nivel;
			$IdUsuario = $dados->IdUsuario;
			$this->setIdUsuario($IdUsuario);
			$nomeUsuario = $dados->nome;
			$this->setNome($nomeUsuario);
			$stmt = $pdo->prepare("UPDATE usuario set token = ? where IdUsuario = ?");
			$stmt->bindValue(1, $token);
			$stmt->bindValue(2, $this->getIdUsuario());
			$stmt->execute();
			  //echo '{"nome":"Jason Jones", "idade":38, "sexo": "M"}';
			  $this->setlogado(true);
			  $_SESSION['logado'] = true;
			  echo '{"Login": "'.$this->getLogin().'", "Token":"'. $token.'", "Nome":"'.$this->getLogin().'", "IdUsuario":"'.$this->getIdUsuario().'"}';
		}
		else
		{
			echo 0;
		}
	}
	catch(PDOException $e)
	{
		echo $e->getMessage();
	}

	}
	  
      //   public function logar(){
      //       $pdo = parent::getDB();
            
      //       /*faço meu select com o banco de dados já criado*/
      //       $logar = $pdo->prepare ("SELECT * FROM usuario WHERE login = ? AND senha = ?");
      //       $logar->bindValue(1, $this->getLogin());
      //       $logar->bindValue(2, $this->getSenha());
      //       $logar->execute();
      //       if ($logar->rowCount()== 1):
      //           $dados = $logar->fetch(PDO::FETCH_OBJ);
                
      //           /*neste ponto informo a tabela que contem o dados do usuário*/
      //           $_SESSION['usuario'] = $dados->nome;
      //           $_SESSION['id_usuario'] = $dados->id_usuario;
      //           /*Aqui informo se o mesmo se encontra logado*/
      //           $_SESSION['logado'] = true;


      //           return true;
      //       else:
      //           return false;
      //       endif;
      //   }


      //   public static function deslogar(){
      //       if(isset($_SESSION['logado']))
			// {
      //           unset($_SESSION['logado']);
      //           session_destroy();
      //           header("http://localhost/oracao/index.php");
			// }
      //   }
		
		
		// public function cadastrarUsuario($email,$nome,$senha,$login)
		// {
		// 	$pdo = parent::getDB();
                      
    //         /*faço meu select com o banco de dados já criado*/
    //         $duplicidadeLogin = $pdo->prepare ("SELECT * FROM usuario WHERE login = ?");
    //         $duplicidadeLogin->bindValue(1, $login);
    //         $duplicidadeLogin->execute();
    //         if ($duplicidadeLogin->rowCount()>= 1)
		// 	{              
		// 		echo "<div class='container'><div class='alert alert-danger' role='alert'>
		// 				Usuário já existe!
		// 			  </div></div>";
           
		// 	}
    //  		  else  /*faço insert no banco*/
		//   {
		// 	$inserir = $pdo->prepare("insert usuario(nome,login,email,senha) values(?,?,?,?)");
    //         $inserir->bindValue(1, $nome);
    //         $inserir->bindValue(2, $login);
		// 	$inserir->bindValue(3, $email);
    //         $inserir->bindValue(4, $senha);
    //         $inserir->execute();
		// 	echo "<div class='container'>
		// 			<div class='alert alert-success' role='alert'>
		// 				Usuário cadastrado com sucesso!
		// 			</div>
		// 		</div>";
		//   }		
		// }
		
    }
		}
		else{
			echo "Você precisa está logado";
		}
?>