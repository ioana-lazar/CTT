# Push the frontend and backend images t oa local registry (before this make sure to run docker-compose.yaml with `docker-compose up` that creates those images using the Dockerfiles for both frontend and backend)

docker stop registry # in case it's already running

docker run -d -p 5000:5000 --restart=always --name registry registry:2

# Restart the registry manually in case port is already in use

# Tag the frontend image

docker tag react-docker-app-frontend:latest localhost:5000/react-docker-app-frontend:latest

# Push the frontend image

docker push localhost:5000/react-docker-app-frontend:latest

# Tag the backend image

docker tag react-docker-app-backend:latest localhost:5000/react-docker-app-backend:latest

# Push the backend image

docker push localhost:5000/react-docker-app-backend:latest

# Build the cluster

kubectl apply -f k8s-deployment.yaml

# Make sure everything is running as expected

kubectl get deployments

Should be like this:

```
NAME         READY   UP-TO-DATE   AVAILABLE   AGE
backend      1/1     1            1           14m
frontend     1/1     1            1           14m
mypostgres   1/1     1            1           19m
```

# Port forward the frontend service to run it locally

kubectl port-forward service/frontend 5173:5173

# Port forward the backend service to run it locally

kubectl port-forward service/frontend 3000:3000

Now open a browser on: http://localhost:5173/
