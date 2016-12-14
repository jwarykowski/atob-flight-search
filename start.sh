#!/usr/bin/env bash
if ! type npm > /dev/null; then
  echo 'You must have npm installed!'
  exit 1;
fi

if ! type npm > /dev/null; then
    echo 'You must have yarn installed!'
    exit 1;
fi

echo 'Running ATOB Flight Search on http://localhost:3000'
npm start
