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

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('MySonarQubeServer') {
                    sh 'sonar-scanner'
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
                    script {
                        def hasAnsibleFiles = sh(
                            script: 'ls ../web/*.yml ../web/*.yaml 2>/dev/null || true',
                            returnStdout: true
                        ).trim()

                        if (hasAnsibleFiles) {
                            sh 'ansible-lint ../web'
                        } else {
                            echo 'No Ansible files found, skipping ansible-lint.'
                        }
                    }
                }
            }
        }
    }

    post {
        failure {
            echo 'Something went wrong. Triggering rollback...'
            sh 'docker-compose down'
        }
    }
}
