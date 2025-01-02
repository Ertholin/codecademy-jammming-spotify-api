# The purpose of the project
In this project, I build a React web application called Jammming. I am using React's knowledge components, passing state, and requests with the Spotify API to build a website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.
# Technologies used

# Features

# Future work

# Deploy App
- In this section, you will use surge to deploy your Jammming project.

You will start by installing surge globally.

In your console, run

npm install --global surge
BEFORE YOU PROCEED, you need to think of a domain name with the following format:

SOME_NAME.surge.sh
SOME_NAME can be replaced with anything you like

Next, you need to replace or add this URI to two locations in your project (make sure to add the https:// before your domain name in both locations)

FOR EXAMPLE

https://SOME_NAME.surge.sh
In Spotify.js set redirectURI to your new domain
In your Spotify application, add your new domain as a redirect URI
Back in the command line. from the Jammming project's root directory, run

npm run build
cd into the build directory and run the command

§ surge
Follow the steps on the screen. Change the domain value to your new URI.

Congrats! You've just deployed a React App that queries the Spotify
