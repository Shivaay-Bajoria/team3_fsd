# TEAM 3 - Student Team Members Management Application

## 📖 Project Description
This is a Full Stack MERN (MongoDB, Express.js, React.js, Node.js) application designed to manage and display student team profiles. The application allows users to add new team members with detailed academic and personal information (including a profile image upload), view a responsive grid of all team members, and inspect dynamic individual profile pages.

## ⚙️ Installation Steps
1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/YOUR-USERNAME/TEAM-3.git
   cd TEAM-3
   \`\`\`

2. **Install Backend Dependencies:**
   \`\`\`bash
   cd backend
   npm install
   \`\`\`

3. **Install Frontend Dependencies:**
   \`\`\`bash
   cd ../frontend
   npm install
   \`\`\`

4. **Database Setup:**
   Ensure MongoDB Community Server is installed and running locally on port `27017`.

## 🚀 How to Run the App
You will need two terminal windows to run the frontend and backend simultaneously.

**Terminal 1 (Backend):**
\`\`\`bash
cd backend
node server.js
\`\`\`
*(The server will start on http://localhost:5001 and connect to MongoDB)*

**Terminal 2 (Frontend):**
\`\`\`bash
cd frontend
npm start
\`\`\`
*(The React application will open automatically in your browser at http://localhost:3000)*

## 📡 API Endpoints
As per the assignment requirements, the following API endpoints facilitate data exchange and have been tested in the browser:

* **Add Member:** `POST /members` (Accepts `multipart/form-data` for image uploads)
* **Get All Members:** `GET /members` (Retrieves an array of all student profiles)
* **Get Single Member:** `GET /members/:id` (Fetches details of a specific member using their unique MongoDB ID)
