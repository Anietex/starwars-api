#!/bin/sh
if [ -f .env ]
then
  export $(cat .env | sed 's/#.*//g' | xargs)
fi


if [ $NODE_ENV = "production" ]; then
    npx sequelize-cli db:migrate
    npm start
fi

if [ $NODE_ENV = "development"  ] || [ $NODE_ENV = "local" ] || [ $NODE_ENV = "staging" ] ; then
    npx sequelize-cli db:migrate
    npm run dev
fi
