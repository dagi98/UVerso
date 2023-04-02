def AGENT_LABEL = null

node('master') {
  stage('Checkout and set agent'){
     checkout scm
     ### Or just use any other approach to figure out agent label: read file, etc
     if (env.BRANCH_NAME == 'master') {
        AGENT_LABEL = "prod"
     } else {
        AGENT_LABEL = "dev"
     }
   }
}

pipeline {
  agent {
       label "${AGENT_LABEL}"
    }
    //agent { label 'principal' }
    //options {
       // skipDefaultCheckout true
        //ansiColor(['xterm'])
    //}
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

//   post {
  //  always {
    //  node('principal1') {
      //  publishHTML(target: [
        //  allowMissing: false,
          //alwaysLinkToLastBuild: true,
          //keepAll: true,
          //reportDir: 'reportes',
          //reportFiles: 'index.html',
          //reportName: 'JaCoCo Coverage Report'
        //])
      //}
    //}
  //}
}
