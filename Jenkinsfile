pipeline {
  agent { label 'principal1' }
    options {
        skipDefaultCheckout true
        ansiColor(['xterm'])
    }
    parameters {
    string(name: 'FOLDER', defaultValue: 'cypress/e2e')
    choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'])
    string(name: 'SPEC', defaultValue: 'cypress/e2e/')
}

stages {
    stage('Build') {
        steps {
            echo "Building application"
        }
    }

    stage('Testing') {
        steps {
            bat "npm i"
            bat "npx cypress run --browser ${BROWSER} --spec $SPEC"
        }
    }

    stage('Deploy') {
        steps {
            echo "Desplegando aplicación"
        }
    }
}

   post {
    always {
      node('principal1') {
        publishHTML(target: [
          allowMissing: false,
          alwaysLinkToLastBuild: true,
          keepAll: true,
          reportDir: 'C:/Users/davig/OneDrive/Desktop/metaverse/reportes',
          reportFiles: 'index.html',
          reportName: 'JaCoCo Coverage Report'
        ])
      }
    }
  }
}
