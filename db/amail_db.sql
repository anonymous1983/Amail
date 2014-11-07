-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Ven 07 Novembre 2014 à 10:55
-- Version du serveur: 5.5.25
-- Version de PHP: 5.4.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données: `amail_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `am_users`
--

CREATE TABLE `am_users` (
  `ID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_login` varchar(60) NOT NULL DEFAULT '',
  `user_pass` varchar(64) NOT NULL DEFAULT '',
  `user_nicename` varchar(50) NOT NULL DEFAULT '',
  `user_email` varchar(100) NOT NULL DEFAULT '',
  `user_date_birthday` int(11) NOT NULL,
  `user_url` varchar(100) NOT NULL DEFAULT '',
  `user_registered` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `user_activation_key` varchar(60) NOT NULL DEFAULT '',
  `user_status` int(11) NOT NULL DEFAULT '0',
  `user_display_name` varchar(250) NOT NULL DEFAULT '',
  PRIMARY KEY (`ID`),
  KEY `user_login_key` (`user_login`),
  KEY `user_nicename` (`user_nicename`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `am_users`
--

INSERT INTO `am_users` (`ID`, `user_login`, `user_pass`, `user_nicename`, `user_email`, `user_date_birthday`, `user_url`, `user_registered`, `user_activation_key`, `user_status`, `user_display_name`) VALUES
(1, 'anis.abid.pro', 'c6dec32e2de3db54f81251768b8f0827', 'anis.abid.pro', 'anis.abid.pro@gmail.com', 0, '', '2014-11-07 10:00:00', '', 0, 'Anis ABID PRO'),
(2, 'anab.tn', '7070ee55be709205edf72b3346326365', 'anab.tn', 'anab.tn@gmail.com', 0, '', '2014-07-26 13:26:53', '', 0, 'Anis ABID');
