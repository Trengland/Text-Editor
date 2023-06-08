# JATE (Just Another Text Editor)
## JavaScript Browser Text Editor

## Overview
JATE is a single-page application that serves as a text editor running in the browser. It meets the criteria of a Progressive Web Application (PWA) and incorporates various data persistence techniques for redundancy and offline functionality. This project utilizes the IndexedDB database and the idb package, which is a lightweight wrapper around the IndexedDB API.

## Features
- Create, edit, and save text documents directly in the browser
- Offline functionality allows you to access and modify documents even without an internet connection
- Automatic data synchronization with the IndexedDB database for persistent storage
- Progressive Web Application (PWA) features for an enhanced user experience

## Technologies Used
- Front-end: HTML, CSS, JavaScript
- Back-end: Node.js, Express.js
- Database: IndexedDB
- Build Tools: Webpack
- Deployment: Heroku

## Getting Started
To run the JATE text editor locally, follow these steps:

1. Clone the repository: `https://github.com/Trengland/Text-Editor`
2. Navigate to the project directory: `cd <your projects main directory> or Text-Editor`
3. Install dependencies: `npm install`
4. Start the development server: `npm run start:dev`
5. Open your browser and visit: `http://localhost:3000`

## Deployment
The JATE text editor can be deployed to Heroku using the following steps:

1. Create a Heroku account if you don't have one already: [https://signup.heroku.com/](https://signup.heroku.com/)
2. Install the Heroku CLI: [https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)
3. Log in to your Heroku account: `heroku login`
4. Create a new Heroku app: `heroku create`
5. Deploy the application to Heroku: `git push heroku main`
6. Open the deployed app in your browser: `heroku open`

## Contribution
Contributions to JATE are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on the GitHub repository. Feel free to fork the repository and submit pull requests as well.

## License
JATE is released under the ISC License. See the [LICENSE](LICENSE) file for more details.
