sudo docker-compose build
sudo docker-compose run web /bin/bash
  - yarn install
  - bundle install
  - bundle exec rails db:create
  - bundle exec rails db:migrate
  - exit
sudo docker-compose up

ingresar a localhost:3000 en el navegador
