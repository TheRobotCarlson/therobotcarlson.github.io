---
title: eyeRoom
subtitle: Find out if your friends are in the hangout place!
excerpt: Find out if your friends are in the hangout place using OpenCV and chatbots!

date: 2018-03-04
endDate: 2018-03-05

img: eyeroom.jpg

devpost: https://devpost.com/software/eyeroom
github: https://github.com/therobotcarlson/eyeRoom

tags: ["firebase", "opencv", "amazon-web-services", "raspberry-pi", "node-js", "computer-vision", "telegram-api", "javascript", "hackathon"]
---

## Inspiration
We're a part of our school's local ACM chapter. We have a club room that people hang out in during the day and into the night. It serves as a hangout spot, a study spot, and a club social outreach center. There's a problem when you have a large organization and a small room, though. Sometimes people come in wanting to study and find it jam packed full of people. Other times people come into the room expecting to hang out with their friends only to find the room empty! Sometimes members are only looking for specific other members while trying to avoid particular people. 

We decided an automated solution to this would save us some hassle.

## What it does
Using opencv, running on a raspberry pi with a webcam, we capture images of a room and determine the number of individuals in the room. The image of the room and the meta data is then pushed to a firebase server. A telegram bot can be used to access the server and report to users the status of the room.

## How we built it
 * opencv + raspberry pi w/ camera for image processing of the room.
 * firebase database for storage of data
 * python telegram bot for user interface
    * python-telegram-bot
    * pyerbase
 * dynamic webpage for user interface
    * html5
    * css
    * javascript
    * firebase

## Challenges we ran into
 * Amazon lambda and Amazon Alexa skills turned out taking a longer time than expected to get working.
 * Compile time and network conditions slowed progress.

## Accomplishments that we're proud of
 * We stack cups really well.
 * A healthy amount of code was finished within the first 12 hours, compile times delayed the remaining portions.

## What we learned
 * Opportunity to work with new languages and packages.

## What's next for eyeRoom
 * Integrate Alexa skills as another form of user interface.
