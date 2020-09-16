#!/usr/bin/sh

sudo chmod 777 /home/pi/nCube-dry-100/
cd /home/pi/nCube-dry-100
sudo chmod 777 *
pm2 start run_python.js
sleep 2
pm2 start thyme.js


