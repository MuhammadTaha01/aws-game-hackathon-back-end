# aws-game-hackathon-back-end

# AWS Game Hackathon - Backend  

## Project Overview  
Our backend powers the game by leveraging SQL databases with a well-structured relational schema. This ensures efficient data management and seamless interaction between game elements and user data.  

## Key Highlights  
- **SQL Database** – Robust and scalable, designed to handle game data effectively.  
- **Relational Schema** – Structured to ensure smooth data retrieval and integrity.  
- **AWS EC2 Integration** – Researched and explored by **Muhammad Taha** and **Amman Nega** to deploy backend services securely and reliably.  

## Contributions  
- **Backend Development** – CRUD functionalities implemented by **Amman**.  
- **AWS Research** – Research done by **Taha** and **Amman**. Focused on EC2 and RDS services for optimal deployment strategies.  

Our backend is the backbone of the game, ensuring fast, scalable, and secure operations – a result of collaborative effort and dedication.  

## Prerequisites
- Node.js (version v20.14.0 or higher)
- MySQL (MySQL Workbench 8.0 or higher)
- npm (usually comes with Node.js {10.7.0})

## Installation
Follow these steps to set up and run the project:

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd aws-game-hackathon-back-end

2. Install dependencies:
   `npm install`

3. Set up the database:
    - Navigate to the db folder
    - Run the schema.sql file in your MySQL environment:
        - `mysql -u your_username -p < db/schema.sql`

4. Configure environment variables:
    - Create a .env file in the root directory
    - Add the following variables:
        - DB_HOST=localhost
        - DB_USER=your_database_username
        - DB_PASSWORD=your_database_password
        - DB_NAME=your_database_name
        - PORT=3001

5. Start the server:
    `node index.js`

6. The application should now be running at http://localhost:3001