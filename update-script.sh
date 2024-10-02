#!/bin/bash

cd $HOME/Development/genes
git pull
rsync -av ../gene2brain_ulysses backend/data/
cp genes.service $HOME/.config/systemd/user
systemctl --user daemon-reload
cd frontend
npm i
npm run build
cp public/* $HOME/Development/genes/data/genes2brain_ulysses/
cd ../backend
npm i
npm run build
systemctl --user restart genes
