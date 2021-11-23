def checkOs(){
    if (isUnix()) {
        console.log("MAC") 
    }
    else {
        sh "set NODE_ENV=qaCred"
    }
}
pipeline 
{
    agent any 
    stages {
        stage ('install dependencies'){
            steps{
                sh 'npm install'
            }
        }
        stage ('set environment'){
            steps{
    
               checkOs()
               echo $env:NODE_ENV
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

