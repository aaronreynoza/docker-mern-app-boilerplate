if [ -d "client" ]; then
  cd client
  git pull origin master
else
  sudo git clone git@github.com:Kalaston/calidad-del-aire-frontend.git client
  cd client
  sudo docker-compose build
fi