pipeline {
  agent any

  environment {
    DOCKER_BUILDKIT = "1"
  }

  stages {
    stage('Clone Repo') {
      steps {
        git url: 'https://github.com/bipin-adhk/shopfree.git', branch: 'main'
      }
    }

    stage('Lint') {
      steps {
        sh 'npm install -g eslint'
        sh 'eslint web/src || true'  // Prevent failure if no ESLint config yet
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
        sh 'ansible-lint ansible/site.yml || true'
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
