```markdown
# 🌐 3-Tier Kubernetes Application

A simple 3-tier application deployed on Kubernetes:
- **Frontend**: HTML + JavaScript page
- **Backend**: Node.js + Express server
- **Database**: MySQL

This project demonstrates containerization, service discovery, and multi-tier architecture on Kubernetes (tested with Minikube).

---

## 📂 Project Structure

```
backend/   → Node.js app + Dockerfile
frontend/  → Static HTML frontend + optional Dockerfile
k8s/       → Kubernetes manifests (Deployments + Services)
```

---

## 🚀 Features
- Frontend calls backend API
- Backend connects to MySQL database
- Kubernetes Services provide internal communication
- Demonstrates multi-tier architecture on Minikube

---

## 📖 About This Project

This project started as a hands-on exercise to understand how a **3-tier architecture** works when deployed on Kubernetes. I wanted to go beyond tutorials and actually build something end-to-end:

- **Frontend**: A simple HTML + JavaScript page to interact with users.
- **Backend**: A Node.js + Express server that exposes APIs and connects to the database.
- **Database**: MySQL running inside Kubernetes, storing user data.

### 🎯 Goals
- Learn how to containerize applications with Docker.
- Practice writing Kubernetes manifests for Deployments and Services.
- Understand how different tiers communicate inside a cluster.
- Gain confidence in debugging pods, logs, and CrashLoopBackOff errors.

### 💡 What I Learned
- How to structure a project into clean folders (`backend/`, `frontend/`, `k8s/`).
- How to build and push Docker images to Docker Hub.
- How to use Kubernetes Services for internal communication between tiers.
- How to troubleshoot common errors (invalid `package.json`, duplicate imports, DB connection issues).
- The importance of retry logic and graceful error handling in distributed systems.

This repo is both a **learning journey** and a **portfolio project** — something I can share to demonstrate practical skills in cloud-native development.
---

## 🛠️ Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/<your-username>/3-tier-k8s-app.git
cd 3-tier-k8s-app
```

### 2. Build and push Docker images
```bash
cd backend
docker build -t <dockerhub-username>/backend:latest .
docker push <dockerhub-username>/backend:latest

cd ../frontend
docker build -t <dockerhub-username>/frontend:latest .
docker push <dockerhub-username>/frontend:latest
```

### 3. Deploy to Kubernetes
```bash
kubectl apply -f k8s/
```

### 4. Verify pods
```bash
kubectl get pods -n 3-tier-app
```

### 5. Access frontend
```bash
kubectl port-forward svc/frontend-service 8080:80
```
Open `http://localhost:8080` [(localhost in Bing)](https://www.bing.com/search?q="http%3A%2F%2Flocalhost%3A8080%2F") in your browser.

---

## 📸 Demo
- `GET /` → returns **Hello from Backend!**
- `GET /users` → returns rows from MySQL `demo.users` table

---

## 🤝 Contributing
Fork the repo, make improvements, and submit a PR!

---

## 📣 Share
If you like this project, connect with me on LinkedIn [(linkedin.com in Bing)](https://www.bing.com/search?q="https%3A%2F%2Fwww.linkedin.com%2Fin%2F%253Cyour-profile%253E") and check out my other work.
```

---
