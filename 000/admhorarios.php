<?php

 session_start();
 require_once "classes/Conexao.class.php";
 require_once "classes/Usuario.class.php";

  if(isset($_SESSION['logado']) && $_SESSION['nivel']=="admin"){
    
  
		
		if(isset($_POST['logout'])){
			Pessoa::deslogar();
		}
?>

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
    </ul><ul class="navbar-nav mt-2 mt-lg-0">
    <li class="nav-item">
    <a class="nav-link" href="dashboard.php?logout=confirmar">Sair</a>
  </li>
</ul>
  </div>
</nav>

<?php
		echo "Usuário administrador, ".$_SESSION['administrador'];
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