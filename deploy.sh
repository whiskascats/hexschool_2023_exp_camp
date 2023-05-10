set -e

npm run build

cd dist

git init
git add .
git commit -m 'deploy'

git push -f https://github.com/whiskascats/hexschool_2023_exp_camp.git master:gh-pages

cd - 