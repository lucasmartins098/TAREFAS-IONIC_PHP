<html>
  
	 <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>Home</title>
  </head>
	<body>
		
	
	
<?php
  require_once "classes/Conexao.class.php";
	require_once "classes/Usuario.class.php";

	if (isset($_POST['botao'])):

		$login = filter_input(INPUT_POST, "login", FILTER_SANITIZE_MAGIC_QUOTES);
		$senha = filter_input(INPUT_POST, "senha", FILTER_SANITIZE_MAGIC_QUOTES);
    $nome = filter_input(INPUT_POST, "nome", FILTER_SANITIZE_MAGIC_QUOTES);


		$u = new Pessoa;
		$u->setLogin($login);
		$u->setSenha($senha);
    $u->setNome($nome);

		if($u->cadastrar()):
			header("Location: index.php");
		else:
			$erro = "Erro ao cadastrar";
		endif;
	endif;
  
  ?>
  
		<div class="container">
			
		
<form class="form-horizontal" action="" method="POST">
<fieldset>

<!-- Form Name -->
<legend>Cadastro de usuários</legend>

<!-- Text input-->
<div class="control-group">
  <label class="control-label" for="textinput" name="nome">Nome</label>
  <div class="controls">
    <input id="textinput" name="nome" placeholder="" class="input-xlarge" required="" type="text">
    
  </div>
</div>

<!-- Text input-->
<div class="control-group">
  <label class="control-label" for="textinput" name="login">Usuário</label>
  <div class="controls">
    <input id="textinput" name="login" placeholder="" class="input-xlarge" required="" type="text">
    
  </div>
</div>
  
  <!-- Text input-->
<div class="control-group">
  <label class="control-label" for="textinput" name="senha">Senha</label>
  <div class="controls">
    <input id="textinput" name="senha" placeholder="" class="input-xlarge" required="" type="text">
    
  </div>
</div>
  
  <input type="submit" name="botao" value="Cadastrar">
  

</fieldset>
</form>
			</div>
  </body>
  </html>