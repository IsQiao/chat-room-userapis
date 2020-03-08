node {
    stage(‘Checkout’) {
        steps {
            checkout scm
        }
    }
    stage(‘Environment’) {
        sh 'git --version'
        echo "Branch: ${env.BRANCH_NAME}"
        sh 'docker -v'
        sh 'printenv'
    }
    stage(‘Build’) {
        steps {
            sh 'docker-compose up --build'
        }
    }
}