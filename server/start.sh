#!/bin/bash
echo Recreating and starting!
sudo ./client.sh
sudo ./server.sh
sudo docker-compose -f docker-compose-prod.yml up --build --force-recreate