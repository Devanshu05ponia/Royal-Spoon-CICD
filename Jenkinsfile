pipeline {
    agent any

    options {
        timestamps()
    }

    stages {

        stage('Clone Source') {
            steps {
                echo 'Cloned latest source code from GitHub.'
            }
        }

        stage('Show Docker Version') {
            steps {
                bat 'docker --version'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t royal-spoon .'
            }
        }

        stage('Show Docker Images') {
    steps {
        bat 'docker images'
    }
}

        stage('Stop Old Container') {
            steps {
                bat '''
                docker stop royal-spoon-container 2>NUL
                docker rm royal-spoon-container 2>NUL
                exit /b 0
                '''
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker run -d --restart unless-stopped --name royal-spoon-container -p 8085:80 royal-spoon'
            }
        }

        stage('Verify Deployment') {
    steps {
        bat 'docker ps'
    }
}



        stage('Deployment Complete') {
            steps {
                echo 'Royal Spoon deployed successfully!'
            }
        }
    }
}