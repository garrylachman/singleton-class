#!/bin/bash

PATH=$PATH:/usr/local/bin:/usr/local/sbin

[[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh # This loads NVM

nvm use 4;

npm run lint-fix;
if [ $? -ne 0 ]; then
  echo "Failed LINT --fix"
  exit 1
fi

npm run lint;
if [ $? -ne 0 ]; then
  echo "Failed LINT"
  exit 1
fi

npm test;
if [ $? -ne 0 ]; then
  echo "Failed TEST"
  exit 1
fi

# Check for the stupid OPTIONS + SPACE thing
(grep --include={*.js,*.less,*.html} --exclude=*node_modules* -rnw '.' -e " ");
if [ $? -eq 0 ]; then
  echo "Has stupid OPTIONS + SPACE hard space thing!"
  exit 1
fi

(git status | grep 'working directory clean');
if [ $? -ne 0 ]; then
  echo "Working directory is NOT clean!"
  exit 1
fi
