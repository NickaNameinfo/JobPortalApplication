-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 03, 2024 at 06:24 AM
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
(5, 'nickname', 'nickname', 'nickname', 'nickname', 'nickname', 'nickname', 'nickname', '$2a$10$1fgHwi8VKYUrDB10GYbSD.3NcHR9wesXhxFmkP4How8LaJGzWvgNu', '2024-01-01 09:20:18', '2024-01-01 09:20:18'),
(7, 'asdf', 'asdf', 'asdfa', 'sdf', 'asdf', 'asdfa', 'sdfasdf', '$2a$10$OL/6ukqfuoJZ4LK.4p//UOiVNoOyMgSwiQ/ImOhOUPhE5H3sDEOIC', '2023-12-30 12:22:19', '2023-12-30 12:22:19'),
(9, 'ibss', 'ibss', 'ibss', 'ibss', 'ibss', 'ibss', 'ibss', '$2a$10$h5A9ot8KEGF7076lgr6MZe0dAnwYCeZ7hmrCZQh4mFXRfgmOZtE.i', '2024-01-01 09:20:58', '2024-01-01 09:20:58'),
(11, 'Admin', 'Admin', 'Admin', 'Admin', 'Admin', 'Admin', 'Admin', '$2a$10$mQ/Jg.T0VKkvY/O0bkeNOOoOmJvPds.OG7PwmzHqxe2lFjR1H9rn.', '2024-01-01 10:05:35', '2024-01-01 10:05:35');

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
  `experince` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `job_title`, `job_category`, `salary_from`, `salary_to`, `job_location`, `job_description`, `job_skills`, `job_qualification`, `course_status`, `create_at`, `updated_at`, `company_name`, `hire_number`, `job_type`, `job_eligibilty`, `salary_amount`, `salary_type`, `experince`) VALUES
('429893d9-e69f-4d5d-a5e3-b01a079e636f', 'asdf', NULL, NULL, NULL, NULL, 'asdf', NULL, NULL, NULL, '2024-01-02 20:00:36', '2024-01-02 20:00:36', 'ibss', 'asdf', 'asdf', 'asdf', 'sadf', 'Per Year', NULL),
('43eaa31f-4ee2-47d3-bcf2-32fa8f401857', 'fasd', NULL, NULL, NULL, NULL, 'asdf', NULL, NULL, NULL, '2024-01-02 20:33:28', '2024-01-02 20:33:28', 'ibss', 'fasd', 'fasd', 'asdf', 'asdf', 'Per Year', NULL),
('5fdcf07b-f528-48a0-a937-59310aa48b93', 'sadf243', NULL, NULL, NULL, NULL, 'asdf', NULL, NULL, NULL, '2024-01-02 20:01:06', '2024-01-02 20:01:06', 'ibss', 'asdfasdf', 'asdf', 'asdf', 'asdf', 'Per Year', NULL);

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
('23d24cc7-ca95-4db3-a781-807a241e6d83', 'Test', 'test', NULL, 'test', 'test', 'test', '$2a$10$gxl8C50OdsL4D0O.wt5N0.y6gmu4A5QDH2cgEMsRp7BHB6emmY20i', '2024-01-01 10:19:30', '2024-01-01 10:19:30');

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
  `company_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `user_name`, `name`, `phone_number`, `email`, `job_title`, `job_category`, `job_location`, `experience`, `resume`, `job_status`, `create_at`, `updated_at`, `company_name`) VALUES
('2559fcb8-b9a9-4009-9b93-947c33cc141e', 'test', 'test', 'test', 'test', 'php', 'php', 'ets', 'tes', 'src\\uploads\\resume_1704104766455.jpg', 'Approved', '2024-01-01 10:26:06', '2024-01-01 10:26:06', 'Admin'),
('728eb7b0-650e-4ffc-9415-3035cd8ef404', 'test', 'asd', 'asdf', 'asdf', 'asdf', 'dfa', 'asdf', 'asdf', 'src\\uploads\\resume_1704113222171.jpg', 'Approved', '2024-01-01 12:47:02', '2024-01-01 12:47:52', 'ibss'),
('917b4897-44c0-42dc-b5ed-194eb2707fc7', 'test', 'test', 'test', 'test', 'ui', 'ui', 'test', 'test', 'src\\uploads\\resume_1704104389026.jpg', 'Rejected', '2024-01-01 10:19:49', '2024-01-01 10:19:49', 'null'),
('a09a3af4-e6cd-466d-ac79-8ff5171ed9d2', 'test', 'asdf', 'asdfasdfas', 'dfasd', 'fdasdf', 'asdfa', 'fasd', 'asdfa', 'src\\uploads\\resume_1704108071988.jpg', 'Rejected', '2024-01-01 11:21:11', '2024-01-01 12:28:24', 'ibss');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

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
