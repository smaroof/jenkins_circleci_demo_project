pipeline {
    agent any 
    parameters {
         choice(name:'OS',choices['windows','mac'],description:'Select your Operating System: ')
    }
    stages {
        stage ('install dependencies'){
            steps{
                sh 'npm install'
            }
        }
        stage ('set environment'){
            when {
                expression {params.OS == "windows"}
            }
            steps{
                echo 'hello MAC world'
            }
        }
        stage('Parallel Execution'){
            parallel{
                 stage('Run main.js'){
                      steps {
                          sh 'npm test'
                      }
                 }
                  
                stage('Run test.js'){
                      steps {
                          sh 'node test'
                      }
                 }
                
                stage('Run feature file'){
                    steps{
                        sh 'npm run run_test'
                    }
                }
            }
        }
    }
}

