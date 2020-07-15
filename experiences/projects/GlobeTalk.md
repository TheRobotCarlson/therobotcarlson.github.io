---
top: 3
title: GlobeTalk
date: 2018-03-25
endDate: 2018-03-26
subtitle: Helping immigrants and refugees learn languages one chat at a time.
excerpt: Helping immigrants and refugees learn languages one chat at a time.

img: globetalk.png
thumbnail: globetalk.png

github: https://github.com/TheRobotCarlson/GlobeTalk
devpost: https://devpost.com/software/globetalk

 
tags: ["firebase", "bootstrap", "jquery", "opentok", "hackathon"]
---

## Inspiration
A big problem for refugees and immigrants is learning the language and culture of the places they escape to. Many language apps work solely on text or audio playbacks without a real person on the other side assisting the journey of learning a new language. There are services for video calls with tutors and teachers, but they're all paid services, very impersonal, and largely inefficient. We want to empower refugees and immigrants to take their language education into their own hands and offer individuals an easy way to help empower others. This is an equalizing factor when it comes to starting a new life in another country. Building an emotional support group provides emotional security to better help stabilize individuals in their new lives.

## What it does
We built a live video and audio chat system that matches language learners with language teachers in real time. Language learners can subscribe to streams to participate or listen to conversations in both their native tongue and the language they're trying to learn. Since not all refugees or immigrants will have access to a computer or a phone we made it our mission to support both devices with video and audio as well as audio-only streams for those without good internet and/or access to a webcam.

Our system helps foster interpersonal relationships and networking by providing users the opportunity to favorite those with whom they'd like to have more conversations with later. This allows users to build lasting relationships through their educational journey and after.

Users can be enrolled as students and teachers, giving them the opportunity to give back to the community that helped them or giving students the opportunity to connect with other students to talk in their home language.

In addition, users have the option to save video or audio streams as they're happening to come back to later. This would be really helpful for older learners who need to go back over information a few more times to make it stick.

## How we built it
We used OpenTok paired with a simple Node.JS Heroku application to create sessions ids and tokens for users joining peer to peer chat rooms through our Android app and website. We save user favorites, stream archive data, and language data on a Firebase database. We also use that same database to provide user authentication to protect the privacy of our users.

## Challenges we ran into
Generating tokens for individual users.

Prioritizing important functionality over non-important functionality.

Debugging cross-platform problems.

Taking too many hours debugging to find out the Guest wifi blocked our video streams.


## Accomplishments that we're proud of
We had video streaming up pretty quickly. That actually gave us plenty of time to work towards our stretch goals. 

## What we learned
OpenTok is surprisingly simple to use. Authentication is annoying. 

## What's next for GlobeTalk
Better localization settings. If you're trying to learn English, having our website in English isn't that helpful.

Scheduling times to video chat with teachers.
