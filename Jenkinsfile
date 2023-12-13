pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                script {
                    def pullRequestBranch = env.GITHUB_PR_SOURCE_BRANCH
                    checkout([$class: 'GitSCM', branches: [[name: "*/${pullRequestBranch}"]], userRemoteConfigs: [[url: 'https://github.com/EladHamneshin/banner-fulltack-node-react-ts']]])
                }
            }
        }

        stage('client build') {
            steps {
                script {
                    dir('client') {
                        sh 'echo "Building..."'
                        sh 'npm i eslint --verbose'
                        sh 'npm run lint'
                        // sh 'docker build -t banner-client .'
                    }
                }
            }
        }

        // stage('server build') {
        //     steps {
        //         script {
        //             dir('server') {
        //                 sh 'echo "Building..."'
        //                 sh 'docker build -t banner-server .'
        //             }
        //         }
        //     }
        // }
    }

    post {
        success {
            script {
                echo 'Linting passed. You may now merge.'
                setGitHubPullRequestStatus(
                    state: 'SUCCESS',
                    context: 'class4_banner_lint',
                    message: 'Build passed',
                )
            }
        }
        
        failure {
            script {
                echo 'Pipeline failed. Blocking pull request merge.'
                setGitHubPullRequestStatus(
                    state: 'FAILURE',
                    context: 'class4_banner_lint',
                    message: 'Build failed  run npm run build to see errors',
                )
            }
        }
        always{
            cleanWs()
        }
    }
}
