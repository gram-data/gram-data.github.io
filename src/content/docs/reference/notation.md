---
title: Graph Pattern Notation
description: Compact notation for describing knowledge graph structures
---


![Graph pattern railroad diagram](../../../assets/images/railroad/pattern.svg)
*Graph pattern railroad diagram, a comma-separated list of PatternElement*

## About Notation

The GraphRAG pattern catalog uses a graph notation to describe logical graph structures
called patterns that are composed of nodes, relationships and subjects.

![PatternElement is a Node, Relationship or Subject](../../../assets/images/railroad/pattern-element.svg)
*PatternElement is a Node, Relationship or Subject*

### Nodes

![Node is delimted by parentheses](../../../assets/images/railroad/node.svg)
*Node: delimted by parentheses*

Nodes are individual records in a graph.

`(a)` 

  - a single node identified as `a`

`(a:Thing)` 

  - a single node labeled as a `Thing`

`(a:Thing:Special)` 

  - single node with two labels

`(a:Thing {k:"v"})` 
  - labeled node with a record defining property `k` to be `"v"`

`(::Thing {k::string})` 
  - node with record declaring `k` to be a `string` on Nodes labeled as `Thing`
  - this may be used as a graph type constraint, if supported
  - or, declarations may be stored in a physical graph using a convention
  - convention: ```(a:Thing {`::k`:`string`})```

`(a:Thing {x@"meta"})` 
  - record with metadata about property `x`
  - metadata may be stored in a physical graph using a convention
  - convention: ```(a:Thing {`@x`:"meta"})```


### Relationships

![Relationship starts with a node, then an arrow followed by a Path](../../../assets/images/railroad/relationship.svg)
*Relationship: starts with a Node, then an Arrow followed by a Path*

![Arrow looks like an arrow](../../../assets/images/railroad/arrow.svg)
*Arrow: delimited by a head and tail, with square-bracketed content*

![Path is either a node or a Relationship (which starts with a Node)](../../../assets/images/railroad/path.svg)
*Path: either a Node or a Relationship (which starts with a Node)*

Relationships pair two nodes, a 'from' and a 'to' node. 

`(a)-[:SIMILAR]->(b)` 
  - a relationship from `a` to `b` labeled as `SIMILAR`

`(a)-[:SIMILAR {score:0.8}]->(b)` 
  - a relationship with a record

`(a)=[::SIMILAR {score::0.0..1.0}]=>(b)`
  - a relationship declaration, stating that the `score` value of `SIMILAR` relationships should be a decimal in the range of 0.0 and 0.1
  - this may be used as a graph type constraint, if supported
  - or, declarations may be stored using a convention
  - convention: ```(a)-[:`::SIMILAR` {`::score`:"0.0..1.0"}]->(b)```

### Subjects

![Subject is surrounded by square brackets](../../../assets/images/railroad/subject.svg)
*Subject is delimted by square brackets*

Subjects associate multiple elements. They're a general purpose pattern.

The conventions included with each example below show how a physical graph
might store the logical construction. Note that some of the physical representations
are "lossy" because the mapping is not isomorphic (you can't get back to the logical 
representation). 


`[a]` 
  - Subject `a` about no other elements
  - equivalent to a Node
  - convention: `(a)`

`[a:Thing]` 

  - Subject labeled as a `Thing`
  - convention: `(a:Thing)`

`[a:Thing:Special]` 

  - Subject with two labels
  - convention: `(a:Thing:Special)`

`[a:Thing {k:"v"}]` 
  - labeled Subject with a record defining property `k` to be `"v"`
  - convention: `(a:Thing {k:"v"})` 

#### Subject with Members

Subjects with no membership are equivalent to Nodes. Members can be added
by using a separator called an "associator" followed by a Pattern which
may use identifier references or inline element definitions.

`|` pipe associator indicates membership
  - association is from subject to each member, one to many
  - no implied, direct relationship among members 

`[a | i]`
  - subject `a` about another element `i`
  - known as an "annotation"
  - on a Node, could be represented as a relationship, or self-loop
  - convention: `(a)-->(i)`
  - convention: `(i)-[a]->(i)`

`[a | i,j,k]` 
  - subject about 3 other elements
  - forms a star pattern rooted at `a` when `i`,`j`,`k` are Nodes
  - convention: `(a)-->(i), (a)-->(j), (a)-->(k)`
  - when applied to Relationships, it creates a "Bundle"
  - `()-[i]-(),()-[j]-(),()-[k]-()`

`[a |:R| i,j,k]` 
  - subject with labeled relationships to the members
  - convention: `(a)-[:R]->(i), (a)-[:R]->(j), (a)-[:R]->(k)`


#### Subject with Composed Members

Composition takes pairs of elements, relating each pair
within the membership. 

`->` arrows for composition
  - Subject connects each of the member pairs
  - requires at least 2 members

`[a:R -> i,j]` 
  - Subject composing 2 elements into a pair
  - equivalent to a Relationship when `i` and `j` are both Nodes
  - convention: `(i)-[:a:R]->(j)`
  - equivalent to a Path when `i` and `j` are composable Relationships 
    (a Relationship where the right-side of `i` is the left side of `j`)
  - convention: ```(a:R:`@Subject` {members:[i, j]}), ()-[i]->()<-[j]-()```
  - otherwise, describes a Pattern

`[a:R {k:"v"} -> i,j,k]` 
  - Subject composing 3 elements into a sequence
  - equivalent to a sequence of Relationships, when members are all Nodes
  - convention: `(i)-[a:R {k:"v"}]->(j)-[a:R {k:"v"}]->(k)`
  - 

`[:R -> i,j,i,k]` 
  - a described path 
  - convention: ```(i)-[:R {`@seq`:1}]->(j)-[:R {`@seq`:2}]->(i)-[:R {`@seq`:3}]->(k)```

## Further reading

- See [gram-data/nearley-gram](https://github.com/gram-data/nearley-gram/) for full EBNF
- See [gram-data/tree-sitter-gram](https://github.com/gram-data/tree-sitter-gram/) for a parser
