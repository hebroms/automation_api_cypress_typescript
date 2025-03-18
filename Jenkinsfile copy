pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/hebroms/automacao-web-cypress.git'
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }

        stage('Allure Report') {
            steps {
                sh 'npm run allure:generate'
                publishHTML (target : [
                  reportDir: 'allure-report',
                  reportFiles: 'index.html',
                  reportName: "Allure Report"
                ])
            }
        }
    }

    post {
        always {
            junit 'results/junit/*.xml'
        }
    }
}
