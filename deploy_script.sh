cd ~/docker-mern-app-boilerplate
git pull origin master
sudo docker-compose -f docker-compose-prod.yml up -d --build --force-recreate
