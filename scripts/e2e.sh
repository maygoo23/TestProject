#!/bin/bash
# Simple e2e smoke test using curl
set -e
API=http://localhost:3000/api
# create user
curl -s -X POST $API/users -H 'Content-Type: application/json' -d '{"email":"admin@example.com","password":"admin","role":"ADMIN"}'
# login
curl -s -c cookies.txt -X POST $API/auth/login -H 'Content-Type: application/json' -d '{"email":"admin@example.com","password":"admin"}'
# create display
curl -s -b cookies.txt -X POST $API/displays -H 'Content-Type: application/json' -d '{"name":"Lobby","slug":"lobby","timezone":"UTC"}'
# create playlist
PID=$(curl -s -b cookies.txt -X POST $API/playlists -H 'Content-Type: application/json' -d '{"name":"Main"}' | jq '.id')
# set items (none)
curl -s -b cookies.txt -X POST $API/playlists/$PID/items -H 'Content-Type: application/json' -d '{"items":[]}'
# fetch schedule
curl -s $API/displays/lobby/schedule
