node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
        sh 'git --version'
        sh 'docker -v'
        sh 'printenv'
    }
    stage('IsLast'){
        sh 'cat src/controllers/user.controller.ts'
    }
    stage('Deploy'){
        sh 'docker-compose down'
        sh 'docker-compose up -d'
    }
  }
  catch (err) {
    throw err
  }
}