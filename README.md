# **TaskHive 🐝 – A Simple Todo App**
TaskHive is a full-stack Todo application with a **React frontend** and a **Node.js + Express backend**. It allows users to create, view, and mark todos as done. Todos are stored in **MongoDB**, and users can also upload images for each task.

## 🚀 **Features**
- ✅ Create a new Todo  
- ✅ View existing Todos  
- ✅ Mark a Todo as done  
- ✅ Upload images for Todos (Stored in MongoDB)  
- ✅ Responsive and modern UI  

---

## 📂 **Project Structure**
```
newyearapp/
│── frontend/      # React Frontend
│── backend/       # Node.js + Express Backend
│── README.md      # Project Documentation
```

---

## 🛠️ **Tech Stack**
### **Frontend (React)**
- React.js
- Tailwind CSS
- React Router
- Axios

### **Backend (Node.js + Express)**
- Node.js
- Express.js
- MongoDB (with Mongoose)
- Multer (for image uploads)

### **Database**
- MongoDB (Atlas or Local)

---

## 🔧 **Installation and Setup**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/Maitrey27/taskhive.git
cd taskhive
```

### **2️⃣ Backend Setup**
```sh
cd backend
npm install
```
- Create a **.env** file in `backend/` and add:
  ```
  MONGO_URI=your_mongodb_connection_string
  PORT=5000
  ```
- Start the backend server:
  ```sh
  npm start
  ```

### **3️⃣ Frontend Setup**
```sh
cd ../frontend
npm install
npm start
```

---

## 📸 **Screenshots**
### 🎨 **Modern UI**![image](https://github.com/user-attachments/assets/709c1c20-a82b-44f0-bdf5-5548fdce50ff)


### 🛋 **MongoDB Data Example**
![MongoDB Preview](![image](https://github.com/user-attachments/assets/ac396b63-b7fb-49db-9f23-7da5bc9d09db)
)
