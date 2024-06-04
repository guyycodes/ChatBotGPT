# React + Vite ChatBot (Progressive Web App)

This project is a chatbot application built with React and Vite that allows users to interact with the OpenAI API. It is designed as a Progressive Web App (PWA), which means it can be installed on devices and used offline. Users can paste their OpenAI API key into the application and start conversing with the chatbot powered by OpenAI's language model. find the site live here: https://gptchatapp.com/

## Features

- Minimal setup to get React working in Vite with HMR and ESLint rules
- Integration with the OpenAI API for generating chatbot responses
- User-friendly interface for pasting API key and interacting with the chatbot
- Real-time conversation with the chatbot powered by OpenAI's language model
- Progressive Web App (PWA) functionality for offline access and installation

## Getting Started

To get started with the React + Vite ChatBot, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-vite-chatbot.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ChatBotGPT
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` to see the chatbot application.

## Usage

1. Obtain an API key from OpenAI by signing up for an account at [https://openai.com](https://openai.com).

2. In the chatbot application, paste your OpenAI API key into the provided input field.

3. Start interacting with the chatbot by typing your messages in the chat interface.

4. The chatbot will generate responses based on the OpenAI language model and display them in the conversation.

## Installing as a Progressive Web App

The React + Vite ChatBot can be installed as a Progressive Web App on your device, allowing you to access it offline and add it to your home screen. To install the chatbot as a PWA, follow these steps:

1. Open the chatbot application in a supported browser (e.g., Chrome, Firefox, Safari).

2. Look for the "Add to Home Screen" or "Install" button in the browser's menu or address bar.

3. Click on the "Add to Home Screen" or "Install" button to install the chatbot as a PWA on your device.

4. Once installed, you can access the chatbot from your device's home screen or app launcher, even when offline.

Note: The exact steps for installing a PWA may vary depending on your browser and device.

## Configuration

The chatbot application can be configured by modifying the following files:

- `src/config.js`: Contains configuration options for the OpenAI API, such as the API endpoint and parameters.

- `src/components/ChatContainer.jsx`: The main component that handles the chatbot functionality and user interface.

## Contributing

Contributions to the React + Vite ChatBot project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/your-username/react-vite-chatbot).

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [OpenAI API](https://openai.com)
- [Progressive Web Apps](https://web.dev/progressive-web-apps/)
