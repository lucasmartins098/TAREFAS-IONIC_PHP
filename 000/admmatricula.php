<?php
 session_start();
 require_once "classes/Conexao.class.php";
 require_once "classes/Usuario.class.php";

  if(isset($_SESSION['logado']) && $_SESSION['nivel']=="admin"){
    
  
		
		if(isset($_POST['logout'])){
			Pessoa::deslogar();
		}
		
?>

<?php
  require_once "classes/Conexao.class.php";
	require_once "classes/Usuario.class.php";

	if (isset($_POST['botao'])):

		$login = filter_input(INPUT_POST, "matricula", FILTER_SANITIZE_MAGIC_QUOTES);
		$senha = filter_input(INPUT_POST, "senha", FILTER_SANITIZE_MAGIC_QUOTES);
    $nome = filter_input(INPUT_POST, "nome", FILTER_SANITIZE_MAGIC_QUOTES);
		$email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_MAGIC_QUOTES);
		$cpf = filter_input(INPUT_POST, "cpf", FILTER_SANITIZE_MAGIC_QUOTES);
		$tel = filter_input(INPUT_POST, "tel", FILTER_SANITIZE_MAGIC_QUOTES);
		
		
		if(empty($login) || empty($senha) || empty($nome) || empty($email) || empty($cpf) || empty($tel) ){
			
			echo "Preencha todas as informações!";
			
		}
		
else{
		$u = new Pessoa;
		$u->setLogin($login);
		$u->setSenha($senha);
    $u->setNome($nome);
		$u->setEmail($email);
		$u->setCpf($cpf);
		$u->setTel($tel);
		

		if($u->cadastrarAluno()):
			header("Location: index.php");
		else:
			$erro = "Erro ao cadastrar";
		endif;
	}
	endif;
  
  ?>


<html>
	
	 <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>Matrícula</title>
  </head>
  <body>
    

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  


 <nav class="navbar navbar-expand-lg navbar-light bg-light">
			 <a class="navbar-brand" href="adm.php">Início</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Horários <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Matrícula</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Boletos</a>
      </li>
			<li class="nav-item">
        <a class="nav-link" href="admmatricula.php">Mensagens</a>
      </li>
    </ul><ul class="navbar-nav mt-2 mt-lg-0">
    <li class="nav-item">
    <a class="nav-link" href="dashboard.php?logout=confirmar">Sair</a>
  </li>
</ul>
  </div>
</nav>

	
		</div>
	
	<div class="alert alert-primary container" role="alert">
  Cadastre as informações do aluno
</div>
	<div class="container">

		<form method="post" action="">
  <div class="form-group">
    <label for="name">Nome</label>
    <input type="name" class="form-control" id="nome" name="nome"  placeholder="Entre com o nome">
    
  </div>
			<div class="form-group">
    <label for="name">CPF</label>
    <input type="name" class="form-control" id="cpf" name="cpf"  placeholder="Entre com o CPF">
    
  </div>
			<div class="form-group">
    <label for="name">Telefone/Celular</label>
    <input type="name" class="form-control" id="tel" name="tel" placeholder="Entre com o Telefone/Celular">
    
  </div>
			<div class="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Entre com seu email">
   
  		</div>
			
			<div class="form-group">
    <label for="name">Numero de matrícula</label>
    <input type="name" class="form-control" id="matricula" name="matricula"  placeholder="O numero de matrícula será usado como usuário do aluno">
  		</div>
			
  <div class="form-group">
    <label for="exampleInputPassword1">Senha</label>
    <input type="password" class="form-control" id="senha" name="senha" placeholder="Crie uma senha para o aluno">
  </div>
  
  <button type="submit" name="botao" class="btn btn-primary">Confirmar</button>
</form>
		</div>
		<?php
		} 
else{
  echo "Você precisa está logado como administrador para ver essa página \n";
  ?>
<br>
<a href="index.php" value="Voltar">Voltar</a>
<?php
}

?>
	</body>
</html>