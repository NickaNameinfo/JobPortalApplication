-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 30, 2023 at 01:39 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jobportal`
--

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `zipcode` varchar(255) DEFAULT NULL,
  `customer_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` int(11) NOT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `company_email` varchar(255) DEFAULT NULL,
  `company_number` varchar(255) DEFAULT NULL,
  `company_website` varchar(255) DEFAULT NULL,
  `company_address` varchar(255) DEFAULT NULL,
  `total_employee` varchar(255) DEFAULT NULL,
  `user_Name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `create_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `company_name`, `company_email`, `company_number`, `company_website`, `company_address`, `total_employee`, `user_Name`, `password`, `create_at`, `updated_at`) VALUES
(4, 'test', 'test', 'test', 'test', 'test', 'test', 'test', '$2a$10$A7cQPW4uDGSWMIPDzOpbXeQirTUdnAHxl0unEnPyjwFNj/SbwmDlu', '2023-12-30 12:23:06', '2023-12-30 12:23:06'),
(7, 'asdf', 'asdf', 'asdfa', 'sdf', 'asdf', 'asdfa', 'sdfasdf', '$2a$10$OL/6ukqfuoJZ4LK.4p//UOiVNoOyMgSwiQ/ImOhOUPhE5H3sDEOIC', '2023-12-30 12:22:19', '2023-12-30 12:22:19');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `job_title` varchar(255) DEFAULT NULL,
  `job_category` varchar(255) DEFAULT NULL,
  `salary_from` varchar(255) DEFAULT NULL,
  `salary_to` varchar(255) DEFAULT NULL,
  `job_location` varchar(255) DEFAULT NULL,
  `job_description` varchar(255) DEFAULT NULL,
  `job_skills` varchar(255) DEFAULT NULL,
  `job_qualification` varchar(255) DEFAULT NULL,
  `course_status` varchar(255) DEFAULT NULL,
  `create_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `job_title`, `job_category`, `salary_from`, `salary_to`, `job_location`, `job_description`, `job_skills`, `job_qualification`, `course_status`, `create_at`, `updated_at`) VALUES
('194cb793-d5db-42a3-b8d7-48e1c4fd1ba0', 'saf', 'asdfas', 'dfasdfa', 'sdfas', 'dfasdfas', 'dfasdfas', 'dfasdfasdf', 'asdfsadf', 'fasdfas', '2023-12-27 19:58:17', '2023-12-27 19:58:17'),
('28ab552a-329e-4d48-b3f0-fa0e48f1c9f7', 'asdf', 'dfas', 'dfasdfsadf', 'asdf', 'sadfasdfsa', 'asdfas', 'fdasdfa', NULL, NULL, '2023-12-27 18:59:08', '2023-12-27 18:59:08'),
('8ffee8e1-eb2e-4dca-9391-918c7f5c99ee', 'Test', 'test', '1000k', '25000k', 'chennai', 'test', 'test', 'test', 'ative', '2023-12-27 20:24:06', '2023-12-27 20:24:06'),
('9056ad8d-ca21-49a2-b4a0-c34594b23d71', 'asdf3214', 'dfas', 'dfasdfsadf', 'asdf', 'sadfasdfsa', 'asdfas', 'fdasdfa', 'sdfasdf', 'dfasdf', '2023-12-27 19:08:04', '2023-12-27 19:08:04');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `user_type` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `passowrd` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `first_name`, `last_name`, `user_type`, `email`, `phone_number`, `user_name`, `passowrd`, `created_at`, `updated_at`) VALUES
('3c1b0fe7-d60a-451d-a65d-c513bd75c2cd', 'sdfas232', 'sd', NULL, 'sdf2453423', 'dfasd', 'fasdf', '$2a$10$FdtRKZDhnteDkXeJxKA8T.ZDNWPvSk1nShMjE8UI8Kie4CuSbleDC', '2023-12-30 12:14:55', '2023-12-30 12:14:55'),
('40686ef6-2320-4fe2-8f16-548e3ad4069f', 'asdf', 'asdf', NULL, 'asdfas', 'dfasdf', 'asdfas', '$2a$10$TBaGbSTG56Akofsmir0L5OxYKb.pdkExviwYOVTu3u02ecdNKAIiu', '2023-12-30 12:14:11', '2023-12-30 12:14:11'),
('cbddecab-f24e-44eb-b202-b54c708daa6d', 'Arul', 'kumar', NULL, 'arul8270@gmail.com', '8270564998', 'arul@123', '$2a$10$ixmSq3AlG1.8lnB4bOyWH.OkXHFgsRYjYurpmLzP7Hi8MtVmRdgr2', '2023-12-28 18:44:27', '2023-12-28 18:44:27');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `job_title` varchar(255) DEFAULT NULL,
  `job_category` varchar(255) DEFAULT NULL,
  `job_location` varchar(255) DEFAULT NULL,
  `experience` varchar(255) DEFAULT NULL,
  `resume` varchar(255) DEFAULT NULL,
  `create_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `user_name`, `name`, `phone_number`, `email`, `job_title`, `job_category`, `job_location`, `experience`, `resume`, `create_at`, `updated_at`) VALUES
('a2a4951d-26f3-4229-9c10-e3866aad7b26', 'Arul kumar', 'asdf', 'sadfas', 'asdf', 'asdf', 'dfas', 'sadf', 'asd', 'src\\uploads\\resume_1703795809365.php', '2023-12-28 20:36:49', '2023-12-28 20:36:49');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20230630110046-create-course.js'),
('20230630110056-create-customer.js'),
('20230704060613-create-address.js'),
('20231228160800-create-compay-table.js'),
('20231228195129-create-job-table.js'),
('20231230111931-rename-passwrd-company.js'),
('20231230112150-addColumns.js'),
('20231230113144-createNewTable-compay.js'),
('20231230113416-createNewTable-compay.js'),
('20231230115828-createNewTable-compay.js');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `addresses`
--
ALTER TABLE `addresses`
  ADD CONSTRAINT `addresses_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
