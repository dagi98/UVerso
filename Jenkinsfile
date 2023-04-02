pipeline {
    agent any

    parameters {
        string(name: 'FOLDER', defaultValue: 'cypress/e2e')
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'])
    }

    options {
        ansiColor(['xterm'])
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
                bat "npx cypress run --browser ${BROWSER} --spec \$(SPEC)"
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
            publishHTML(
                allowMissing: false,
                alwaysLinkToLastBuild: false,
                keepAll: true,
                reportDir: 'cypress/report',
                reportFiles: 'index.html',
                reportName: 'HTML Report',
                reportTitles: '',
                useWrapperFileDirectly: true
            )
        }
    }
}
