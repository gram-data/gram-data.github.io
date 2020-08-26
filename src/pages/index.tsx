import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading, Styled, Link } from "theme-ui"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Styled.h1>Gram - Graphs as Paths</Styled.h1>
    <p>Gram is a path-based graph representation. </p>
    <p>Goals:</p>
    <Styled.ol>
      <Styled.li>Be able to say something about paths</Styled.li>
      <Styled.li>Be able to process graphs as a stream</Styled.li>
      <Styled.li>Be friendly for humans to write and machines to read</Styled.li>
    </Styled.ol>

    <p>Principles:</p>
    <Styled.ul>
      <Styled.li>Be explicit about implicit relationships</Styled.li>
    </Styled.ul>

    <Styled.h2>1. See the Forest Paths</Styled.h2>
    <p>Nodes and edges are powerful for structuring information. Full graphs have interesting features. 
    </p>
    <p>Graph theory was invented 
      to <Link href="https://en.wikipedia.org/wiki/Seven_Bridges_of_Königsberg">find a path</Link> yet
      dwells on the pieces of the puzzle rather than the resulting picture.</p>
    <p>Until graphs became databases, Paths didn't really need to be concrete. Thinking about graphs as
      an information architecture . Graph theory provides language and thinking to discuss features of a 
      graph. 
    </p>

    <Styled.h3>Path Information - Route 66</Styled.h3>
    <p>Head west from St.Louis in the USA and you may be traveling along historic Route 66. Nodes
    and Edges could be the towns and roads along the way. Where does
    information about Route 66 itself go? 
    </p>
    <p>This is the canonical use case of a Path as information structure.</p>

    <Styled.h3>Decorated Graphs - D3 DG</Styled.h3>
    <p>D3.js has a lovely force-based network layout. Like many other libraries, the
      algorithm annotates the graph with position data. Wouldn't it be nice to save
      position and styling without compromising the domain data in the graph?
    </p>
    <p>Paths could achieve that by following an architectural pattern called an Entity-component-system (ECS),
      a gift from the world of game development. Just wrap each Node (the entity) in a labeled Path (the system) to provide
      system-specific information (the component).
    </p>

    <Styled.h3>Shared Content</Styled.h3>
    <p>A delivery truck driver steers a truck which physically contains packages that are owned (though not yet possed)
      by other people. 
    </p>
    <p>A graph model can happily express all the relationships, smoothly answering questions like, 
      "where's my stuff?" but requires external knowledge to "get all the stuff" inside the truck without also getting
      the driver by accident. 
    </p>
    <p>A document model can provide explicit containers for getting stuff in the truck, but optimizes for either 
      truck-oriented or owner oriented queries.</p>
    <p>A path model can do both explicitly in the data, without needing a schema or a written guidebook. </p>

    <Styled.h2>2. From nodes and edges, to paths</Styled.h2>
    <p>Gram structures data as property graph paths.
    In practice, that means you can write a graph 
    using Cypher paths like this:
    </p>
    <Styled.pre>{`
    (a)-[e1]->(b)
    (b)<-[e2]-(c)
    `}</Styled.pre>
    <p>The content values of a graph are attached to either nodes or edges:
    </p>
    <Styled.pre>{`
    (a:Person {name:"Wile E. Coyote"})
    (b:Company {name:"Acme, Inc."})
    (a)-[e1:CUSTOMER_OF]->(b)
    `}</Styled.pre>
    <p>In Cypher a path is a name bound to a path expression:
    </p>
    <Styled.pre>{`
    p = (a)-[e1]->(b)<-[e2]-(c)
    `}</Styled.pre>

    <p>Gram adopts the square brackets used by relationships to also delimit a path.
      This provides room for labels and records to be attached to a path:
    </p>
    <Styled.pre>{`
    [p:TROUBLESOME {accidents:12000} (a)-[e1]->(b)]
    // or just...
    [p:TROUBLESOME {accidents:12000} e1]
    `}</Styled.pre>


    <Styled.h2>3. Write in detail, read in volume</Styled.h2>
    <p>Nodes and edges are wonderful. 
    </p>
  </Layout>
)

export default IndexPage
