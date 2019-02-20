if [ -d "api" ]; then
  cd api
  git pull origin master
else
  sudo git clone git@github.com:Kalaston/calidad-del-aire-api.git api
  cd api
  sudo docker-compose build
fi