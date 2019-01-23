-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 23-Jan-2019 às 03:28
-- Versão do servidor: 5.7.24
-- versão do PHP: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tarefas`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tarefa`
--

DROP TABLE IF EXISTS `tarefa`;
CREATE TABLE IF NOT EXISTS `tarefa` (
  `IdTarefa` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `descricao` varchar(1000) NOT NULL,
  `horario` time NOT NULL,
  `data` date NOT NULL,
  `IdUsuario_Tarefa` int(11) NOT NULL,
  `favorito` tinyint(1) DEFAULT '0',
  `realizada` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`IdTarefa`),
  KEY `Id_FK_Usuario_Tarefa` (`IdUsuario_Tarefa`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tarefa`
--

INSERT INTO `tarefa` (`IdTarefa`, `nome`, `descricao`, `horario`, `data`, `IdUsuario_Tarefa`, `favorito`, `realizada`) VALUES
(8, 'Tarefaaa', 'etstststsattattal', '00:00:00', '0000-00-00', 1, 1, 0),
(9, 'tares', 'eeeee', '00:00:00', '0000-00-00', 2, 1, 0),
(10, 'ssss', 'sssss', '07:42:00', '1990-02-24', 2, 0, 0),
(11, 'Tarefa', 'Lucas', '12:15:00', '2019-01-19', 1, 0, 0),
(17, '45641jghj', 'fghjk', '07:43:00', '1990-02-19', 2, 1, 0),
(18, '', '', '07:43:00', '1990-02-19', 2, 1, 0),
(19, 'ffff', 'fff', '07:43:00', '1990-02-19', 2, 1, 0),
(23, 'Titulo', 'DESC', '23:50:00', '1990-02-19', 3, NULL, NULL),
(24, '1', '1', '07:43:00', '1990-02-19', 3, NULL, NULL),
(29, '12qsq', '1eqwdqwfd', '07:43:00', '1990-02-19', 3, 1, NULL),
(30, 'lucas', 'des', '07:43:00', '1990-02-20', 3, 0, 0),
(31, 'lucas', 'des', '07:43:00', '1990-02-20', 3, 0, 0),
(32, '12qsq', '1eqwdqwfd', '07:43:00', '1990-02-19', 3, NULL, NULL),
(33, 'AGR', 'AGR@', '00:23:00', '1990-02-28', 3, NULL, NULL),
(34, 'AGR', 'AGR@@@@@@@', '00:23:00', '1990-02-28', 3, NULL, NULL),
(35, 'Ti', 'Ds', '07:43:00', '1990-02-19', 3, NULL, 0),
(36, 'Ti', 'Ds', '07:43:00', '1990-02-19', 3, 1, 0),
(37, '1', '1', '07:43:00', '1990-02-19', 3, 1, 0),
(38, '1', '1', '07:43:00', '1990-02-19', 3, 1, 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `IdUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `login` varchar(100) NOT NULL,
  `senha` varchar(100) NOT NULL,
  PRIMARY KEY (`IdUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`IdUsuario`, `nome`, `login`, `senha`) VALUES
(1, '41', 'Lucas', '123456'),
(2, '41', 'teste', '123'),
(3, '1', '1', '1');

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `tarefa`
--
ALTER TABLE `tarefa`
  ADD CONSTRAINT `Id_FK_Usuario_Tarefa` FOREIGN KEY (`IdUsuario_Tarefa`) REFERENCES `usuario` (`IdUsuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
