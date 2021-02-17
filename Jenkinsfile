pipeline {
  agent any
    
  tools {nodejs "nodejs"}
    
  stages {
        
    stage('Build') {
      steps {
         echo 'Installing dependencies.....'
         sh 'pm2 list '
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
        sh 'pm2 start server/server.js'
        sh 'pm2 restart server/server.js'
      }
    }
  }
}