-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.5.28 - MySQL Community Server (GPL)
-- Server OS:                    Win32
-- HeidiSQL version:             7.0.0.4053
-- Date/time:                    2017-09-07 22:30:58
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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

-- Dumping data for table cloud.competition: ~3 rows (approximately)
/*!40000 ALTER TABLE `competition` DISABLE KEYS */;
INSERT INTO `competition` (`name`, `company`, `url`, `image`, `description`, `active`, `id`, `createdAt`, `updatedAt`, `url_image_banner`, `date_start`, `date_end`, `show_home`, `user_id`) VALUES
	('nombre222', 'compania', 'urlconcuros', NULL, 'Competencia de perros', 1, 1, NULL, '2017-09-06 22:16:35', 'https://www.anipedia.net/imagenes/videos-gatos.jpg', NULL, NULL, 1, 1),
	('Don concurso', 'senorx man', 'senor-x', NULL, 'Login y publicacion con fabricetas', 0, 2, NULL, NULL, 'http://pm1.narvii.com/6372/e0e7cf4d29d16673a98161e42385f5efd5cb5c92_hq.jpg', NULL, NULL, 1, 7),
	('bC', 'cb', '123-45', NULL, 'sadad', 0, 3, NULL, NULL, 'https://www.anipedia.net/imagenes/videos-gatos.jpg', NULL, NULL, 1, NULL),
	('Fecha', 'calendarios darius', 'calendarius', NULL, 'Calendarios videos', 1, 4, NULL, NULL, 'https://assets-cdn.github.com/images/modules/site/logos/desktop-logo.png', NULL, NULL, 1, 1),
	('Fechamn', 'compania!!', 'aurelio', NULL, 'assest grtihub', 1, 5, NULL, NULL, 'https://assets-cdn.github.com/images/modules/site/logos/desktop-logo.png', '2017-09-01 05:00:00', '2017-09-01 05:00:00', 1, NULL),
	('Fecha1mn', 'co2mpania!!', 'aure2lio', NULL, 'assest grtihub', 1, 8, NULL, NULL, 'https://assets-cdn.github.com/images/modules/site/logos/desktop-logo.png', '2017-09-01 00:00:00', '2017-09-01 00:00:00', 1, 7),
	('Probando ir', 'usuario', 'usuario-io', NULL, 'Competencia de perros', 1, 9, NULL, NULL, 'https://www.anipedia.net/imagenes/videos-gatos.jpg', '2017-09-01 05:00:00', '2017-09-29 05:00:00', 1, NULL),
	('asus', 'Asus inc', 'pc-asus', NULL, 'Concurso del senor x', 1, 10, NULL, NULL, 'https://assets-cdn.github.com/images/modules/site/logos/desktop-logo.png', '2017-09-28 05:00:00', '2017-09-01 05:00:00', 1, 7),
	('Shuffle', 'apple', 'apple-suffle', NULL, 'Concurso del senor x', 1, 11, NULL, NULL, 'http://pm1.narvii.com/6372/e0e7cf4d29d16673a98161e42385f5efd5cb5c92_hq.jpg', '2017-09-01 05:00:00', '2017-09-30 05:00:00', 1, NULL),
	('nuevo', 'nuev', 'nuebo', NULL, 'competencia', 1, 12, NULL, NULL, 'https://www.anipedia.net/imagenes/videos-gatos.jpg', '2017-09-01 05:00:00', '2017-10-31 05:00:00', 1, NULL),
	('cread', 'cion', 'daoisdja', NULL, 'jidaoisdj', 1, 13, NULL, NULL, 'iojdaiosdj', '2017-09-01 05:00:00', '2017-09-30 05:00:00', 1, NULL),
	('sdf', 'd', 'dfg', NULL, 'ghjgh', 1, 14, NULL, NULL, 'fghfgh', '2017-09-07 05:00:00', '2017-09-30 05:00:00', 1, 7);
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
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

-- Dumping data for table cloud.user: ~16 rows (approximately)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`username`, `name`, `surname`, `email`, `password`, `manager`, `active`, `id`, `createdAt`, `updatedAt`) VALUES
	('54', '35', '53', '45', NULL, NULL, 1, 1, '2017-09-03 19:35:40', '2017-09-03 19:35:40'),
	('54c', '35c', '53c', '45c', NULL, NULL, 1, 2, '2017-09-03 19:38:10', '2017-09-03 19:38:10'),
	('wqedsa', '35cgdfgdfg', '53casdf', '45cdfgdf', NULL, NULL, 1, 3, '2017-09-03 20:36:11', '2017-09-03 20:36:11'),
	('Video', 'video 4', 'Video1', 'video2', NULL, NULL, 1, 4, '2017-09-03 20:38:06', '2017-09-03 20:38:06'),
	('username', 'name', 'surname', 'email', 'password', 1, 1, 5, NULL, NULL),
	('juan', 'juan david', 'peraza', 'julian@gmail.com', 'juan', NULL, NULL, 7, NULL, NULL),
	('Teodoro', 'Mmi video de prueba', 'Valenxia', 'anuco@goma.col', NULL, NULL, NULL, 8, NULL, NULL),
	('123', '123', '132', '123', NULL, NULL, NULL, 9, NULL, NULL),
	('trigger', 'trigger en la base', 'en l', 'abasn', NULL, NULL, NULL, 10, NULL, NULL),
	('tri3gger', 'trigge2r en la base', '3en l', 'aba3sn', NULL, NULL, NULL, 11, NULL, NULL),
	('tri33gger', 'trigvvvvge2r en la base', '3e4n l', 'abffffa3sn', NULL, NULL, NULL, 14, NULL, NULL),
	('sgd', 'trigvghjk', 'ghjljg', 'jhkhg', NULL, NULL, NULL, 15, NULL, NULL),
	('sgd525', 'trigvghjk5665', 'ghjljg6565', 'jhkhg56556', NULL, NULL, NULL, 16, NULL, NULL),
	('sgdsdf525', 'trigvghjfsdfsdfsk5665sd', 'ghjljsdfsdfg6565sdf', 'jhkhgsdfsdfsd56556f', NULL, NULL, NULL, 17, NULL, NULL),
	('kh', 'tbb', 'hjkkj', 'fdt', NULL, NULL, NULL, 18, NULL, NULL),
	('una', 'Entervias', 'mas', 'una mas', NULL, NULL, NULL, 19, NULL, NULL),
	('Camilo ', 'titulo', 'Malpica', 'camilo@gmail.com', NULL, NULL, NULL, 20, NULL, NULL),
	('Julian felipe', 'Entrevista a madre con su niñ{a', 'Borray Gutierrez', 'jlian92@hotmail.com', NULL, NULL, NULL, 21, NULL, NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;


-- Dumping structure for table cloud.video
CREATE TABLE IF NOT EXISTS `video` (
  `name` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `description` longtext,
  `notify` tinyint(1) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `url_master` varchar(255) DEFAULT NULL,
  `show_home` tinyint(1) DEFAULT NULL,
  `competition_id` int(11) DEFAULT NULL,
  `state_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `url` (`url`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

-- Dumping data for table cloud.video: ~6 rows (approximately)
/*!40000 ALTER TABLE `video` DISABLE KEYS */;
INSERT INTO `video` (`name`, `url`, `description`, `notify`, `active`, `id`, `createdAt`, `updatedAt`, `url_master`, `show_home`, `competition_id`, `state_id`, `user_id`) VALUES
	('35cgdfgdfg', 'C:\\nmp-server-2.1\\nginx-1.2.5\\html\\cloud\\front\\src\\assets\\videos\\a6ae39b6-d81e-4b97-9b58-ce6dc059700c.jpg', '1234567891011', 0, 1, 13, '2017-09-03 20:36:16', '2017-09-03 20:36:16', NULL, 0, 1, NULL, 3),
	('video 4', 'C:\\nmp-server-2.1\\nginx-1.2.5\\html\\cloud\\front\\src\\assets\\videos\\af8c0dbd-0572-4ad9-aa05-d329a7ad445b.mp4', 'Mensa de videjo', 0, 1, 14, '2017-09-03 20:38:09', '2017-09-03 20:38:09', NULL, 0, 1, NULL, 4),
	('req.body.name', 'urlunica', 'req.body.description', NULL, NULL, 15, NULL, NULL, NULL, NULL, 1, 1, 1),
	('123', 'http://192.168.1.5/public/videos/1504760450805Entrevista.mp4', '123', NULL, NULL, 16, NULL, NULL, NULL, NULL, 1, NULL, 0),
	('tbb', 'http://192.168.1.5/public/videos/1504761872350Entrevista.mp4', '123465', NULL, NULL, 17, NULL, NULL, NULL, NULL, 1, NULL, 0),
	('Entervias', 'http://192.168.1.5/public/videos/1504761973423Entrevista.mp4', 'sasdasd', NULL, NULL, 18, NULL, NULL, NULL, NULL, 1, NULL, 19),
	('titulo', 'http://192.168.1.5:3000/public/videos/1504823165402Entrevista.mp4', 'Mensaje del video', NULL, NULL, 19, NULL, NULL, NULL, NULL, 8, NULL, 20),
	('Entrevista a madre con su niñ{a', 'http://localhost:3000/public/videos/1504824074344Entrevista.mp4', 'Entrevistamos a una madre cabeza de hogar y a su niña par asaber como le parecia nuestra aplicacion ', NULL, NULL, 20, '2017-09-07 22:41:15', NULL, NULL, NULL, 8, NULL, 21);
/*!40000 ALTER TABLE `video` ENABLE KEYS */;
/*!40014 SET FOREIGN_KEY_CHECKS=1 */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
