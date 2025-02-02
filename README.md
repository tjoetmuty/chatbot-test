### Chatbot with Gemini API
(the UI is still on progress (has not been finished))

This chatbot uses Gemini API. Built with React JS for the UI.

## Tech Stack

- Frontend: React JS
- AI API: Gemini API

## How to Run

1. **Create Environment Variables:**

   - Create a file named `.env` in the root of the project.
   - Copy the contents from `.env.example` into `.env.`
   ```bash
   VITE_API_KEY=your_api_key
   VITE_MODEL_AI=your_model_ai
   VITE_MAX_TOKENS=your_max_tokens
   VITE_TEMPERATURE=your_temperature
   ```

2. **Install Dependencies:**

   Run the following command to install the project dependencies:

   ```bash
   npm install
   ```

3. **Running App:**
   After setting up the environment variables and installing dependencies, run the following command to start the development server:
   ```bash
   npm run dev
   ```

## API Docs
To use the Gemini API, you need to obtain an API key from Google AI. Full documentation is available at [Google AI API Docs](https://ai.google.dev/gemini-api/docs)