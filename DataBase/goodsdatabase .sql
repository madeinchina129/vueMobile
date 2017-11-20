-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 10 月 18 日 12:47
-- 服务器版本: 5.5.53
-- PHP 版本: 5.4.45

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `goodsdatabase`
--

-- --------------------------------------------------------

--
-- 表的结构 `goods`
--

CREATE TABLE IF NOT EXISTS `goods` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `goodName` varchar(255) DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `goods`
--

INSERT INTO `goods` (`Id`, `goodName`, `pic`) VALUES
(1, '充游戏', './static/images/wt1.png'),
(2, '充手机', './static/images/arc1_2.png'),
(3, '充Q币', './static/images/arc1_3.png'),
(4, '腾讯服务', './static/images/arc1_4.png'),
(5, '充视频', './static/images/arc1_5.png'),
(6, '加油卡', './static/images/arc1_6.png'),
(7, '卡变现', './static/images/arc1_7.png'),
(8, '敬请期待', './static/images/arc1_8.png');

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) DEFAULT NULL,
  `passWord` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`Id`, `userName`, `passWord`) VALUES
(1, 'wew', '123'),
(2, 'trt', '123'),
(3, 'gggg', '123'),
(4, 'hgh', '123'),
(5, 'undefined', 'undefined'),
(6, 'yyy', '123'),
(7, 'undefined', 'undefined'),
(8, 'erfefetr', '999999'),
(9, 'tt6', '666'),
(10, 'www', '4297f44b13955235245b2497399d7a93'),
(11, '火热的狂风', '88658af34d42cca9bc398a3dd9e9c9a6');

-- --------------------------------------------------------

--
-- 表的结构 `videos`
--

CREATE TABLE IF NOT EXISTS `videos` (
  `pic` varchar(255) DEFAULT NULL,
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `videos`
--

INSERT INTO `videos` (`pic`, `Id`, `name`, `price`) VALUES
('./static/images/varc1_1.png', 1, '爱奇艺黄金会员直充', '19'),
('./static/images/varc2_1.png', 2, '优酷黄金会员卡密', '20'),
('./static/images/varc3_1.png', 3, '腾讯视频会员直冲', '15'),
('./static/images/varc4_1.png', 4, '芒果TV全屏会员', '19');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
