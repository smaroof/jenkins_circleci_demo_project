pipeline {
    agent any 
    
    stages {
        stage ('build'){
            steps{
                echo 'Building the project....'
            }
        }
         stage ('test'){
            steps{
                echo 'Testing the project....'
            }
        }
        stage('Project File Execution'){
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

