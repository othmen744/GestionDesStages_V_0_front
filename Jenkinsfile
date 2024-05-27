pipeline {
    agent any
    environment {
        SONARQUBE_CREDENTIALS = credentials('jenkins-sonar')
    }
     tools {
        nodejs "NodeJS" // The name you gave to the NodeJS installation
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/othmen744/GestionDesStages_V_0_front.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build Application') {
            steps {
                sh 'npm run build --configuration'
            }
        }
       stage('Run SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh "npm run sonar"
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t oth007/proj-front:karoui .'
                }
            }
        }
        stage('Login to DockerHub') {
            steps {
                sh 'docker login -u oth007 -p othmen199800'
            }
        }
        stage('Push Docker Image') {
            steps {
                sh 'docker push oth007/proj-front:karoui'
            }
        }
    }
    post {
        success {
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Build or deployment failed!'
        }
    }
}
