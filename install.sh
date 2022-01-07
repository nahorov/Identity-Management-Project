#!/bin/bash

mysqldump -u root -p identity > identity.sql
cp *.php *.js *.css /var/www/html
