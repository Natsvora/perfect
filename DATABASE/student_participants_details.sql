-- MySQL dump 10.13  Distrib 5.7.21, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: student
-- ------------------------------------------------------
-- Server version	5.7.21-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `participants_details`
--

DROP TABLE IF EXISTS `participants_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `participants_details` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `STUDENT_INFO_ID` int(11) NOT NULL,
  `COMPETITION_ID` int(11) NOT NULL,
  `RANK` varchar(10) DEFAULT NULL,
  `MARKS` varchar(5) DEFAULT NULL,
  `MEDAL` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_participants_details_1_idx` (`STUDENT_INFO_ID`),
  KEY `fk_participants_details_2_idx` (`COMPETITION_ID`),
  CONSTRAINT `fk_participants_details_1` FOREIGN KEY (`STUDENT_INFO_ID`) REFERENCES `student_info` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_participants_details_2` FOREIGN KEY (`COMPETITION_ID`) REFERENCES `competition` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `participants_details`
--

LOCK TABLES `participants_details` WRITE;
/*!40000 ALTER TABLE `participants_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `participants_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-04-11 17:36:59
