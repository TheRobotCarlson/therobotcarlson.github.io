---
top: 1
title: Photoshoplifting
date: 2017-04-16
endDate: 2017-04-17
subtitle: A quick automated way to do photoshop's content aware fill to remove unwanted objects from images.
excerpt: Photoediting sucks! We wanted to make an easy way to do a normally hard and tedious task or removing arbitrary objects from images.

img: photoshoplifting.jpg
thumbnail: photoshoplifting2.jpg


tags: ["mathematica", "django", "scikit", "hackathon", "cathacks"]
---
Give our api an image and a rough ellipse around what you want to get rid of and our algorithms do the rest, removing unwanted people, backgrounds, or things. Sometimes people's heads. I was responsible for the Python code using scikit-image that was written and the Mathematica code for the inpainting. I also setup a Django server to run the Python code and connect the cloud-deployed Mathematica code.