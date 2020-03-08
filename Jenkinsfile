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
    stage('Deploy'){
        sh 'docker-compose up --build'
        sh 'docker-compose up -d'
    }
  }
  catch (err) {
    throw err
  }
}