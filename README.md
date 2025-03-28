## Team name : The Crosswords
### Team members: Reuel Luis (9359587415)(Email:reuel14luis@gmail.com), Johan Almeida (9529654736)(email:almeidajohan005@gmail.com), Soham Ambudkar (7840974855)(email:sambudkar78@gmail.com)

# Contribution
Johan: Backend - authentication, feature implementation
Reuel Luis: Frontend - dashboard, visual representation of analytics
Soham:Frontend - login, registration, equipment data

## Folder structure
- frontend: "components" used for analytics, "data" preloaded data for demonstration, "scenes" containing the ui elements used, "router" to route pages
- backend: config folder: Stores configuration files such as database connection settings.
controllers/itemController.js: Contains logic for managing items (fetching and adding items).
controllers/transactionController.js: Manages item borrowing transactions, including updating status and tracking due dates,
middleware/auth.js: A middleware function to protect routes by verifying JWT tokens,
models/item.js: Defines the schema for the "Item" model, representing equipment/items in the system,
models/transaction.js: Defines the schema for the "Transaction" model, representing borrow transactions for items,
models/user.js: Defines the schema for the "User" model, handling user authentication and password hashing,
routes/itemRoutes.js: Contains routes for CRUD operations on items, such as listing and borrowing items,
routes/authRoutes.js: Contains routes related to user authentication, such as login and registration,
server.js: Sets up the Express server, connects to the database, and defines protected and public routes.

# Industrial Equipment Maintenance System

## Problem Statement
In industrial settings, unplanned equipment failures can lead to significant operational disruptions, increased maintenance costs, and safety hazards. Many companies struggle with preventive maintenance due to a lack of data-driven insights into machine performance. Traditional maintenance systems are either reactive (fixing issues after failure) or overly rigid in their scheduling, leading to inefficiencies.

Our **Industrial Equipment Maintenance System** aims to optimize predictive maintenance using real-time data and analytics, helping companies efficiently manage their machines and reduce unexpected downtimes.

## Solution Overview
We have developed a **MERN stack-based** solution with the following features:

### 1. **Authentication System**
- login system using JWT.
- Role-based access control (Admin & Viewer).

### 2. **Dashboard**
- General analytics of industrial machines.
- Overview of **Online (working** vs **Offline (non-working)** machines.
- Ongoing maintenance tickets.
- visual data representation of machine uptime & maintenance frequency.
- Geographical downtime visualization.

### 3. **Machine Management**
- List of all machines registered by a company.
- Detailed information on each machine when selected.

### 4. **Work Order Management**
- List of all maintenance tickets.
- Ticket creation, tracking, and resolution.


### 5. **Predictive Maintenance Module**
- Uses machine data to predict maintenance needs.
- If a machine exhibits warning signs (e.g., motor overload), an appointment ticket is generated automatically.
- Tracks machine depreciation based on:
  - Usage frequency.
  - Number of maintenance services.
  - uses data from the predictive maintenance module

### 6. **Inventory Management**
- CRUD operations (Create, Read, Update, Delete) for machines.
- System for borrowing industrial equipment if applicable.
- Tracks and manages machine data.
- Logs historical maintenance records.
- Helps in asset lifecycle monitoring.

### 7. Technologies Used
- **Frontend:** React.js
- **Backend:** Node.js & Express.js
- **Database:** MongoDB
- **Authentication:** JWT-based authentication

### Future Prospects
- Creation of digital twin models of the machines

### Build and run commands
- npm
- react router
- nodejs
- material ui
- mongoose
- cors
- express
- bodyparser
- axios
- 


