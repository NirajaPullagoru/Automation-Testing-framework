#PROJECT : AUTOMATION TESTING 
In here you will find an automation framework for Quantra community website.

#DEPENDENCIES:
1. Nodejs : v5.6.0
2. npm : v8.9.4
3. Selenium-standalone : v3.11.0

#INSTRUCTIONS:
1. Download the repository in your local
2. Add config.json in the local repository which should be same as config.sample.json with the correct credentials.
3. Run "selenium-standalone start" in window's cmd prompt
4. Go to your local repository and run "npm install" in cmd prompt which is navigated to your local repository. Wait for the node modules to install and then run "npm start".

#WORKFLOW:
The controller initially goes to executor.js which is the main page.
The control then goes to driver.js to launch the browser.
It visits keywords.js page everytime any action needs to be performed.
All the promises are being resolved in executor.js 

#EXCEPTIONS:
1. An extra wait is added because the click function deos not have an option to check for the disable attribute
2. ClickUsingEnter is used for elements which were not clickable using mouse click
