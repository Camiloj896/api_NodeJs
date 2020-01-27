CREATE DATABASE testapi;

USE testapi;

CREATE TABLE IF NOT EXISTS `task`(
    `id` int(10) NOT NULL AUTO_INCREMENT,
    `name` varchar(50) NOT NULL,
    `description` varchar(50) NOT NULL,
    `priority` int(50) NOT NULL,
    PRIMARY KEY(`id`)
)