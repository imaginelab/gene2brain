#!/bin/bash

cd $HOME/Development/gene2brain
git pull
rsync -av ../gene2brain_data backend/data/
cp gene2brain.service $HOME/.config/systemd/user
systemctl --user daemon-reload
cd frontend
npm i
npm run build
cp public/* $HOME/Development/gene2brain/backend/data/gene2brain_data/
cd ../backend
npm i
npm run build
systemctl --user restart gene2brain
