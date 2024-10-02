#!/bin/bash

cd $HOME/Development/genes
cp genes.service $HOME/.config/systemd/user
git pull
cd frontend
npm run build
cp public/* $HOME/Development/genes2brain_ulysses/
cd ../backend
npm run build
systemctl --user restart genes
