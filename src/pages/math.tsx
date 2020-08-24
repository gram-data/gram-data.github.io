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
    <p>Gram structures data as <a href="https://neo4j.com/developer/graph-database/">property graph</a> paths.
    What are the formal semantics of composing a graph? Let's start with the types of the things...
    </p>
    <Styled.h2>Type Definitions</Styled.h2>
    <p>The notation here borrows from Purescript.</p>
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
    <p>A PathSequence is a Path-like lazy composition of Paths represented as a list.
      The list elements should be composed pairwise to produce the final Path representation.
      The order of pairing is left-to-right. 
    </p>
    <dl>
      <dt><Styled.code>type PathSequence = List Path</Styled.code></dt>
    </dl>

    <Styled.h3>Graphs</Styled.h3>
    <p>The classic graph <Styled.code>𝔾 = (𝕍, 𝔼)</Styled.code> is derived from Paths.
    Both nodes and edges may occur multiple times within a path. The order of appearance
    within a PathSequence and then individual paths represents a sort of additive history
    for the graph elements. Record values and labels are merged forward 
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

    
  
    <Styled.h2>Path Elements</Styled.h2>
    <Styled.table>
      <tbody>
        <Styled.tr>
          <th></th><Styled.th>Empty</Styled.th><Styled.th>Node</Styled.th><Styled.th>Edge</Styled.th><Styled.th>Path</Styled.th>
        </Styled.tr>
        <Styled.tr>
          <Styled.th><TeX>𝕌 = \lbrace n, e, p \rbrace</TeX></Styled.th>
          <Styled.td><TeX>\empty </TeX></Styled.td>
          <Styled.td><TeX>n \isin ℕ</TeX></Styled.td>
          <Styled.td><TeX>e \isin 𝔼</TeX></Styled.td>
          <Styled.td><TeX>p \isin ℙ</TeX></Styled.td>
        </Styled.tr>
        <Styled.tr>
          <Styled.th>Path Notation</Styled.th>
          <Styled.td><TeX>[ ] \equiv \empty </TeX></Styled.td>
          <Styled.td><TeX>[n]</TeX></Styled.td>
          <Styled.td><TeX>[e] \equiv [e [n,n']]</TeX></Styled.td>
          <Styled.td><TeX>[p] \equiv [p  [ 𝕌 ] ] \equiv [p [𝕌, 𝕌']]</TeX></Styled.td>
        </Styled.tr>
        <Styled.tr>
          <Styled.th>Gram Notation</Styled.th>
          <Styled.td><TeX>[ ] </TeX></Styled.td>
          <Styled.td><TeX>(n)</TeX></Styled.td>
          <Styled.td><TeX>{`(n)\\text{--}[e]\\text{--}(n')`}</TeX></Styled.td>
          <Styled.td><TeX>{`[p] \\\\
          [p (n)]\\\\
          [p ()-[e]-()]`}</TeX></Styled.td>
        </Styled.tr>
        <Styled.tr>
          <Styled.th>Relation Operators <br/>
          <TeX>{`\\sim = \\lbrace \\leftarrow, \\rightarrow, \\text{---}, \\huge{,}\\normalsize\\rbrace `}</TeX></Styled.th>
          <Styled.td></Styled.td>
          <Styled.td></Styled.td>
          <Styled.td><TeX>{`\\text{\\footnotesize{\\textquotedblleft left\\textquotedblright}} \\leftarrow \\\\
          \\text{\\footnotesize{\\textquotedblleft right\\textquotedblright}} \\rightarrow \\\\
          \\text{\\footnotesize{\\textquotedblleft either\\textquotedblright}} \\text{---}
          `}</TeX></Styled.td>
          <Styled.td><TeX>{`\\text{\\footnotesize{\\textquotedblleft left\\textquotedblright}} \\leftarrow \\\\
          \\text{\\footnotesize{\\textquotedblleft right\\textquotedblright}} \\rightarrow \\\\
          \\text{\\footnotesize{\\textquotedblleft either\\textquotedblright}} \\text{---} \\\\
          \\text{\\footnotesize{\\textquotedblleft pair\\textquotedblright}} \\huge{,}\\normalsize
          `}</TeX></Styled.td>
        </Styled.tr>
      </tbody>
    </Styled.table>

    <Styled.h2>Path Composition</Styled.h2>
    <table>
      <tbody>
        <tr>
          <td></td><Styled.th>Empty</Styled.th><Styled.th>Node</Styled.th><Styled.th>Edge</Styled.th><Styled.th>Path</Styled.th>
        </tr>
        <tr>
          <Styled.th>Empty</Styled.th>
          <Styled.td><TeX>\empty \sim \empty \equiv \empty</TeX></Styled.td>
          <Styled.td><TeX>\empty \sim [n] \equiv [n]</TeX></Styled.td>
          <Styled.td><TeX>\empty \sim [e] \equiv [e]</TeX></Styled.td>
          <Styled.td><TeX>\empty \sim [p] \equiv [p]</TeX></Styled.td>
        </tr>
        <tr>
          <Styled.th>Node</Styled.th>
          <Styled.td><TeX>[n] \sim \empty \equiv [n]</TeX></Styled.td>
          <Styled.td><TeX>[n] \sim [n] \equiv [e]</TeX></Styled.td>
          <Styled.td><TeX>[n] \sim [e] \equiv [p]</TeX></Styled.td>
          <Styled.td><TeX>[n] \sim [p] \equiv [p']</TeX></Styled.td>
        </tr>
        <tr>
          <Styled.th>Edge</Styled.th>
          <Styled.td><TeX>[e] \sim \empty \equiv [e]</TeX></Styled.td>
          <Styled.td><TeX>[e] \sim [n] \equiv [p]</TeX></Styled.td>
          <Styled.td><TeX>[e] \sim [e] \equiv [e]</TeX></Styled.td>
          <Styled.td><TeX>[e] \sim [p] \equiv [p]</TeX></Styled.td>
        </tr>
      </tbody>
    </table>

  </Layout>
)

export default MathPage
