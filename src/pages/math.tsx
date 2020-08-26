import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import { Styled } from 'theme-ui'

const MathPage = () => (
  <Layout>
    <SEO title="Graph Path Math" />
    <Styled.h1>Graph Path Math</Styled.h1>
    <p>Everything is a Path. Structure builds up by composing empty Paths 
      into non-empty Paths. 
    </p>
    <Styled.h2>Type Definitions</Styled.h2>
    <p>(The notation here borrows from Purescript.)</p>
    <Styled.h3>Paths</Styled.h3>
    <p>Paths are either empty or the composition of two paths.</p>
    <dl>
      <dt><Styled.code>data Path = empty | path (Path) (Path) </Styled.code></dt>
      <dd><Styled.code>empty :: Path</Styled.code></dd>
      <dd><Styled.code>path :: Path --&gt; Path --&gt; Path</Styled.code></dd>
    </dl>
    <Styled.h3>Graph elements</Styled.h3>
    <p>Graph elements are special cases of a Path.</p>
    <p>A Node is a Path of length 0 containing two empty Paths.</p>
    <dl>
      <dt><Styled.code>type Node = Path</Styled.code></dt>
      <dd><Styled.code>node :: Empty --&gt; Empty --&gt; Node</Styled.code></dd>
    </dl>
    <p>An Edge is a Path of length 1 containing two Nodes.</p>
    <dl>
      <dt><Styled.code>type Edge = Path</Styled.code></dt>
      <dd><Styled.code>edge :: Node --&gt; Node --&gt; Edge</Styled.code></dd>
    </dl>

    <Styled.h3>Path sequence</Styled.h3>
    <p>A PathSequence is an ordered, lazy composition of Paths.
      The elements are composed pairwise to produce the final Path representation.
      The order of pairing is left-to-right. 
    </p>
    <dl>
      <dt><Styled.code>type PathSequence = List Path</Styled.code></dt>
      <dd><Styled.code>foldPath :: PathSequence --&gt; Path</Styled.code></dd>
    </dl>

    <Styled.h3>Graphs</Styled.h3>
    <p>The classic graph <Styled.code>𝔾 = (𝕍, 𝔼)</Styled.code> is derived from Paths.
    Both nodes and edges may occur multiple times within a path. The order of appearance
    within a Path represents a sort of additive history for the graph elements. 
    Record values and labels are merged forward.
    </p>
    <dl>
      <dt><Styled.code>type NodeSet = List Node</Styled.code></dt>
      <dd><Styled.code>nodes :: Path --&gt; List Node</Styled.code></dd>
    </dl>
    <dl>
      <dt><Styled.code>type EdgeSet = List Edge</Styled.code></dt>
      <dd><Styled.code>edges :: Path --&gt; List Edge</Styled.code></dd>
    </dl>
    <dl>
      <dt><Styled.code>{`type Graph = { nodes :: NodeSet, edges :: EdgeSet }`}</Styled.code></dt>
    </dl>

    
  
    <Styled.h2>Path Notation</Styled.h2>
    <p>Gram uses two complementary notations for paths:</p>
    <ol>
      <li>Cypher path: alternating nodes and edges</li>
      <li>Path composition: two paths composed into a new path</li>
    </ol>
    <p>Both notations use the following relations:</p>
    <ul>
      <li><Styled.code>{`<--`}</Styled.code> oriented to the left</li>
      <li><Styled.code>{`-->`}</Styled.code> oriented to the right</li>
      <li><Styled.code>——</Styled.code> oriented in either direction</li>
      <li><TeX>{`\\large{,}`}</TeX> pairwise association</li>
    </ul>
    <Styled.table>
      <tbody>
        <Styled.tr>
          <th></th><Styled.th>Empty</Styled.th><Styled.th>Node</Styled.th><Styled.th>Edge</Styled.th><Styled.th>Path</Styled.th>
        </Styled.tr>
        <Styled.tr>
          <Styled.th>Cypher path</Styled.th>
          <Styled.td><TeX> </TeX></Styled.td>
          <Styled.td><Styled.code>(n)</Styled.code></Styled.td>
          <Styled.td><Styled.code>(n1)-[e]-&gt;(n2)</Styled.code></Styled.td>
          <Styled.td><Styled.code>{`p = ()-->(),()<--()`}</Styled.code></Styled.td>
        </Styled.tr>
        <Styled.tr>
          <Styled.th>Path composition</Styled.th>
          <Styled.td><Styled.code>ø&nbsp;=&nbsp;[&nbsp;]</Styled.code></Styled.td>
          <Styled.td><Styled.code>{`[n ø ø]`}</Styled.code></Styled.td>
          <Styled.td><Styled.code>{`[e --> n1 n2]`}</Styled.code></Styled.td>
          <Styled.td><Styled.code>{`[p , p1 p2]`}</Styled.code></Styled.td>
        </Styled.tr>
      </tbody>
    </Styled.table>

    <p>Cypher path notation is easier to read.
      Path composition is harder to read. 
      The notation can be mixed to annotate information about a cypher path.
      These three notations are equivalent:
    </p>
    <Styled.table>
      <tbody>
        <Styled.tr>
          <Styled.th>Cypher path</Styled.th>
          <Styled.td><Styled.code>{`p = (n1)-[e1]->(n2)<-[e2]-(n3)`}</Styled.code></Styled.td>
        </Styled.tr>

        <Styled.tr>
          <Styled.th>Path composition</Styled.th>
          <Styled.td><Styled.code>{`[p [e1 --> n1 [e2 <-- n2 n3] ] ]`}</Styled.code></Styled.td>
        </Styled.tr>

        <Styled.tr>
          <Styled.th>Mixed notation</Styled.th>
          <Styled.td><Styled.code>{`[p (n1)-[e1]->(n2)<-[e2]-(n3)]`}</Styled.code></Styled.td>
        </Styled.tr>
      </tbody>
    </Styled.table>

  </Layout>
)

export default MathPage
