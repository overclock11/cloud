-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.5.28 - MySQL Community Server (GPL)
-- Server OS:                    Win32
-- HeidiSQL version:             7.0.0.4053
-- Date/time:                    2017-08-20 00:55:20
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;

-- Dumping database structure for cloud
CREATE DATABASE IF NOT EXISTS `cloud` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `cloud`;


-- Dumping structure for table cloud.concursos
CREATE TABLE IF NOT EXISTS `concursos` (
  `concurso_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `usuario` int(11) DEFAULT NULL,
  `concurso_nombre` varchar(255) DEFAULT NULL,
  `concurso_banner` varchar(255) DEFAULT NULL,
  `concurso_url` varchar(255) DEFAULT NULL,
  `concurso_finicio` date DEFAULT NULL,
  `concurso_ffin` date DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`concurso_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table cloud.concursos: ~1 rows (approximately)
/*!40000 ALTER TABLE `concursos` DISABLE KEYS */;
INSERT INTO `concursos` (`concurso_id`, `usuario`, `concurso_nombre`, `concurso_banner`, `concurso_url`, `concurso_finicio`, `concurso_ffin`, `createdAt`, `updatedAt`) VALUES
	(1, 1, 'Videos de gatos', 'https://misanimales.com/wp-content/uploads/2015/09/mimica-y-gestos-en-los-gatos.jpg', 'https://myurl.com.co', '2017-08-18', '2017-08-29', '2017-08-20 00:33:56', '2017-08-20 00:33:56');
/*!40000 ALTER TABLE `concursos` ENABLE KEYS */;


-- Dumping structure for table cloud.concursos_concurso_id__login_concursos
CREATE TABLE IF NOT EXISTS `concursos_concurso_id__login_concursos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `login_concursos` int(11) DEFAULT NULL,
  `concursos_concurso_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table cloud.concursos_concurso_id__login_concursos: ~0 rows (approximately)
/*!40000 ALTER TABLE `concursos_concurso_id__login_concursos` DISABLE KEYS */;
/*!40000 ALTER TABLE `concursos_concurso_id__login_concursos` ENABLE KEYS */;


-- Dumping structure for table cloud.concursos_videos__videos_video_id
CREATE TABLE IF NOT EXISTS `concursos_videos__videos_video_id` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `concursos_videos` int(11) DEFAULT NULL,
  `videos_video_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table cloud.concursos_videos__videos_video_id: ~0 rows (approximately)
/*!40000 ALTER TABLE `concursos_videos__videos_video_id` DISABLE KEYS */;
/*!40000 ALTER TABLE `concursos_videos__videos_video_id` ENABLE KEYS */;


-- Dumping structure for table cloud.estados
CREATE TABLE IF NOT EXISTS `estados` (
  `estado_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `estado_nombre` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`estado_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table cloud.estados: ~1 rows (approximately)
/*!40000 ALTER TABLE `estados` DISABLE KEYS */;
INSERT INTO `estados` (`estado_id`, `estado_nombre`, `createdAt`, `updatedAt`) VALUES
	(1, 'En proceso', '2017-08-20 00:43:40', NULL);
/*!40000 ALTER TABLE `estados` ENABLE KEYS */;


-- Dumping structure for table cloud.login
CREATE TABLE IF NOT EXISTS `login` (
  `usuario_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tipo` int(11) DEFAULT NULL,
  `usuario_nombre` varchar(255) DEFAULT NULL,
  `usuario_email` varchar(255) DEFAULT NULL,
  `usuario_pass` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`usuario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table cloud.login: ~1 rows (approximately)
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` (`usuario_id`, `tipo`, `usuario_nombre`, `usuario_email`, `usuario_pass`, `createdAt`, `updatedAt`) VALUES
	(1, 1, 'julian', 'julian92@hotmail.com', '123465789', '2017-08-20 00:33:12', NULL);
/*!40000 ALTER TABLE `login` ENABLE KEYS */;


-- Dumping structure for table cloud.login_videos__videos_video_id
CREATE TABLE IF NOT EXISTS `login_videos__videos_video_id` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `login_videos` int(11) DEFAULT NULL,
  `videos_video_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table cloud.login_videos__videos_video_id: ~0 rows (approximately)
/*!40000 ALTER TABLE `login_videos__videos_video_id` DISABLE KEYS */;
/*!40000 ALTER TABLE `login_videos__videos_video_id` ENABLE KEYS */;


-- Dumping structure for table cloud.tipos
CREATE TABLE IF NOT EXISTS `tipos` (
  `tipo_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tipo_nombre` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`tipo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table cloud.tipos: ~1 rows (approximately)
/*!40000 ALTER TABLE `tipos` DISABLE KEYS */;
INSERT INTO `tipos` (`tipo_id`, `tipo_nombre`, `createdAt`, `updatedAt`) VALUES
	(1, 'Administrador', '2017-08-20 00:33:27', NULL);
/*!40000 ALTER TABLE `tipos` ENABLE KEYS */;


-- Dumping structure for table cloud.usuario_video
CREATE TABLE IF NOT EXISTS `usuario_video` (
  `usuario_video_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `usuario` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`usuario_video_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table cloud.usuario_video: ~0 rows (approximately)
/*!40000 ALTER TABLE `usuario_video` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario_video` ENABLE KEYS */;


-- Dumping structure for table cloud.usuario_video_videos__videos_video_id
CREATE TABLE IF NOT EXISTS `usuario_video_videos__videos_video_id` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `usuario_video_videos` int(11) DEFAULT NULL,
  `videos_video_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table cloud.usuario_video_videos__videos_video_id: ~0 rows (approximately)
/*!40000 ALTER TABLE `usuario_video_videos__videos_video_id` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario_video_videos__videos_video_id` ENABLE KEYS */;


-- Dumping structure for table cloud.videos
CREATE TABLE IF NOT EXISTS `videos` (
  `video_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `estado` int(11) DEFAULT NULL,
  `concurso` int(11) DEFAULT NULL,
  `usuario` int(11) DEFAULT NULL,
  `video_nombre` varchar(255) DEFAULT NULL,
  `video_url` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`video_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table cloud.videos: ~1 rows (approximately)
/*!40000 ALTER TABLE `videos` DISABLE KEYS */;
INSERT INTO `videos` (`video_id`, `estado`, `concurso`, `usuario`, `video_nombre`, `video_url`, `createdAt`, `updatedAt`) VALUES
	(1, 1, 1, 1, 'Gatos jugando', 'http://youtube.com', '2017-08-20 00:36:49', '2017-08-20 00:36:49');
/*!40000 ALTER TABLE `videos` ENABLE KEYS */;
/*!40014 SET FOREIGN_KEY_CHECKS=1 */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
