---
top: 4
title: RESearch
date: 2018-02-18
endDate: 2018-02-19
subtitle: RESearch is a computational tool for determining the best way to perform multiple DNA transformations.
excerpt: RESearch (<u>R</u>estriction <u>E</u>nzyme <u>Search</u>) uses existing databases of genes and restriction enzymes to find the optimal way to encode arbitrary information into DNA.


github: https://github.com/zsilver1/RESearch
devpost: https://devpost.com/software/research-1osetc


tags: ["python", "neo4j", "bioinformatics", "hackathon"]

---
## Inspiration

We were inspired by recent research done by Harvard University. The researchers were able to encode a small gif in DNA, frame by frame. We thought about how we could improve this process, and make it more accessible.

## What it does

RESearch uses existing databases of genes and restriction enzymes to find the optimal way to encode arbitrary information into DNA. (Restriction enzymes are used to bread apart DNA at certain base-pair patterns.) Research essentially outputs a step by step guide for a lab scientist trying to create a specific sequence in DNA. This can be used to either store arbitrary data in DNA, or (more importantly) to easily edit existing DNA to eliminate dangerous or unwanted mutations. For example, we could edit the DNA of bacteria to eliminate their resistance to antibiotics.

## How I built it

RESearch is built mostly in python, but utilizes neo4j for the database of enzymes, and a freely available tool called Blast to easily search for patterns in genes.

## Challenges I ran into

It was very hard for us to optimize the neo4j database. There were over a million enzymes that we had to search through, so we had to modify our algorithm to allow it to run in a reasonable amount of time.

## Accomplishments that I'm proud of

- Learning new technologies, and using them to create a relatively finished project.
- Working efficiently as a team to finish the project in time.

## What I learned

We learned neo4j without any prior experience. We also learned a lot about biology and specifically bioinformatics.

## What's next for RESearch
Hopefully, we can use RESearch for some future research projects, to develop it more.