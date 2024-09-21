LoomHub Skills
Where Learning Meets Skill Development

Welcome to LoomHub Skills, a versatile learning management system designed to facilitate online education and enhance skill development. This project aims to provide an organized platform for students and teachers to manage courses effectively.



Table of Contents
Project Overview
Inspiration
Technologies Used
Features
Installation
Usage
Challenges Faced
Future Improvements

Project Overview
LoomHub Skills is a full-stack web application built with Next.js and Strapi, offering robust features for course management, student tracking, and user authentication. The platform is designed to be user-friendly and accessible, catering to educational institutions and individual learners globally.

Inspiration
The inspiration for LoomHub Skills stems from the need for an efficient online learning environment that supports course creation, student management, and progress tracking. My passion for learning drives me to ensure that anyone taking courses has a good user experience. I previously completed an internship where I maintained styling on an LMS platform, motivating me to create a similar project to explore how everything works together.

Technologies Used
Frontend:

Next.js 13 - Framework for server-rendered React applications.
React - JavaScript library for building user interfaces.
Tailwind CSS - Utility-first CSS framework.
Backend:

Strapi - Headless CMS and API management.
MySQL - Relational database management system.
Authentication:

Clerk - Authentication platform for user management.
Features
User authentication and management with Clerk.
Course creation and management for both students and teachers (currently, teachers create courses directly on the Strapi server).
Fully functional CRUD operations integrated with Strapi API.
Responsive UI designed with Tailwind CSS for optimal user experience.
Currently, there is no content creation feature for teachers or individual courses for each student, which I plan to implement in the future.
Installation
To get started with LoomHub Skills locally, follow these steps:

Clone the repository:
bash
Copy code
git clone https://github.com/NaomiKleinhans/LoomHubSkills.git
cd LoomHubSkills
Install dependencies:
bash
Copy code
npm install
Set up your database and configure environment variables as needed.
Start the development server:
bash
Copy code
npm run dev
Navigate to http://localhost:3000 to view the application in your browser.
Usage
Sign Up: Create a new account using the Clerk authentication system.
Create Course: Teachers can create and manage their courses on the Strapi server.
Track Progress: Students can track their progress and access course materials seamlessly.
Challenges Faced
During development, several challenges were encountered, including:

Transitioning from Prisma to Strapi for backend management, which required significant refactoring.
Balancing a full-time job while working on the project, which posed time management challenges.
Future Improvements
Looking ahead, I plan to implement the following features:

Integration with payment solutions like Stripe for course transactions.
Video hosting capabilities to support course content delivery using Mux.
Enhanced analytics for tracking student performance and course effectiveness.
Content creation for teachers and individual courses for each student.
