-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 13-Jan-2019 às 18:52
-- Versão do servidor: 10.1.31-MariaDB
-- PHP Version: 7.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id5002328_sistema`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `administrador`
--

CREATE TABLE `administrador` (
  `idAdmin` int(5) NOT NULL,
  `administrador_usuario` varchar(255) NOT NULL,
  `administrador_senha` varchar(255) NOT NULL,
  `admnistrador_nome` varchar(255) NOT NULL,
  `nivel` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `administrador`
--

INSERT INTO `administrador` (`idAdmin`, `administrador_usuario`, `administrador_senha`, `admnistrador_nome`, `nivel`) VALUES
(1, 'Lucas', '123456', 'Lucas', 'admin'),
(12, 'usuario', '123', 'Fulano', 'usuario'),
(18, '12312', '4343', 'vbvgdfgdf', 'Usuario'),
(19, '5454547545', 'hfd', 'lucas', 'Usuario'),
(20, '111111', 'abcabc', 'Lucas', 'Usuario');

-- --------------------------------------------------------

--
-- Estrutura da tabela `aluno`
--

CREATE TABLE `aluno` (
  `cpf` varchar(20) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `matricula` int(11) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `tel` varchar(20) NOT NULL,
  `id_aluno` int(11) NOT NULL,
  `senha` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `aluno`
--

INSERT INTO `aluno` (`cpf`, `nome`, `matricula`, `email`, `tel`, `id_aluno`, `senha`) VALUES
('2147483647', 'Lucas', 5, 'lmartins15@hotmail.com', '2147483647', 5, 'teste'),
('13430069700', 'Lucas', 201669357, 'lmartins15@hotmail.com', '27997498758', 8, 'teste123'),
('13430069700', 'Lucas', 532, 'lmartins15@hotmail.com', '27997498758', 9, 'atrdfxf'),
('58', 'dwf', 2147483647, 'edf@hidhf.com', '63', 12, 'asd'),
('ddddd', 'dteggggggggggg', 2147483647, 'bghd@gkn.com', 'dbbghd', 13, 'fed'),
('13430069700', 'Lucas', 123456, 'd@hom.com', 'ds', 14, 'acdljiii'),
('Hs', 'Lucas', 0, 'av@hd.com', 'H', 15, '123vv'),
('', '', 446757, '', '', 16, '123'),
('', '', 3356, '', '', 17, ''),
('345345', 'vbvgdfgdf', 12312, 'gdg@fsdf.com', '345345', 18, '4343'),
('5456', 'lucas', 2147483647, 'fj@h.com', '6545', 19, 'hfd'),
('5454', 'Lucas', 111111, 'jd@hnf.com', '645454', 20, 'abcabc');

-- --------------------------------------------------------

--
-- Estrutura da tabela `Aluno_disciplina`
--

CREATE TABLE `Aluno_disciplina` (
  `nota` float DEFAULT NULL,
  `situacao` varchar(50) NOT NULL DEFAULT 'cursando',
  `falta` int(11) DEFAULT NULL,
  `id_AL` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `curso`
--

CREATE TABLE `curso` (
  `nome` varchar(100) NOT NULL,
  `id_curso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `curso_turma`
--

CREATE TABLE `curso_turma` (
  `id_turma` int(11) NOT NULL,
  `id_curso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `disciplina`
--

CREATE TABLE `disciplina` (
  `nome` varchar(100) NOT NULL,
  `pr1` varchar(100) DEFAULT NULL,
  `pr2` varchar(100) DEFAULT NULL,
  `pr3` varchar(100) DEFAULT NULL,
  `pr4` varchar(100) DEFAULT NULL,
  `pr5` varchar(100) DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `disciplina_turma_professor`
--

CREATE TABLE `disciplina_turma_professor` (
  `id_professor` int(11) NOT NULL,
  `id_turma` int(11) NOT NULL,
  `id_disciplina` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `professor`
--

CREATE TABLE `professor` (
  `nome` varchar(100) NOT NULL,
  `cpf` varchar(100) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `turma`
--

CREATE TABLE `turma` (
  `periodo` varchar(20) NOT NULL,
  `id_turma` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`idAdmin`);

--
-- Indexes for table `aluno`
--
ALTER TABLE `aluno`
  ADD PRIMARY KEY (`id_aluno`);

--
-- Indexes for table `Aluno_disciplina`
--
ALTER TABLE `Aluno_disciplina`
  ADD PRIMARY KEY (`id_AL`);

--
-- Indexes for table `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`id_curso`);

--
-- Indexes for table `curso_turma`
--
ALTER TABLE `curso_turma`
  ADD KEY `fk_t_c` (`id_turma`),
  ADD KEY `fk_c_t` (`id_curso`);

--
-- Indexes for table `disciplina`
--
ALTER TABLE `disciplina`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `disciplina_turma_professor`
--
ALTER TABLE `disciplina_turma_professor`
  ADD KEY `fk_P_t_d` (`id_professor`),
  ADD KEY `fk_t_d_p` (`id_turma`),
  ADD KEY `fk_d_t_p` (`id_disciplina`);

--
-- Indexes for table `professor`
--
ALTER TABLE `professor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `turma`
--
ALTER TABLE `turma`
  ADD PRIMARY KEY (`id_turma`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `administrador`
--
ALTER TABLE `administrador`
  MODIFY `idAdmin` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `aluno`
--
ALTER TABLE `aluno`
  MODIFY `id_aluno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `Aluno_disciplina`
--
ALTER TABLE `Aluno_disciplina`
  MODIFY `id_AL` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `curso`
--
ALTER TABLE `curso`
  MODIFY `id_curso` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `disciplina`
--
ALTER TABLE `disciplina`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `professor`
--
ALTER TABLE `professor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `turma`
--
ALTER TABLE `turma`
  MODIFY `id_turma` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `curso_turma`
--
ALTER TABLE `curso_turma`
  ADD CONSTRAINT `fk_c_t` FOREIGN KEY (`id_curso`) REFERENCES `curso` (`id_curso`),
  ADD CONSTRAINT `fk_t_a` FOREIGN KEY (`id_turma`) REFERENCES `turma` (`id_turma`);

--
-- Limitadores para a tabela `disciplina_turma_professor`
--
ALTER TABLE `disciplina_turma_professor`
  ADD CONSTRAINT `fk_P_t_d` FOREIGN KEY (`id_professor`) REFERENCES `professor` (`id`),
  ADD CONSTRAINT `fk_d_t_p` FOREIGN KEY (`id_disciplina`) REFERENCES `disciplina` (`id`),
  ADD CONSTRAINT `fk_t_d_p` FOREIGN KEY (`id_turma`) REFERENCES `turma` (`id_turma`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
