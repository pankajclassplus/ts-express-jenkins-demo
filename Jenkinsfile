pipeline {
  agent any
    
  tools {nodejs "nodejs"}
    
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
        sh 'pm2 stop server/server.js 2> /dev/null &'
        sh 'pm2 start -f server/server.js'
      }
    }
  }
}