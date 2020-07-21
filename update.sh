#!/usr/bin/sh

cd /home/pi/nCube-dry-100
sudo killall python3
git stash
git pull
sleep 5
git stash pop
python3 start.py
sleep 2
python3 exec_print.py &
sleep 2
python3 exec_buzzer.py &
sleep 2
python3 exec_res2.py &
sleep 2
python3 exec_res.py &
sleep 2
pm2 restart thyme.js
