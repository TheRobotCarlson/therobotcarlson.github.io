---
title: Factorem
date: 2018-07-02
endDate: 2018-07-03
subtitle: A google cloud based cryptocurrency trading framework
excerpt: A google cloud based cryptocurrency trading framework.

img: factorem.jpg
thumbnail: factorem.jpg

devpost: https://devpost.com/software/pecunia-factorem

tags: ["python", "google-cloud", "firestore", "google-pubsub"]
---
## Inspiration
I gave a talk in spring 2018 to a group of business majors about how technology could be used in the financial industry. For that talk, I put together a small demo of automated trading. Much to my surprise, the bot worked well, _really_ well.
At the time I was just using simulated money, but it was still remarkable that it had the potential to make that much money that quickly. Fast forward past a busy semester and an action and internship packed summer and we get to my first open weekend to finally build a full platform from scratch.

## What it does
Primarily, this is a trading bot platform. The focus is on cryptocurrency, but it's been setup to be usable with any kind of API with buy/sell and price queries. The platform has a simulation mode for evaluating the performance of bots using simulated funds, but with mirror market buy/sell rates. 


## How we built it
This was built in Google Cloud using Firestore, PubSub, Compute Engine, and Python 3.7. 

Our code running in vms in Google Compute Engine poll exchanges to retrieve pricing and order data. Orders are published into PubSub streams by bots running on the framework and recorded in the Firestore database, other code running on a VM in Google Compute Engine subscribes to the order topics, checking account balances and permissions before placing the order. This allows the bot to only need read access to price data and publish access to the order topics per exchange. This allows for a more fine-grained permissions control should other people run bots on the framework. Another Google Compute engine VM polls exchanges to check when orders are completed so money can be reallocated to each bot running on the framework based on the orders placed.

## Challenges we ran into
Google Cloud can be really fickle when you're playing around with beta features. Firestore documentation is bad. Those things together often made it hard to figure out if I was the problem or it was. 

I have a nasty habit of prematurely optimizing and I was constantly having to stop myself from doing things the "best way" in favor of the "quick and dirty way" in the traditional style of a hackathon due to time constraints.

## Accomplishments that we're proud of
We got it all working! So many complex parts all working together. It's amazing that we were able to make them all work so flawlessly.

## What's next for Pecunia Factorem
- Better error reporting and handling
- Chat interface for feedback
