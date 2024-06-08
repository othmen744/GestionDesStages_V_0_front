pipeline {
    agent any
    environment {
        SONARQUBE_CREDENTIALS = credentials('jenkins-sonar')
        CONTEXT = 'kubernetes-admin@kubernetes'
        KUBECONFIG = "$HOME/.kube/config"
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
                withSonarQubeEnv('sonarqube') {
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
         stage('Deploy to Kubernetes') {
            steps {
                withKubeConfig([credentialsId: 'SECRET_TOKEN', serverUrl: 'https://10.0.0.10:6443']) {
                    // Download kubectl if not already installed
                    sh 'curl -LO "https://storage.googleapis.com/kubernetes-release/release/v1.20.5/bin/linux/amd64/kubectl"'
                    sh 'chmod u+x ./kubectl'
                    
                    // Use the default context specified in your kubeconfig
                    sh './kubectl config current-context'
                    
                    // Deploy your application using kubectl apply
                    sh './kubectl apply -f deployment-frontend.yaml'
                    
                    // Check the status of pods after deployment
                    sh './kubectl get pods --namespace=default'
                }
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
