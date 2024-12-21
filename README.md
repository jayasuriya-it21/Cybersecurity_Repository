# React Project Setup and Run Instructions

## Overview
This project consists of multiple directories (`Backend`, `server`, `frontend`, `cyberverse`) that need to be started individually to run the application. Each directory has its own dependencies and configuration.

---

## Prerequisites
Make sure the following are installed on your system:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Visual Studio Code](https://code.visualstudio.com/) (Recommended IDE)

---

## Project Setup

### Clone the Repository
```bash
# Clone the repository
git clone https://github.com/jayasuriya-it21/Cybersecurity_Repository.git

# Navigate into the project directory
cd Cybersecurity_Repository
```

### Install Dependencies
You need to install dependencies for each of the directories (`Backend`, `server`, `frontend`, `cyberverse`). Run the following commands:

```bash
# Navigate into the Backend directory and install dependencies
cd Backend
npm install

# Navigate into the server directory and install dependencies
cd ../server
npm install

# Navigate into the frontend directory and install dependencies
cd ../frontend
npm install

# Navigate into the cyberverse directory and install dependencies
cd ../cyberverse
npm install
```

---

## Running the Project

The project must be started in a specific order. Open separate terminal windows or tabs in Visual Studio Code for each directory and follow the steps below:

### 1. Start the Backend
```bash
cd Backend
npm start
```

### 2. Start the Server
```bash
cd server
npm start
```

### 3. Start the Frontend
```bash
cd frontend
npm start
```

### 4. Start Cyberverse
```bash
cd cyberverse
npm start
```

---

## Notes
- Ensure that all necessary environment variables are correctly configured in each directory.
- If any process fails to start, check the error logs and ensure all dependencies are installed correctly.
- You may need to adjust port settings in the configurations if there are conflicts.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Contribution
Contributions are welcome! Feel free to fork the repository and submit pull requests.

---

## Contact
For issues or inquiries, please contact the project maintainer at <your-email>.
