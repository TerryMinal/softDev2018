#!/bin/bash

while true; do
  read  -p "repo name:" x
  if [[ "$x" != "" ]]
  then
    git submodule add $x
  fi
done
