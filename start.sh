#!/bin/sh
if [ -f .env ]
then
  export $(cat .env | sed 's/#.*//g' | xargs)
fi

#npm run dev
if [ $ENV = "production" ]; then
    npm start
fi

if [ $ENV = "dev"  ] || [ $ENV = "dev" ] ; then
    npm run dev
fi
