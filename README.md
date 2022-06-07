# DevOps_Pipeline_basics

Node.js, Express App

- CI/CD pipeline using GitHub Actions, Docker and Amazon ECS.
- The main workflow consists of 3 jobs :
    1. Test
    2. Build
A docker image is built and pushed to [Docker Hub repository]([https://hub.docker.com/u/yasminecherif](https://hub.docker.com/repository/docker/fatmaguidara/my-express))
    3. Deploy
        - The image is deployed to ECS with a service of 3 tasks and exposed on port 3000.
  
    ### Pipeline:
![7](https://user-images.githubusercontent.com/62222721/172492863-8c73f731-92d7-41e2-8424-b7eb7c19199d.png)
