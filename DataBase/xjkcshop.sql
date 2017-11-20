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
-- 数据库: `xjkcshop`
--

-- --------------------------------------------------------

--
-- 表的结构 `cart`
--

CREATE TABLE IF NOT EXISTS `cart` (
  `goodsId` int(255) NOT NULL AUTO_INCREMENT,
  `goodsName` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `vipName` int(255) DEFAULT NULL,
  `shopName` varchar(255) DEFAULT NULL,
  `pic` varchar(255) NOT NULL,
  `qal` int(255) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=14 ;

--
-- 转存表中的数据 `cart`
--

INSERT INTO `cart` (`goodsId`, `goodsName`, `price`, `vipName`, `shopName`, `pic`, `qal`) VALUES
(1, '腾讯视频会员月卡', '400', 1141, '', 'static/images/txvideo.jpg', 1),
(2, '腾讯视频会员月卡', '400', 11412, '', 'static/images/txvideo.jpg', 1),
(3, '爱奇艺视频会员月卡', '400', 11242341, '', 'static/images/txvideo.jpg', 1),
(8, '腾讯视频会员月卡', '18', 111414, '143', 'static/images/txvideo.jpg', 1),
(9, '腾讯视频会员月卡', '18', 115435345, '143124', 'static/images/txvideo.jpg', 1),
(10, '爱奇艺黄金会员直充', '19', 114535, '214124314', './static/images/varc1_1.png', 1),
(11, '爱奇艺黄金会员直充', '19', 114534535, '12143', './static/images/varc1_1.png', 1),
(12, '优酷会员月卡', '18', 543535, NULL, 'static/images/ykvideo.jpg', 1),
(13, '爱奇艺黄金会员直充', '19', 32424, NULL, './static/images/varc1_1.png', 1);

-- --------------------------------------------------------

--
-- 表的结构 `goodsinfo`
--

CREATE TABLE IF NOT EXISTS `goodsinfo` (
  `goodsId` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `title` varchar(225) NOT NULL COMMENT '商品名称',
  `price` int(225) NOT NULL COMMENT '商品价格',
  `pic` varchar(225) NOT NULL COMMENT '商品图片',
  `qal` int(225) DEFAULT NULL COMMENT '商品数量',
  `shopName` varchar(255) NOT NULL,
  `vipNum` int(255) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='商品信息表' AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `goodsinfo`
--

INSERT INTO `goodsinfo` (`goodsId`, `title`, `price`, `pic`, `qal`, `shopName`, `vipNum`) VALUES
(1, '腾讯视频会员月卡', 300, 'static/images/txvideo.jpg', 1, '腾讯视频会员', 123456),
(2, '爱奇艺会员1个月', 200, 'static/images/iqyvideo.jpg', 1, '爱奇艺视频会员', 654321);

-- --------------------------------------------------------

--
-- 表的结构 `markets`
--

CREATE TABLE IF NOT EXISTS `markets` (
  `goodsId` int(64) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `eggNum` int(255) NOT NULL,
  `pic` varchar(255) NOT NULL,
  `shopName` varchar(255) NOT NULL,
  `RL` varchar(255) DEFAULT NULL,
  `price` int(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;

--
-- 转存表中的数据 `markets`
--

INSERT INTO `markets` (`goodsId`, `title`, `eggNum`, `pic`, `shopName`, `RL`, `price`, `name`) VALUES
(1, '5元话费优惠券', 5, 'static/images/hfyhj.jpg', '虚拟礼品', NULL, 5, '5元话费优惠券'),
(2, '爱奇艺会员1季度', 48, 'static/images/iqyvideo.jpg', '虚拟礼品', NULL, 48, '爱奇艺会员1季度'),
(3, 'LOL 2000点券', 20, 'static/images/lolIcon.jpg', '虚拟礼品', NULL, 20, 'LOL 2000点券'),
(4, '腾讯视频会员月卡', 18, 'static/images/txvideo.jpg', '大家都在兑', NULL, 18, '腾讯视频会员月卡'),
(5, '爱奇艺会员1个月', 18, 'static/images/iqyvideo.jpg', '大家都在兑', NULL, 18, '爱奇艺会员1个月'),
(6, '优酷会员月卡', 18, 'static/images/ykvideo.jpg', '大家都在兑', NULL, 18, '优酷会员月卡'),
(7, '外星人 R4电脑', 29999, 'static/images/wxrIcon.jpg', '实物礼品', 'left', 29999, '外星人 R4电脑'),
(8, 'iPhone7P 128G', 10000, 'static/images/iphone.jpg', '实物礼品', 'right', 10000, 'iPhone7P 128G'),
(9, '外星人电脑包 17.3寸', 1499, 'static/images/beibao.jpg', '实物礼品', 'right', 1499, '外星人电脑包 17.3寸');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `userId` int(255) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `userPass` varchar(255) NOT NULL,
  `eggTotleNum` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`userId`, `userName`, `userPass`, `eggTotleNum`) VALUES
(1, 'markJan', '123456', 123);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
