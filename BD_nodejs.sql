-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-02-2014 a las 20:25:22
-- Versión del servidor: 5.5.32
-- Versión de PHP: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `nodejs`
--
CREATE DATABASE IF NOT EXISTS `nodejs` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `nodejs`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL,
  `user_name` text NOT NULL,
  `user_lat` float NOT NULL,
  `user_lon` float NOT NULL,
  `user_state` int(11) NOT NULL,
  `user_incident` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_lat`, `user_lon`, `user_state`, `user_incident`) VALUES
(1, 'Luis Enrique', -25.2934, -57.6433, 1, 'Incencio'),
(2, 'Gustavo Rios', -25.4288, -57.4389, 1, 'Accidente'),
(3, 'Silvia Paez', -25.2871, -57.6092, 1, 'Accidente'),
(4, 'Luisa Amarilla', -25.3166, -57.6028, 1, 'Derrumbe'),
(5, 'Enrique Jimenez', -25.3015, -57.6201, 1, 'Incendio'),
(6, 'Gustavo Romero', -25.2986, -57.6315, 1, 'Derrumbe'),
(7, 'Luisa Alarcon', -25.2916, -57.6001, 1, 'Accidente'),
(9, 'Alicia Ramirez', -25.4288, -57.539, 1, 'Accidente');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
