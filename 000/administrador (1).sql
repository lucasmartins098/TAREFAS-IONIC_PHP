



CREATE TABLE IF NOT EXISTS `administrador` (
  `idAdmin` int(5) NOT NULL,
  `administrador_usuario` varchar(255) NOT NULL,
  `administrador_senha` varchar(255) NOT NULL,
  `admnistrador_nome` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;



INSERT INTO `administrador` (`idAdmin`, `administrador_usuario`, `administrador_senha`, `admnistrador_nome`) VALUES
(1, 'admin', '123456', 'Lucas');



ALTER TABLE `administrador`
  ADD PRIMARY KEY (`idAdmin`);


ALTER TABLE `administrador`
  MODIFY `idAdmin` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;

