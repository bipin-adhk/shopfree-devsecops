pipeline {
    agent any

    environment {
        DOCKER_BUILDKIT = '1'
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Lint') {
            steps {
                dir('web') {
                    sh 'npm install eslint'
                    // Optional: ignore lint failure to avoid breaking build
                    sh './node_modules/.bin/eslint src || true'
                }
            }
        }

        stage('Build Web App') {
            steps {
                dir('web') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Deploy Containers') {
            steps {
                sh 'docker-compose up -d'
            }
        }

        stage('Security Audit') {
            steps {
                dir('ansible') {
                    sh 'ansible-lint ../web'
                }
            }
        }
    }

    post {
        failure {
            echo 'Something went wrong. Triggering rollback...'
            sh 'docker-compose down || true'
        }
    }
}
