<!DOCTYPE html>
<html lang="en">
<body>
<h1>💬 React OpenAI Chat</h1>

<p>A full-stack chat application powered by OpenAI, built with <strong>React</strong> (frontend) and <strong>Node.js/Express</strong> (backend), with <strong>MongoDB</strong> for persistence. It allows users to have AI-powered conversations through an intuitive and responsive interface.</p>

<h2>🚀 Features</h2>
<ul>
  <li>🔹 Real-time AI Chat with OpenAI API</li>
  <li>🔹 Authentication &amp; JWT-based token security</li>
  <li>🔹 Responsive UI built with Material UI (MUI)</li>
  <li>🔹 Form Validation using Formik + Yup</li>
  <li>🔹 Toast Notifications for feedback</li>
  <li>🔹 MongoDB integration for user data and chat history</li>
  <li>🔹 Environment-based configuration via .env</li>
</ul>

<h2>🛠 Tech Stack</h2>
<h3>Frontend (Client)</h3>
<ul>
  <li>React 19 + Vite</li>
  <li>React Router DOM</li>
  <li>Material UI (MUI) + Emotion</li>
  <li>Axios for API requests</li>
  <li>Formik &amp; Yup for form handling</li>
  <li>React Toastify</li>
  <li>Typewriter Effect</li>
</ul>

<h3>Backend (Server)</h3>
<ul>
  <li>Node.js + Express</li>
  <li>MongoDB + Mongoose</li>
  <li>JWT Authentication</li>
  <li>Express Validator</li>
  <li>Dotenv</li>
  <li>Cookie Parser</li>
  <li>CORS</li>
  <li>Node Fetch</li>
</ul>

<h2>📂 Project Structure</h2>
<pre><code>react-openai-chat/
│
├── client/               # Frontend
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── server/               # Backend
│   ├── index.js
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middlewares/
│   ├── package.json
│   └── .env
│
└── README.md
</code></pre>

<h2>⚙️ Installation &amp; Setup</h2>
<h3>1️⃣ Clone the Repository</h3>
<pre><code>git clone https://github.com/KarthikeyaPatrudu/react-openai-chat.git
cd react-openai-chat
</code></pre>

<h3>2️⃣ Setup Backend</h3>
<pre><code>cd server
npm install
</code></pre>
<p>Create a <code>.env</code> file inside <code>server/</code>:</p>
<pre><code>PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
OPENAI_API_KEY=your_openai_api_key
</code></pre>
<p>Run the backend:</p>
<pre><code>npm start
</code></pre>

<h3>3️⃣ Setup Frontend</h3>
<pre><code>cd ../client
npm install
</code></pre>
<p>Create a <code>.env</code> file inside <code>client/</code>:</p>
<pre><code>VITE_API_BASE_URL=http://localhost:5000
</code></pre>
<p>Run the frontend:</p>
<pre><code>npm run dev
</code></pre>

<h2>▶️ Usage</h2>
<ol>
  <li>Register/Login to start chatting.</li>
  <li>Type your query and send it to get an AI-powered response.</li>
  <li>Enjoy real-time interaction with OpenAI’s language model.</li>
</ol>

<h2>📸 Screenshots</h2>
<img src="Screenshots/Screenshot 2025-08-14 165319.png" alt="Home Page" width="800">
<img src="Screenshots/Screenshot 2025-08-14 170911.png" alt="Home Page" width="800">
<img src="Screenshots/Screenshot 2025-08-14 170920.png" alt="Home Page" width="800">


<h2>👤 Author</h2>
<p><strong>Lake Karthikeya Patrudu</strong><br>
📌 <a href="https://github.com/KarthikeyaPatrudu">GitHub</a><br>
🌐 <a href="https://linkedin.com/in/your-profile">LinkedIn</a></p>

</body>
</html>
