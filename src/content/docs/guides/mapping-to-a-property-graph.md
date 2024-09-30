---
title: Mapping to a Property Graph
description: How to map the logical structures of a Subject graph to a Property Graph
---

## About Mapping

Mapping to a Property Graph is generally lossy, requiring conventions or 
**Instructions**: 

1. Write a brief overview of at most 3 paragraphs, about the size of a LinkedIn post

A tutorial is a practical activity, in which the student learns by doing something meaningful, towards some achievable goal.

A tutorial serves the user’s acquisition of skills and knowledge - their study. Its purpose is not to help the user get something done, but to help them learn.

Tutorials - learning-oriented guides that describe practical steps and are intended to serve our study.
A tutorial in other words is a lesson. They apply how-tos into a practical solution.

## Detailed Examples of mapping

### Value mapping

*Identifiers are a convention:*
  - `(a) =~ ({_id:"a"})`

*Metadata is a prefix:*
  - ```({seq@1}) =~ ({`@seq`:1}})```

*Strings are strings:*
  - ```({k:"v"}) =~ ({k:"v"})```

*Integers are integers:*
  - ```({k:42}) =~ ({k:42})```

*Decimals are decimals:*
  - ```({k:3.14}) =~ ({k:3.14})```

*Measurements are strings:*
  - ```({k:14px}) =~ ({k:"14px")```

*Ranges are strings:*
  - ```({k:1..10}) =~ ({k:"1..10")```

*Tagged strings:*
  - ```({k:md`**bold**`}) =~ ({k:"**bold**"})```

### One-to-one correspondence

Some Subject structures are isomorphic to structures in a Property Graph, though 
properties and identifiers require special handling as noted above.

*Nodes are Nodes:*

  ```
  @description("subject to property graph")
  (a::Thing {k::string})==>(b:Thing {_id::id(a), k::a.k})
  ```

  ```
  @description("property to subject graph")
  (b::Thing {_id::string, k::string})==>(b._id:Thing {k::b.k}),
  ```

*Relationships are Relationships:*
  - `()-[r:SIMILAR_TO]->()` =~ `()-[:SIMILAR_TO {_id:"r"}]->()`

`[a:Thing {k:"v"}]` =~ `(a:Thing {k:"v"})`
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
