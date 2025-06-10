# 📚 MERN Stack Learning Playground

✨ Welcome to `mern-stack-learning`! ✨

This repository appears to be a personal learning space for exploring different aspects of the MERN stack (MongoDB, Express.js, React, Node.js) and various React concepts. It contains multiple sub-projects, including a basic MERN setup, React Hooks examples, and a real-time MERN chat application using WebSockets.

---

## 🛠️ Built With

* **JavaScript** 💻: The core language across the entire stack.
* **React.js** ⚛️: For building dynamic and interactive user interfaces.
* **Node.js** & **Express.js**: For the backend server and API development.
* **MongoDB**: A NoSQL database for storing application data.
* **WebSockets**: For real-time communication in the chat application.
* **HTML** & **CSS**: For structuring and styling the web interfaces.
* **Vite**: A fast build tool for modern web projects.
* **JSON**: For data exchange and configuration files.

---

## 🚀 Getting Started

Given the diverse nature of this repository, each sub-project might have its own setup instructions. Here's a general guide to get started with the different parts:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/AliiAssi/mern-stack-learning.git
    ```
2.  **Navigate into a specific sub-project** (e.g., `MERN/Client`, `MERN/Server`, `react/Hooks`, `web socket mern chat application/Client`, `web socket mern chat application/Server`, `web socket mern chat application/Socket`).
3.  **Install dependencies** for both client and server parts:
    ```bash
    npm install
    # or if you use yarn
    yarn install
    ```
4.  **Set up environment variables** (check `.env` files if present in server directories).
5.  **Start the development servers** for both client and server, usually with commands like `npm run dev` or `npm start`.

---

## 💡 Project Structure & Key Features

This repository is organized into several distinct learning modules:

* **`MERN/`**: Contains a basic MERN stack application.
    * **Client**: A React frontend.
    * **Server**: A Node.js/Express.js backend with MongoDB integration (`Models/Users.js` defines a user schema, `server.js` handles API endpoints).
* **`react/Hooks/`**: Dedicated to exploring various React Hooks.
    * Examples for `useState`, `useEffect`, `useCallback`, `useMemo`, and `useRef` are likely present in the `src/Hooks/` directory.
* **`react/react1/`**: Appears to be an older or introductory React project.
    * Includes components for a `Team`, `ToDo` list, `Header`, and `Home`.
* **`web socket mern chat application/`**: A fully-fledged real-time chat application.
    * **Client**: A React frontend with chat-specific components (`components/chat`, `pages/ChatBox.jsx`, `context/ChatContext.jsx`, `context/AuthContext.jsx`).
    * **Server**: A Node.js/Express.js backend handling chat logic (`Controllers/MessageController.js`, `Controllers/chatController.js`, `Controllers/userController.js`) and models (`Models/chatModel.js`, `Models/messageModel.js`, `Models/userModel.js`).
    * **Socket**: A dedicated WebSocket server (`Socket/index.js`) for real-time communication.

### Highlighted Functions

* **User Authentication & Authorization**: Functions like `registerUser`, `loginUser`, `createToken` (in `web socket mern chat application/Server/Controllers/userController.js`).
* **Chat Functionality**: `createChat`, `findUserChats`, `findChat` (in `web socket mern chat application/Server/Controllers/chatController.js`) and `createMessage`, `getMessages` (in `web socket mern chat application/Server/Controllers/MessageController.js`).
* **React Component Logic**: Various `render` methods and state management functions within the `react/react1` components (e.g., `Team.js`, `ToDo.js`).
* **API Utilities**: `postRequest`, `getRequest` (in `web socket mern chat application/Client/src/utils/services.js`) for interacting with backend APIs.

---

## 🤝 Contributing

This repository is primarily for learning, but if you have suggestions or improvements, feel free to contribute!

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes, adhering to the existing code style.
4.  Write clear and concise commit messages.
5.  Submit a pull request.

---

Happy coding and learning! 🧑‍💻
