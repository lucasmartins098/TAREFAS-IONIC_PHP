-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 17-Jan-2019 às 17:54
-- Versão do servidor: 10.1.37-MariaDB
-- versão do PHP: 7.3.0

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

CREATE TABLE `tarefa` (
  `IdTarefa` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `descricao` varchar(1000) NOT NULL,
  `horario` time NOT NULL,
  `data` date NOT NULL,
  `IdUsuario_Tarefa` int(11) NOT NULL,
  `favorito` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tarefa`
--

INSERT INTO `tarefa` (`IdTarefa`, `nome`, `descricao`, `horario`, `data`, `IdUsuario_Tarefa`, `favorito`) VALUES
(1, 'Lucas', 'ghf', '00:00:00', '0000-00-00', 1, 0),
(2, '13', '23', '00:00:00', '0000-00-00', 1, 0),
(3, 'tttt', 'ttssss', '00:00:00', '0000-00-00', 1, 1),
(4, 'Lucas', 'Luafa', '00:00:00', '0000-00-00', 1, 0),
(5, 'ffff', 'fffff', '00:00:00', '0000-00-00', 2, 0),
(6, 'ffff', 'fffff', '00:00:00', '0000-00-00', 2, 0),
(7, 'eyyee', 'testeteee', '00:00:00', '0000-00-00', 2, 1),
(8, 'Tarefaaa', 'etstststsattattal', '00:00:00', '0000-00-00', 1, 1),
(9, 'tares', 'eeeee', '00:00:00', '0000-00-00', 2, 1),
(10, 'ssss', 'sssss', '07:42:00', '1990-02-24', 2, 0),
(11, 'Tarefa', 'Lucas', '12:15:00', '2019-01-19', 1, 0),
(12, 'Tarefa', 'Lucas', '12:15:00', '2019-01-19', 1, 1),
(13, 'Lucas', '132', '00:00:00', '0000-00-00', 2, 1),
(14, 's', 's', '07:43:00', '1990-02-19', 2, 0),
(15, '23', '312', '07:43:00', '1990-02-19', 1, 1),
(16, 'Lucas', '123', '07:43:00', '1990-02-13', 1, 0),
(17, '45641jghj', 'fghjk', '07:43:00', '1990-02-19', 2, 1),
(18, '', '', '07:43:00', '1990-02-19', 2, 1),
(19, 'ffff', 'fff', '07:43:00', '1990-02-19', 2, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `IdUsuario` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `login` varchar(100) NOT NULL,
  `senha` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`IdUsuario`, `nome`, `login`, `senha`) VALUES
(1, '41', 'Lucas', '123456'),
(2, '41', 'teste', '123'),
(3, '1', '1', '1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tarefa`
--
ALTER TABLE `tarefa`
  ADD PRIMARY KEY (`IdTarefa`),
  ADD KEY `Id_FK_Usuario_Tarefa` (`IdUsuario_Tarefa`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`IdUsuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tarefa`
--
ALTER TABLE `tarefa`
  MODIFY `IdTarefa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `IdUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `tarefa`
--
ALTER TABLE `tarefa`
  ADD CONSTRAINT `Id_FK_Usuario_Tarefa` FOREIGN KEY (`idUsuario_Tarefa`) REFERENCES `usuario` (`IdUsuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
