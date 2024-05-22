#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER postgres WITH PASSWORD 'qwerty';
    ALTER USER postgres WITH SUPERUSER;
    CREATE DATABASE sonar;
    GRANT ALL PRIVILEGES ON DATABASE sonar TO postgres;
EOSQL