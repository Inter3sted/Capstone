# Drone Delivery Service

## Overview

This is my capstone project entitled _Drone Delivery Service_ for Savvy Coders.

### Dependencies
Use npm to install a few dependencies
> use npm i -g [whatever the dependency is] | example: "npm i -g axios"

> -g means it affects or installs/utilizes it on every working directory
1. axios *(for importing APIs)*
2. dotenv *(loads the envs from .env)*
3. html-literal *(gives the ability to create an html literal for SPAs)*
4. lodash *(this is for the url of whatever page you're connected to, to be capitalized)*
5. mongoose *(connects/acts as a front-end for MongoDB)*
6. navigo *(this is for navigation using our nav bar)*
7. parcel *(a bundler that connects/compiles all files and dependencies into smaller output files that's used to run the code itself)*

In your package.json, within "scripts", make sure to put **(make sure a comma is separating them like listed)**: 
1. "parcel-build": "parcel build index.html && cp _redirects ./dist/",
2. "serve": "parcel index.html",
3. "app:watch": "nodemon --watch ./server -e js ./server/app.js",
4. "start": "node ./server/app.js"

In your .env, make sure you have:
1. A Mapbox api key
2. An Openweathermap api key
3. A MongoDB key

> Optional
3. A connection to Heroku or some other cloud-based that enables an ability to deploy and manage your site (This is used for a self-created API that checks out a few pizzas with their respective toppings)
