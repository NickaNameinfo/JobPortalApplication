-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 12, 2024 at 07:32 AM
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
  `company_logo` varchar(159) DEFAULT NULL,
  `create_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `company_name`, `company_email`, `company_number`, `company_website`, `company_address`, `total_employee`, `user_Name`, `password`, `company_logo`, `create_at`, `updated_at`) VALUES
(11, 'Admin', 'Admin', 'Admin', 'Admin', 'Admin', 'Admin', 'Admin', '$2a$10$mQ/Jg.T0VKkvY/O0bkeNOOoOmJvPds.OG7PwmzHqxe2lFjR1H9rn.', NULL, '2024-01-01 10:05:35', '2024-01-01 10:05:35'),
(350, 'test', 'arulkumar8270@gmail.com', '8270564998', 'test', 'test', '34', 'test', '$2a$10$dUqO86aT3pL3Jy4v6IimduNy9C819s7O2OTqlWAiaYFDuLOn71JbK', 'src\\uploads\\companyLogo_1705002079160.png', '2024-01-08 19:51:43', '2024-01-11 19:41:19');

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
  `updated_at` datetime DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `hire_number` varchar(250) DEFAULT NULL,
  `job_type` varchar(250) DEFAULT NULL,
  `job_eligibilty` varchar(250) DEFAULT NULL,
  `salary_amount` varchar(250) DEFAULT NULL,
  `salary_type` varchar(250) DEFAULT NULL,
  `experince` varchar(250) DEFAULT NULL,
  `companyId` varchar(250) DEFAULT NULL,
  `company_logo` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `job_title`, `job_category`, `salary_from`, `salary_to`, `job_location`, `job_description`, `job_skills`, `job_qualification`, `course_status`, `create_at`, `updated_at`, `company_name`, `hire_number`, `job_type`, `job_eligibilty`, `salary_amount`, `salary_type`, `experince`, `companyId`, `company_logo`) VALUES
('07dd1d00-78d5-4262-9741-c69aba085455', 'Test', NULL, '3l', '3l', 'Chennai', 'Test', NULL, NULL, NULL, '2024-01-08 19:20:37', '2024-01-08 19:20:37', 'ibss', NULL, 'Part Time', NULL, NULL, NULL, '3 - 3', '9', NULL),
('1baab3eb-e399-478d-a22f-22cfedeca463', 'test2314', 'RealEstateBusiness', '2l', '3', 'sadfa', 'test', NULL, NULL, NULL, '2024-01-11 19:45:50', '2024-01-11 19:45:50', 'test', NULL, 'Intern', NULL, NULL, NULL, '23', '350', NULL),
('25d11304-70e8-4000-ba79-13c0faeea34e', '34rfsdf', 'RealEstateBusiness', '35', '34', '4', 'test', NULL, NULL, NULL, '2024-01-11 19:47:00', '2024-01-11 19:47:00', 'test', NULL, 'Part Time', NULL, NULL, NULL, '34', '350', 'src\\uploads\\companyLogo_1705002079160.png'),
('88c1f0c1-9f62-442b-bb79-63b5884de109', 'test1', NULL, '2l', '3l', 'Chennai', 'test', NULL, NULL, NULL, '2024-01-08 19:24:18', '2024-01-08 19:24:18', 'ibss', NULL, 'Full Time', NULL, NULL, NULL, '3', '9', NULL),
('a05f3264-0f14-4a07-ac60-f3097011a3f1', 'asdfa', NULL, 'sdfasdf', 'asdfa', 'asdf', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has su', NULL, NULL, NULL, '2024-01-09 12:11:17', '2024-01-09 12:11:17', 'test', NULL, 'Part Time', NULL, NULL, NULL, 'asdfa', '350', NULL),
('dd04fa89-de57-4ded-acea-d69f88ea077e', 'Test121', NULL, '34l', '4l', 'adsf', 'asdfasd', NULL, NULL, NULL, '2024-01-08 20:22:06', '2024-01-08 20:22:06', 'test', NULL, 'Part Time', NULL, NULL, NULL, '45', '350', NULL);

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
  `qualification` varchar(150) DEFAULT NULL,
  `gender` varchar(150) DEFAULT NULL,
  `experience` varchar(150) DEFAULT NULL,
  `resume` varchar(150) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `first_name`, `last_name`, `user_type`, `email`, `phone_number`, `user_name`, `passowrd`, `qualification`, `gender`, `experience`, `resume`, `created_at`, `updated_at`) VALUES
('86f70ae3-7c10-4641-babb-29376a577854', 'test', 'ets', NULL, 'arulkumar8270@gmail.com', '35623452345', '35623452345', '$2a$10$r7txxbz66tx5bnKPYnI2XOda13OBt7/hP.ffzWsO/T6q65TkJfQWi', 'null', 'null', 'null', NULL, '2024-01-11 19:02:58', '2024-01-11 19:34:15');

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
  `job_status` varchar(250) NOT NULL,
  `create_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `companyId` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
('20231230115828-createNewTable-compay.js'),
('20240101095623-add-cmpanyname-columns.js'),
('20240101095754-add-cmpanyname-columns.js');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=351;

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
