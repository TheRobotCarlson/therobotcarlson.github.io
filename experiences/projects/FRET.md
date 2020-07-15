---
title: FRET Visualizer
date: 2014-05-01
endDate: 2014-08-01
subtitle: An interactive tool for visualizing the physics of Förster Resonance Energy Transfer (FRET).
excerpt: An interactive tool for visualizing the physics of Förster Resonance Energy Transfer (FRET).

img: fret3.png
thumbnail: fret8.png

github: https://github.com/TheRobotCarlson/fret


tags: ["mathematica", "data-visualization", "wku-physics-research"]
---


## Inspiration
When dealing with [Förster Resonance Energy Transfer](https://en.wikipedia.org/wiki/F%C3%B6rster_resonance_energy_transfer), often the physics around the orientation factor, κ<sup>2</sup>, is misunderstood. This leads to most people following the advice of [Yang (2010)](https://onlinelibrary.wiley.com/doi/abs/10.1560/IJC.49.3-4.313) and estimating it as 2/3, accepting a relative error of up to 10%. This can lead to larger errors if these calculations are used in later copmutations. For example, a research group out of Duke University explored the idea of using FRET calculations to create logic gates for a light-based computer. Only by understanding the orientation factor correctly would they be able make computations accurately.

To help alleviate this issue, I built a tool that allows the user to visualize how the orientation factor affects the efficiency of energy transfer and the probability distribution relating to the orientation of chromophores involved.

## What it does
This tool allows the user to change variables relating to the two chromophores involved in Förster Resonance Energy Transfer and see the resultant geometry / probability distributions as well as the efficiency of energy transfer.

## How I built it
Mathematica has a range of tools that make it really easy to make and deploy interactive visualizations. At the time of making this, Mathematica was my primary programming language.

## Challenges I ran into
Being in high school when I first made this, I didn't really know anything about the messy math or physics needed. I've since learned, but now I rarely need it. Weird how things work out.

## Accomplishments that I'm proud of
I actually came to understand the research during my time working on this project and it's stuck with me many years (5 years at the time of writing!) later.

## What I learned
A lot of physics that I knew nothing about before. And that Mathematica makes it extremely easy to make demos for just about anything.

## What's next for FRET
Nothing! This project was a long time ago. If anyone wants me to get the tools back up and running again, email me at [briancarlson6174@gmail.com](mailto:briancarlson6174@gmail.com). 
