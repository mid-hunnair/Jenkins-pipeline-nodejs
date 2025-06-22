pipeline {
    agent any

    stages {
        stage('install') {
            steps {
                bat 'npm install'
            }
        }


        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Run') {
            steps {
                bat 'node app.js'
            }
        }
    }
}