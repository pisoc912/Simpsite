# Simpsite - URL Shortening Service

Simpsite is a robust URL shortening service, akin to Bitly, built on a modern tech stack leveraging Spring Boot for the backend and ReactJS for the frontend. It aims to provide a simple yet efficient way to shorten long URLs for easier sharing and management. With features like rate limiting, comprehensive user security with JWT and OAuth2 via Keycloak, and database migration management with Flyway, ShortenMe stands out as a secure and scalable solution for URL shortening needs.

## Features

- **URL Shortening**: Easily shorten URLs to make them more manageable and shareable.
- **Rate Limiting with Redis**: Prevent abuse and ensure fair usage by limiting the number of requests a user can make within a given timeframe.
- **Secure User Authentication**: Utilize Spring Security for secure JWT token handling and integrate OAuth2 with Keycloak for robust authentication options.
- **Database Migration with Flyway**: Safely manage and automate database schema migrations, ensuring seamless updates and deployments.
- **Modern Tech Stack**: Built with Spring Boot and ReactJS for a responsive and intuitive user experience.

## Getting Started

### Prerequisites

- JDK 11 or later
- Node.js and npm
- Redis server
- Keycloak server
- MySQL or PostgreSQL
