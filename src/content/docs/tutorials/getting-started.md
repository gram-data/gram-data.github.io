---
title: Subject modeling
description: Make a copy of this to create new tutorital
---

## About Subject Modeling

**Instructions**: 

1. Write a brief overview of at most 3 paragraphs, about the size of a LinkedIn post

A tutorial is a practical activity, in which the student learns by doing something meaningful, towards some achievable goal.

A tutorial serves the user’s acquisition of skills and knowledge - their study. Its purpose is not to help the user get something done, but to help them learn.

Tutorials - learning-oriented guides that describe practical steps and are intended to serve our study.
A tutorial in other words is a lesson. They apply how-tos into a practical solution.

## Detailed Subject Modeling


An object literal may look like this in JSON:

```json
{
  "name": "Billy",
  "birthplace": "Scotland" 
}
```

Intuitively, that looks like information about a person. But, it could be a goat.
Gram makes that explicit by allowing the object record to be labeled:

```json
(:Person {
  "name":"Billy",
  "birthplace": "Scotland" 
})
```

The label can include an identifier, so you can refer to it later:

```cypher
(billy:Person {
  "name":"Billy",
  "birthplace": "Scotland" 
})
```

When you know something that relates two subjects, you can pair them using their
identifiers:

```cypher
(billy)-[:KNOWS]->(pat)
```

When a single object knows multiple other subjects, you can use

```
[billy |:KNOWS| pat, sal, blake]
```


## Further reading

**Instructions**:

1. Provide links to external sources
2. Don't keep the link below or these instructions, they're for your reference as the author

- Read [about tutorials](https://diataxis.fr/tutorials/) in the Diátaxis framework
