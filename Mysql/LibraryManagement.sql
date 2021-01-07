/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 80022
 Source Host           : localhost:3306
 Source Schema         : LibraryManagement

 Target Server Type    : MySQL
 Target Server Version : 80022
 File Encoding         : 65001

 Date: 07/01/2021 17:48:16
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for book
-- ----------------------------
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book` (
  `id` varchar(10) NOT NULL DEFAULT 'AA0000001' COMMENT '图书编号',
  `bookname` varchar(100) DEFAULT NULL COMMENT '图书名称',
  `booktype` varchar(50) DEFAULT '科技' COMMENT '图书类型',
  `author` varchar(50) DEFAULT NULL COMMENT '图书作者',
  `translator` varchar(50) DEFAULT NULL COMMENT '译者',
  `publisher` varchar(100) DEFAULT NULL COMMENT '出版社',
  `publish_time` datetime DEFAULT NULL COMMENT '出版时间',
  `price` float DEFAULT '28' COMMENT '定价',
  `stock` int DEFAULT '1' COMMENT '库存数量',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of book
-- ----------------------------
BEGIN;
INSERT INTO `book` VALUES ('123213', 'AAAA', '文学', 'VVV', 'CCC', 'WWW', '2020-04-01 00:00:00', 123, 22);
INSERT INTO `book` VALUES ('1233', '1222', '文学', 'adss', '112', '', '2020-01-02 00:00:00', 45, 23);
INSERT INTO `book` VALUES ('AA0000001', '《数据结构》', '计算机', '王王', NULL, '广东科技学院', '2021-01-04 15:16:23', 28, 1);
INSERT INTO `book` VALUES ('AA000002', '操作系统', '计算机', '王心艺', '王心艺', '广科', '2021-01-05 00:00:00', 30, 4);
INSERT INTO `book` VALUES ('AA001100', '计算机组成原理', '科学', 'A', 'B', 'C', '2021-01-06 00:00:00', 50, 4);
INSERT INTO `book` VALUES ('AA01000', '数据库', '科学', '数据库', '', '', '2020-01-05 00:00:00', 9.8, 8);
INSERT INTO `book` VALUES ('adwadw', '123213', '文学', 'asss', 'awdwad', '123213', '2020-01-01 00:00:00', 9.9, 123);
INSERT INTO `book` VALUES ('A数', 'BBBB', '科技', '作者CC', NULL, NULL, NULL, 28, 0);
INSERT INTO `book` VALUES ('B数', NULL, '科技', NULL, NULL, NULL, NULL, 28, 0);
INSERT INTO `book` VALUES ('C数', '名称A', '科学', '作者B', '译者D', 'E', '2020-01-06 00:00:00', 9.9, 19);
COMMIT;

-- ----------------------------
-- Table structure for borrow
-- ----------------------------
DROP TABLE IF EXISTS `borrow`;
CREATE TABLE `borrow` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '借阅流水号\n',
  `book_id` varchar(10) DEFAULT NULL COMMENT '图书编号',
  `reader_id` varchar(10) DEFAULT NULL COMMENT '读者编号',
  `borrow_date` datetime DEFAULT NULL COMMENT '借阅时间',
  `back_date` datetime DEFAULT NULL COMMENT '还书时间',
  `if_back` varchar(2) DEFAULT NULL COMMENT '是否归还',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of borrow
-- ----------------------------
BEGIN;
INSERT INTO `borrow` VALUES (4, '1233', 'AA000002', '2021-01-06 00:00:00', '2021-05-06 00:00:00', '1');
INSERT INTO `borrow` VALUES (7, 'AA01000', 'AA000002', '2021-01-06 00:00:00', '2021-05-06 00:00:00', '0');
INSERT INTO `borrow` VALUES (8, 'AA01000', 'AA000001', '2021-01-06 00:00:00', '2021-04-06 00:00:00', '0');
INSERT INTO `borrow` VALUES (9, 'AA000002', 'AA000001', '2021-01-06 00:00:00', '2021-04-06 00:00:00', '0');
INSERT INTO `borrow` VALUES (10, 'C数', 'AA000001', '2021-01-06 00:00:00', '2021-04-06 00:00:00', '0');
INSERT INTO `borrow` VALUES (11, 'A数', 'AA000001', '2021-01-06 00:00:00', '2021-04-06 00:00:00', '0');
INSERT INTO `borrow` VALUES (12, 'B数', 'AA000001', '2021-01-06 00:00:00', '2021-04-06 00:00:00', '0');
INSERT INTO `borrow` VALUES (13, 'AA001100', 'AA000002', '2021-01-06 00:00:00', '2021-05-06 00:00:00', '0');
INSERT INTO `borrow` VALUES (14, '1233', 'AA000001', '2021-01-07 00:00:00', '2021-04-07 00:00:00', '1');
INSERT INTO `borrow` VALUES (15, '1233', 'AA000001', '2021-01-07 00:00:00', '2021-04-07 00:00:00', '1');
INSERT INTO `borrow` VALUES (16, '1233', 'AA000002', '2021-01-07 00:00:00', '2021-05-07 00:00:00', '1');
INSERT INTO `borrow` VALUES (17, '1233', 'AA000001', '2021-01-07 00:00:00', '2021-04-07 00:00:00', '1');
INSERT INTO `borrow` VALUES (18, '1233', 'AA000001', '2021-01-07 00:00:00', '2021-04-07 00:00:00', '1');
INSERT INTO `borrow` VALUES (19, '1233', 'AA000001', '2021-01-07 00:00:00', '2021-04-07 00:00:00', '1');
INSERT INTO `borrow` VALUES (20, '1233', 'AA000002', '2021-01-07 00:00:00', '2021-05-07 00:00:00', '1');
INSERT INTO `borrow` VALUES (21, '1233', 'AA000002', '2021-01-07 00:00:00', '2021-05-07 00:00:00', '1');
INSERT INTO `borrow` VALUES (22, '1233', 'AA000001', '2021-01-07 00:00:00', '2021-04-07 00:00:00', '1');
INSERT INTO `borrow` VALUES (23, '1233', 'AA000001', '2021-01-07 00:00:00', '2021-04-07 00:00:00', '1');
INSERT INTO `borrow` VALUES (24, '1233', 'AA000001', '2021-01-07 00:00:00', '2021-04-07 00:00:00', '1');
COMMIT;

-- ----------------------------
-- Table structure for reader
-- ----------------------------
DROP TABLE IF EXISTS `reader`;
CREATE TABLE `reader` (
  `id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'AA000001' COMMENT '读者编号',
  `readername` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '读者姓名',
  `readertype` varchar(20) DEFAULT NULL COMMENT '读者类型',
  `sex` varchar(2) DEFAULT NULL COMMENT '读者性别',
  `max_num` int DEFAULT NULL COMMENT '最大可借数',
  `days_num` int DEFAULT NULL COMMENT '可借天数',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of reader
-- ----------------------------
BEGIN;
INSERT INTO `reader` VALUES ('AA000001', 'QZP', '学生', '1', 8, 90);
INSERT INTO `reader` VALUES ('AA000002', 'XXX', '教师', '0', 10, 120);
INSERT INTO `reader` VALUES ('AA000006', 'KKK', '学生', '0', 10, 90);
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '用户流水号',
  `username` varchar(50) DEFAULT NULL COMMENT '用户姓名',
  `password` varchar(50) DEFAULT NULL COMMENT '用户密码\n',
  `is_admin` varchar(2) DEFAULT NULL COMMENT '是否为管理员',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (1, 'admin', 'abcd', '1');
INSERT INTO `user` VALUES (2, 'tom', '123456', '0');
COMMIT;

-- ----------------------------
-- Procedure structure for Select_ALL_Book
-- ----------------------------
DROP PROCEDURE IF EXISTS `Select_ALL_Book`;
delimiter ;;
CREATE PROCEDURE `Select_ALL_Book`(param1 int)
BEGIN
  SELECT * FROM book;
END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
