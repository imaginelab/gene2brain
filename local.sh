rsync -av ../gene2brain_data backend/data/
cd frontend
npm i
npm run build
cp public/* ../backend/data/gene2brain_data/
cd ../backend
npm i
npm run build
npm run start
