## Developer Profile API & Dashboard

A full-stack web application that allows browsing, creating, and managing developer profiles.

## Overview
This project demonstrates a complete CRUD system with a RESTful API (Node.js + Express + MongoDB) and a responsive React + Tailwind CSS frontend.

## Tech Stack
## Frontend
React (Vite)

Tailwind CSS for responsive design

Axios for HTTP requests

React Router DOM for navigation

## Backend
Node.js with Express.js

MongoDB with Mongoose



## Setup Instructions

git clone https://github.com/BridgetKas/developer_profile_dashboard.git
cd developer_profile_api

## Backend setup
cd backend
npm install
npm start

## Frontend setup
cd ../frontend
npm install
npm run dev

## API documentation
Url - http://localhost:3001/api

Method	Endpoint	Description
POST	/profiles	Create new developer profile
GET	/profiles	List all profiles 
GET	/profiles/:id	Get specific profile by ID
PUT	/profiles/:id	Update a profile
GET	/profiles/search?skills=React	Search by skills or location

## Example Request (POST /api/profiles)
{
    "name":"Morgan", 
    "email":"morgan@yahoo.com", 
    "location":"Kyanja", 
    "skills":["React","Node"],
    "experienceYears":3, 
    "availableForWork":true, 
    "hourlyRate":100
}

## Example Response
    {
        "_id": "68f7fbc139f3380e98d1cf36",
        "name": "Morgan",
        "email": "morgan@yahoo.com",
        "location": "Kyanja",
        "skills": [
            "React",
            "Node"
        ],
        "experienceYears": 3,
        "availableForWork": true,
        "hourlyRate": 100,
        "__v": 0
    }

## Testing Backend


## Design Decisions

MongoDB chosen for flexibility in handling array fields like skills

React + Tailwind provides fast development and responsive UI

Joi ensures clean input validation

Axios simplifies API integration

## Time Spent
Task	Duration
Planning & setup	0.5 hrs
Backend (API + DB)	2 hrs
Frontend (React UI + integration)	2.5 hrs
Testing & README	1 hr
Total	~6 hours


## Trade-offs

Skipped authentication (JWT) due to time constraints

Focused on stable core CRUD + search functionality
