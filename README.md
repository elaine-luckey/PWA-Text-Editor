# PWA-Text-Editor
UNC Chapel Hill Challenge 19

## Purpose:
To create a single-page PWA text editor application running in the browser and deployed on Heroku. The application is optimized for fast loading, bundling files together with Webpack. App installation, desktop icons, and display settings defined in the manifest.json, ehanced with offline capabilities through integration of a service worker using Workbox. IndexedDB client-side database created with the IDB package.

## Table of Contents
- [Purpose](#purpose)
- [Link to Demo of Application](#link-to-demo-of-application)
- [Acceptance Criteria](#acceptance-criteria)
- [Output](#output)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)

## Link to Deployed Application
https://nameless-anchorage-15060-872b1488b2e4.herokuapp.com/

## Acceptance Criteria
```
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Output
<img width="1277" alt="image" src="https://github.com/elaine-luckey/PWA-Text-Editor/assets/134161776/29d4d73c-b773-411a-a51b-723e762e5ea3">


## Credits:
Classmates at the UNC Coding Bootcamp
ChatGPT

## License: 
Please refer to the LICENSE in the repo

## How to Contribute:
Clone the repo, request permission to contribute to project, and code away!
