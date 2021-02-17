pipeline {
  agent any
    
  tools {
    nodejs "nodejs"
    pm2 "pm2"
  }
    
  stages {
        
    stage('Build') {
      steps {
         echo 'Installing dependencies.....'
        sh 'npm install'
        echo 'Making build.....'
        sh 'npm run tsc'
      }
    }  
    stage('Test') {
      steps {
        echo 'Running test cases'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying applications'
        sh 'node server/server.js'
      }
    }
  }
}