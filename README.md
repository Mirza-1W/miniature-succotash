# 🌐 3-Tier Kubernetes Application

A simple 3-tier application deployed on Kubernetes:
- **Frontend**: HTML + JavaScript page
- **Backend**: Node.js + Express server
- **Database**: MySQL

This project demonstrates containerization, service discovery, and multi-tier architecture on Kubernetes (tested with Minikube).

---

## 📂 Project Structure

backend/   → Node.js app + Dockerfile
frontend/  → Static HTML frontend + optional Dockerfile
k8s/       → Kubernetes manifests (Deployments + Services)

Code

---

## 🚀 Features
- Frontend calls backend API
- Backend connects to MySQL database
- Kubernetes Services provide internal communication
- Demonstrates multi-tier architecture on Minikube

---

## 🛠️ Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/<your-username>/3-tier-k8s-app.git
cd 3-tier-k8s-app
# 2. Build and push Docker images
bash
cd backend
docker build -t <dockerhub-username>/backend:latest .
docker push <dockerhub-username>/backend:latest

cd ../frontend
docker build -t <dockerhub-username>/frontend:latest .
docker push <dockerhub-username>/frontend:latest
# 3. Deploy to Kubernetes
bash
kubectl apply -f k8s/
# 4. Verify pods
bash
kubectl get pods -n 3-tier-app
# 5. Access frontend
bash
kubectl port-forward svc/frontend-service 8080:80
Open http://localhost:8080 (localhost in Bing) in your browser.

📸 Demo
GET / → returns Hello from Backend!

GET /users → returns rows from MySQL demo.users table

🤝 Contributing
Fork the repo, make improvements, and submit a PR!
