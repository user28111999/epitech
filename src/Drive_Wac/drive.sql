-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  jeu. 23 août 2018 à 12:58
-- Version du serveur :  10.1.34-MariaDB
-- Version de PHP :  7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `drive`
--

-- --------------------------------------------------------

--
-- Structure de la table `files`
--

CREATE TABLE `files` (
  `id_file` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `files`
--

INSERT INTO `files` (`id_file`, `id_user`, `name`, `path`) VALUES
(25, 2, 'Hitman.exe', 'assets/upload/2/Hitman.exe'),
(26, 3, 'aphex_airlines.mp3', 'assets/upload/3/aphex_airlines.mp3'),
(27, 1, 'readthis', 'assets/upload/1/readthis'),
(28, 4, 'leak_sujet_colles_par_un_mysterieux_pangolin.zip', 'assets/upload/4/leak_sujet_colles_par_un_mysterieux_pangolin.zip'),
(29, 5, 'old_boy_trailer.mp4', 'assets/upload/5/old_boy_trailer.mp4'),
(30, 1, 'testfile.zip', 'assets/upload/1/testfile.zip');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`) VALUES
(1, 'admin', 'admin', 'admin@cyberlife.net'),
(2, 'razor1911', '********', 'retr0@razor1911.org'),
(3, 'user18081971', 'aphextwin', 'richardjames@gmail.com'),
(4, 'pangolinLeak', 'secret123', 'ramassage-tek@epitech.eu'),
(5, 'freekoreanmovies', 'parkchanwook', '82931930@k.co.kr');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id_file`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `files`
--
ALTER TABLE `files`
  MODIFY `id_file` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
