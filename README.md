# Messaging App

Welcome to the Messaging App repository! This application allows users to communicate with each other in real-time via text messages. It's built using React.js (with TypeScript), Redux, Socket.IO, Axios, React Router, and Tailwind CSS for the frontend, while the backend is powered by Express.js (with TypeScript), Socket.IO, Mongoose, MongoDB Atlas, JSON Web Tokens (JWT), Bcrypt, and CORS.

## Features

-   **Real-time Messaging:** Users can send and receive messages instantly, thanks to Socket.IO for enabling real-time communication.
-   **Authentication:** Secure user authentication using JWT and bcrypt for hashing passwords.
-   **Responsive Design:** The application is designed to be responsive across various devices, ensuring a seamless user experience.
-   **Redux State Management:** State management is handled efficiently using Redux, providing a predictable state container for the application.
-   **RESTful API:** The backend is built with Express.js, providing a RESTful API for managing user authentication and message handling.
-   **Database Integration:** MongoDB Atlas is used as the database, with Mongoose providing an elegant MongoDB object modeling for Node.js.
-   **Hosted on Render:** Both the frontend and backend are hosted on Render, ensuring reliability and scalability.

## Technologies Used

-   **Frontend:**

    -   React.js (TypeScript)
    -   Redux
    -   Socket.IO Client
    -   Axios
    -   React Router
    -   Tailwind CSS
    -   SASS

-   **Backend:**
    -   Express.js (with TypeScript)
    -   Socket.IO
    -   MongoDB Atlas
    -   Mongoose
    -   JSON Web Tokens (JWT)
    -   Bcrypt
    -   CORS

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository:

    ```bash
    git clone https://github.com/yourusername/messaging-app.git

    ```

2. Install dependencies for both frontend and backend:

    ```bash
    cd messaging-app/client
    npm install

    cd ../api
    npm install

    ```

3. Configure environment variables:

    - **Frontend:**
      Create a `.env` file in the `client` directory and add the following content:
        ```plaintext
        VITE_API_BASE_URL="http://localhost:3000"
        ```
    - **Backend:**
      Create a `.env` file in the `api` directory and add the following content:
        ```plaintext
        MONGODB_CONNECTION = '<your MongoDB connection string>'
        ACCESS_TOKEN_SECRET="<your access token secret>"
        REFRESH_TOKEN_SECRET="<your refresh token secret>"
        ```
        **Note:** Replace `<your MongoDB connection string>` with your actual MongoDB connection string. If you're using MongoDB Atlas, you can obtain this connection string from your MongoDB Atlas dashboard. Similarly, replace `<your access token secret>` and `<your refresh token secret>` with your preferred secret strings for JWT token generation. Make sure to keep these secrets secure and unique.

4. Start the development servers:

    Open two separate terminals to run both the frontend and backend servers simultaneously.

    ```bash
    # Terminal 1: Start frontend server
     cd client
     npm start
    # Terminal 2: Start backend server
     cd api
     npm start

    ```

5. Access the application at [https://messagingappclient.onrender.com/](https://messagingappclient.onrender.com/).

## Contributing

Contributions are welcome! If you'd like to contribute to this project, feel free to fork the repository and submit pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

This project was built with the help of various open-source libraries and tools. Special thanks to the contributors of those projects.
