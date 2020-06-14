import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import TeX from '@matejmazur/react-katex';

const MathPage = () => (
  <Layout>
    <SEO title="Gram Math" />
    <h1>Gram Path Math</h1>

    <h2>Path Elements</h2>
    <table>
      <tr>
        <th></th><th>Unit</th><th>Node</th><th>Edge</th><th>Path</th>
      </tr>
      <tr>
        <th><TeX>𝕌 = \lbrace n, e, p \rbrace</TeX></th>
        <td><TeX>\empty </TeX></td>
        <td><TeX>n \isin ℕ</TeX></td>
        <td><TeX>e \isin 𝔼</TeX></td>
        <td><TeX>p \isin ℙ</TeX></td>
      </tr>
      <tr>
        <th>Path Notation</th>
        <td><TeX>[ ] \equiv \empty </TeX></td>
        <td><TeX>[n]</TeX></td>
        <td><TeX>[e] \equiv [e [n,n']]</TeX></td>
        <td><TeX>[p] \equiv [p  [ 𝕌 ] ] \equiv [p [𝕌, 𝕌']]</TeX></td>
      </tr>
      <tr>
        <th>Gram Notation</th>
        <td><TeX>[ ] </TeX></td>
        <td><TeX>(n)</TeX></td>
        <td><TeX>(n)-[e]-(n')</TeX></td>
        <td><TeX>{`[p] \\\\
        [p (n)]\\\\
        [p ()-[e]-()]`}</TeX></td>
      </tr>
      <tr>
        <th>Relation Operators <br/>
        <TeX>{`\\sim = \\lbrace \\leftarrow, \\rightarrow, ––, \\huge{,}\\normalsize\\rbrace `}</TeX></th>
        <td></td>
        <td></td>
        <td><TeX>{`\\text{\\footnotesize{\\textquotedblleft left\\textquotedblright}} \\leftarrow \\\\
        \\text{\\footnotesize{\\textquotedblleft right\\textquotedblright}} \\rightarrow \\\\
        \\text{\\footnotesize{\\textquotedblleft either\\textquotedblright}} ––
        `}</TeX></td>
        <td><TeX>{`\\text{\\footnotesize{\\textquotedblleft left\\textquotedblright}} \\leftarrow \\\\
        \\text{\\footnotesize{\\textquotedblleft right\\textquotedblright}} \\rightarrow \\\\
        \\text{\\footnotesize{\\textquotedblleft either\\textquotedblright}} –– \\\\
        \\text{\\footnotesize{\\textquotedblleft pair\\textquotedblright}} \\huge{,}\\normalsize
        `}</TeX></td>
      </tr>
    </table>

    <h2>Path Composition</h2>
    <table>
      <tr>
        <td></td><th>Unit</th><th>Node</th><th>Edge</th><th>Path</th>
      </tr>
      <tr>
        <th>Unit</th>
        <td><TeX>\empty \sim \empty \equiv \empty</TeX></td>
        <td><TeX>\empty \sim [n] \equiv [n]</TeX></td>
        <td><TeX>\empty \sim [e] \equiv [e]</TeX></td>
        <td><TeX>\empty \sim [p] \equiv [p]</TeX></td>
      </tr>
      <tr>
        <th>Node</th>
        <td><TeX>[n] \sim \empty \equiv [n]</TeX></td>
        <td><TeX>[n] \sim [n] \equiv [e]</TeX></td>
        <td><TeX>[n] \sim [e] \equiv [p]</TeX></td>
        <td><TeX>[n] \sim [p] \equiv [p']</TeX></td>
      </tr>
      <tr>
        <th>Edge</th>
        <td><TeX>[e] \sim \empty \equiv [e]</TeX></td>
        <td><TeX>[e] \sim [n] \equiv [p]</TeX></td>
        <td><TeX>[e] \sim [e] \equiv [e]</TeX></td>
        <td><TeX>[e] \sim [p] \equiv [p]</TeX></td>
      </tr>
    </table>

  </Layout>
)

export default MathPage
