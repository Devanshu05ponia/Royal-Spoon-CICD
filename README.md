#  Royal Spoon - CI/CD Pipeline using Jenkins and Docker

##  Project Overview

Royal Spoon is a restaurant website deployed using a Continuous Integration and Continuous Deployment (CI/CD) pipeline built with Jenkins and Docker. The pipeline automates the complete deployment process by building a Docker image, deploying a container, and verifying that the application is running successfully.

---

##  Technologies Used

- HTML5
- CSS3
- JavaScript
- Docker
- Jenkins
- Git
- GitHub
- Nginx

---

##  Project Structure

```
Royal-Spoon-CICD/
│── admin/
│── css/
│── images/
│── js/
│── pages/
│── Dockerfile
│── Jenkinsfile
│── index.html
│── README.md
```

---

##  CI/CD Pipeline Workflow

The Jenkins pipeline performs the following tasks automatically:

1. Clone the latest source code from GitHub.
2. Display the Jenkins workspace.
3. Check the installed Docker version.
4. Build the Docker image.
5. Display available Docker images.
6. Stop and remove the existing Docker container.
7. Deploy a new Docker container.
8. Verify that the container is running successfully.
9. Display a deployment success message.

---

##  Docker Commands Used

### Build Docker Image

```bash
docker build -t royal-spoon .
```

### Run Docker Container

```bash
docker run -d --restart unless-stopped --name royal-spoon-container -p 8085:80 royal-spoon
```

### View Running Containers

```bash
docker ps
```

### View Docker Images

```bash
docker images
```

---

##  How to Run the Project

### Step 1: Clone the Repository

```bash
git clone https://github.com/Devanshu05ponia/Royal-Spoon-CICD.git
```

### Step 2: Navigate to the Project Folder

```bash
cd Royal-Spoon-CICD
```

### Step 3: Build the Docker Image

```bash
docker build -t royal-spoon .
```

### Step 4: Run the Docker Container

```bash
docker run -d --restart unless-stopped --name royal-spoon-container -p 8085:80 royal-spoon
```

### Step 5: Open the Website

Open your browser and visit:

```
http://localhost:8085
```

---

##  Features

- Automated CI/CD Pipeline using Jenkins
- Docker-based deployment
- Automatic Docker image creation
- Automatic container deployment
- Deployment verification
- Docker restart policy (`unless-stopped`)
- Timestamped Jenkins build logs
- Workspace information display
- Docker image listing during deployment

---

## Project Output

- Source code cloned successfully from GitHub.
- Docker image built successfully.
- Docker container deployed successfully.
- Deployment verified using `docker ps`.
- Jenkins pipeline completed successfully.
- Website accessible at:

```
http://localhost:8085
```

---

##  Learning Outcomes

Through this project, the following concepts were implemented:

- Continuous Integration (CI)
- Continuous Deployment (CD)
- Jenkins Pipeline
- Docker Image Creation
- Docker Container Management
- Git & GitHub Integration
- Automated Application Deployment

---

##  Developed By

**Devanshu Ponia**

**Department of Computer Science and Engineering**

**Lovely Professional University**

### Project

**Royal Spoon – CI/CD Pipeline using Jenkins & Docker**

---

##  License

This project is created for educational and learning purposes.