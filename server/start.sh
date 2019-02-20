#!/bin/bash

echo Recreating and starting!
sudo docker-compose -f docker-compose-prod.yml up --build --force-recreate