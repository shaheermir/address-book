# Address Book [![Build Status](https://travis-ci.com/shaheermir/address-book.svg?branch=main)](https://travis-ci.com/shaheermir/address-book)

Deployed [here](http://addressbook-env.eba-jsvajv9s.us-west-2.elasticbeanstalk.com/) on AWS EBS.

## To Run Locally

1. `git clone https://github.com/shaheermir/address-book.git`
2. `yarn` OR `npm install`
3. `yarn start` OR `npm start`
4. Proceed to [http://localhost:3000](http://localhost:3000) to view the app.

## Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.

## Docker

#### Running Docker Container in Dev Mode

- Build image and run container: `docker-compose -f docker-compose.dev.yml up --build`
- Stop container: `docker-compose -f docker-compose.dev.yml down`

#### Running Docker Container in Prod Mode

- Build image and run container: `docker-compose up --build`
- Stop container: `docker-compose down`

Prod mode has NGINX as the web server and lacks hot-reload.

## TODOs

- Increase test coverage.
- Add storybook to document component library.
