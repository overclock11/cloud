-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.5.28 - MySQL Community Server (GPL)
-- Server OS:                    Win32
-- HeidiSQL version:             7.0.0.4053
-- Date/time:                    2017-09-24 12:47:54
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;

-- Dumping database structure for cloud
CREATE DATABASE IF NOT EXISTS `cloud` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `cloud`;


-- Dumping structure for table cloud.competition
CREATE TABLE IF NOT EXISTS `competition` (
  `name` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` longtext,
  `active` tinyint(1) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `url_image_banner` varchar(255) DEFAULT NULL,
  `date_start` datetime DEFAULT NULL,
  `date_end` datetime DEFAULT NULL,
  `show_home` float DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `url` (`url`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table cloud.competition: ~2 rows (approximately)
/*!40000 ALTER TABLE `competition` DISABLE KEYS */;
INSERT INTO `competition` (`name`, `company`, `url`, `image`, `description`, `active`, `id`, `createdAt`, `updatedAt`, `url_image_banner`, `date_start`, `date_end`, `show_home`, `user_id`) VALUES
	('Los simpson', 'Homerotes inc', 'homerotes concuros', NULL, 'Agrega tu simspmns favorito', 1, 1, '2017-09-13 17:57:25', NULL, 'http://www.ideal.es/noticias/201612/30/media/cortadas/homer-k42-U211027266521AQG-575x323@Ideal.jpg', '2017-09-01 05:00:00', '2017-09-30 05:00:00', 1, 58),
	('Concurso', 'Cosensa', 'urlconcuros', NULL, 'mtorola', 1, 2, '2017-09-13 18:16:31', NULL, 'https://s3-us-west-2.amazonaws.com/clastia/motorola/motog5/bottom.png', '2017-09-01 05:00:00', '2017-09-30 05:00:00', 1, 58);
/*!40000 ALTER TABLE `competition` ENABLE KEYS */;


-- Dumping structure for table cloud.state
CREATE TABLE IF NOT EXISTS `state` (
  `name` varchar(255) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table cloud.state: ~0 rows (approximately)
/*!40000 ALTER TABLE `state` DISABLE KEYS */;
/*!40000 ALTER TABLE `state` ENABLE KEYS */;


-- Dumping structure for table cloud.user
CREATE TABLE IF NOT EXISTS `user` (
  `username` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `manager` float DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=latin1;

-- Dumping data for table cloud.user: ~18 rows (approximately)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`username`, `name`, `surname`, `email`, `password`, `manager`, `active`, `id`, `createdAt`, `updatedAt`) VALUES
	('Cris', 'Rows', 'frome', 'jlian92@hotmail.com', NULL, NULL, NULL, 56, NULL, NULL),
	('Camilo', 'Camil', 'Borray', 'jfborrayg@libertadores.edu.co', NULL, NULL, NULL, 57, NULL, NULL),
	('julian', 'julian', 'julian', 'julian92@gmail.com', 'julian', NULL, 1, 58, NULL, NULL),
	('Manuela', 'Manu ortiz', 'Ortiz', 'manu@gmail.com', NULL, NULL, NULL, 59, NULL, NULL),
	('Tomás', 'Video de prueba', 'Burgos', 'tomasBorgos@gmal.com', NULL, NULL, NULL, 60, NULL, NULL),
	('Tomás2', 'Video de prueba', 'Burgos1', 'tomasBor2gos@gmal.com', NULL, NULL, NULL, 63, NULL, NULL),
	('la red', 'Mi video sobre la red', 'roja', 'redroja@gmail.com', NULL, NULL, NULL, 64, NULL, NULL),
	('Cagador', 'Videion ', 'Brutal', 'cacazo@hotmail.com', NULL, NULL, NULL, 65, NULL, NULL),
	('juli2an', 'fabrisetas login2', 'Com2petition', 'cnavarr1op@unal.edu.co', NULL, NULL, NULL, 67, '2017-09-13 12:59:00', NULL),
	('Via publica', 'mi video 2', 'parqueadero', 'parqueadero@gmail.com', NULL, NULL, NULL, 68, '2017-09-13 13:01:50', NULL),
	('Senr', 'Mojon', 'mojon', 'mojon1@hotmail.com', NULL, NULL, NULL, 69, '2017-09-13 13:04:24', NULL),
	('juan', 'juan', 'juan', 'juan@gmail.com', 'juan', NULL, 1, 70, '2017-09-13 13:19:07', NULL),
	('Carmelo', 'el video de armelo', 'Valencia', 'carmelo@gmail.com', NULL, NULL, NULL, 71, '2017-09-13 13:28:00', NULL),
	('Carm1elo', 'el vide1o de armelo', 'Vale1ncia', 'carm1elo@gmail.com', NULL, NULL, NULL, 72, '2017-09-13 13:28:17', NULL),
	('El pibe', 'Pibitos', 'valderrama', 'lepibe@gmail.com', NULL, NULL, NULL, 73, '2017-09-13 13:31:51', NULL),
	('Uno mas', 'Titulo uno ', 'de pibitos', 'unomasdepibitos@gmail.com', NULL, NULL, NULL, 74, '2017-09-13 13:45:11', NULL),
	('Daniel', 'gmail.com', 'rugio', 'cansdai@gmail.com', NULL, NULL, NULL, 75, '2017-09-13 14:38:25', NULL),
	('muichos', 'simple', 'videos enbase', 'jlian92@gmail.com', NULL, NULL, NULL, 76, '2017-09-19 22:16:27', NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;


-- Dumping structure for table cloud.video
CREATE TABLE IF NOT EXISTS `video` (
  `name` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `description` longtext,
  `notify` tinyint(1) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `url_master` varchar(255) DEFAULT NULL,
  `show_home` tinyint(1) DEFAULT NULL,
  `competition_id` int(11) DEFAULT NULL,
  `state_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `url` (`url`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- Dumping data for table cloud.video: ~9 rows (approximately)
/*!40000 ALTER TABLE `video` DISABLE KEYS */;
INSERT INTO `video` (`name`, `url`, `description`, `notify`, `active`, `id`, `createdAt`, `updatedAt`, `url_master`, `show_home`, `competition_id`, `state_id`, `user_id`) VALUES
	('Mojon', 'http://localhost:3001/public/videos/eee.mov', 'Senor', 1, 0, 1, '2017-09-13 13:05:26', NULL, 'http://localhost:3001/public/videos-render/eee.mp4', 1, 1, 1, 69),
	('san1tyariza1', 'http://localhost:3001/public/videos/re221ad.MOV', 'aaabbbcccdddeee', 1, 0, 2, '2017-09-13 13:06:28', NULL, 'http://localhost:3001/public/videos-render/re221ad.mp4', 1, 1, 1, 56),
	('Pibitos', 'http://localhost:3001/public/videos/87eee.mov', 'Los pibes ', 1, 0, 3, '2017-09-13 13:43:51', NULL, 'http://localhost:3001/public/videos-render/87eee.mp4', 1, 2, 1, 73),
	('Titulo uno ', 'http://localhost:3001/public/videos/37re221ad.MOV', 'unomasde pibitos si piibitos', 1, 0, 4, '2017-09-13 13:45:19', NULL, 'http://localhost:3001/public/videos-render/37re221ad.mp4', 1, 2, 1, 74),
	('Julian', 'http://localhost:3001/public/videos/96re221ad.MOV', 'dasdadasdad', 1, 0, 5, '2017-09-13 13:50:06', NULL, 'http://localhost:3001/public/videos-render/96re221ad.mp4', 1, 2, 1, 56),
	('gmail.com', 'http://localhost:3001/public/videos/6re221ad.MOV', 'daoskdopasdjkioasd', 1, 0, 6, '2017-09-13 14:41:04', NULL, 'http://localhost:3001/public/videos-render/6re221ad.mp4', 1, 1, 1, 75),
	('Prueba de correo', 'http://localhost:3001/public/videos/3956eee.mov', 'Prueba de correo con envio dinamico', 1, 0, 7, '2017-09-13 14:49:23', NULL, 'http://localhost:3001/public/videos-render/3956eee.mp4', 1, 1, 1, 56),
	('simple', 'http://localhost:3001/public/videos/465eee.mov', 'email service aws', 1, 0, 8, '2017-09-19 22:16:27', NULL, 'http://localhost:3001/public/videos-render/465eee.mp4', 1, 1, 1, 76),
	('En moto', 'http://localhost:3001/public/videos/6262eee.mov', 'La moto de randy marsh', 0, 0, 9, '2017-09-21 21:35:43', NULL, NULL, 0, 2, 1, 57);
/*!40000 ALTER TABLE `video` ENABLE KEYS */;
/*!40014 SET FOREIGN_KEY_CHECKS=1 */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
