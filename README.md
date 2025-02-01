
---

## 🚗 Vehicle Server (TypeScript)

### 📋 Requirements

Before running the server, ensure you have the following installed:

- **Node.js**
- **Docker**
---

### 🛠️Running the Server

#### 1️⃣ Start the PostgreSQL Database Server
To start the PostgreSQL database using Docker, run the following command:

```bash
npm run start-db
```

#### 2️⃣ Configure the Server
Set the `PORT` and `HOST` environment variables to configure the server. For example:

```bash
export PORT=8080 && export HOST=localhost
```

#### 3️⃣ Start the Server
Once the database is running and the environment variables are set, start the server with:

```bash
npm run start
```

#### 4️⃣ Use the CLI for HTTP Requests
In a separate terminal, you can use the CLI client to send HTTP requests conveniently. Follow the instructions provided in the [CLI Vehicle Client repository](https://github.com/hamza-rachidi/cli-vehicle-client) to pull the Docker image and run the CLI commands.

#### 5️⃣ Stop the Database Server
After completing the vehicle management process, stop the PostgreSQL database server with:

```bash
npm run stop-db
```

---

### 📝 Notes
- Ensure Docker is running before starting the database.
- The CLI client simplifies sending HTTP requests to the server for testing and management purposes.

---
