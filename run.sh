#!/usr/bin/env bash

# add a lint command - docker exec -it koel-050618_app_1 yarn lint

export DB_PORT=${DB_PORT:-3306}
export DB_ROOT_PASS=${DB_ROOT_PASS:-root}
export DB_NAME=${DB_NAME:-koel}
export DB_USER=${DB_USER:-koel-user}
export DB_PASS=${DB_PASS:-koel-pass}

COMPOSE="docker-compose -f docker-compose.dev.yml"

if [ $# -gt 0 ];then
  if [ "$1" == "lint" ]; then
    shift 1
    $COMPOSE run --rm \
      -w /usr/src/app \
      app \
      yarn run lint
  elif [ "$1" == "test" ]; then
    shift 1
    $COMPOSE run --rm \
      -w /usr/src/app \
      app \
      yarn run test
  elif [ "$1" == "coverage" ]; then
    shift 1
    $COMPOSE run --rm \
      -w /usr/src/app \
      app \
      yarn run test:coverage
  elif [ "$1" == "yarn" ]; then
    shift 1
      $COMPOSE run --rm \
        -w /usr/src/app \
        app \
        yarn "$@"
  elif [ "$1" == "composer" ]; then
    shift 1
      $COMPOSE run --rm \
        -w /usr/src/api \
        api \
        composer "$@"
  elif [ "$1" == "art" ]; then
    shift 1
      $COMPOSE run --rm \
        -w /usr/src/api \
        api \
        php artisan "$@"
  else
    $COMPOSE "$@"
  fi
else
  $COMPOSE ps
fi