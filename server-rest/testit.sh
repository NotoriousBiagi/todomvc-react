#!/bin/bash

echo "RESET"
http --print b DELETE localhost:3001/todos/reset

echo "INDEX"
http --print b GET localhost:3001/todos

echo "GET"
http --print b GET localhost:3001/todos/2

echo "CREATE"
http --print b POST localhost:3001/todos title="buy milk" completed:=true

echo "INDEX"
http --print b GET localhost:3001/todos

echo "UPDATE"
http --print b PUT localhost:3001/todos/4 title="buy ice-cream" completed:=true

echo "INDEX"
http --print b GET localhost:3001/todos