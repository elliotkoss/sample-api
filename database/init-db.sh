#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE TABLE IF NOT EXISTS sample_users (
        id                      int primary key,        
        first_name              varchar(255),
        last_name               varchar(255)        
    );

    INSERT INTO sample_users (
        id,
        first_name,
        last_name
    ) VALUES (
        1,
        'Elliot',
        'Koss'
    );

    INSERT INTO sample_users (
        id,
        first_name,
        last_name
    ) VALUES (
        2,
        'Steve',
        'Jobs'
    );

    INSERT INTO sample_users (
        id,
        first_name,
        last_name
    ) VALUES (
        3,
        'Warren',
        'Buffett'
    );
        
EOSQL
