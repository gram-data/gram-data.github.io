import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import { Styled } from 'theme-ui'
import { OutboundLink } from "gatsby-plugin-google-analytics";

const EvolutionPage = () => (
  <Layout>
    <SEO title="Data Evolution" />
    <Styled.h1>Data Evolution</Styled.h1>
    <p>Data starts small and simple. 
    </p>
    <Styled.h2>1. Just a record</Styled.h2>
    
    <Styled.pre>
{`// a record with one field
({name:'Bartosz Milewski'})`}</Styled.pre>

    <Styled.h3>1a. Add some detail</Styled.h3>
    <p>
    </p>
    <Styled.pre>
{`
({  name:'Bartosz Milewski',
    social: {
      about:   'https://bartoszmilewski.com',
      twitter: 'https://twitter.com/BartoszMilewski'
    },
    books: [
      {"Category Theory for Programmers":"https://www.blurb.com/b/9621951"}
    ]
}) 
`}
    </Styled.pre>

    <Styled.h2>2. Two records makes a pair</Styled.h2>
    <dl>
      <dt><Styled.code>// two records</Styled.code></dt>
      <dd><Styled.code>{`({name:'Bartosz Milewski'}) ({title:'Category Theory for Programmers'})`}</Styled.code></dd>
    </dl>
    <p>How are these two records related? There's no direct relationship but they are part of our
      collection of names. More specifically they're in a sequence of records, which means they 
      are ordered: "Bartosz Milewski" then "Category Theory for Programmers". 
    </p>
    <Styled.h3>3a. Apply a label</Styled.h3>
    <p>There are other clues about how these records are related. Each has a name field, 
      which <i>could</i> mean that we've got a pair of cats. They're certainly cool cats. 
    </p>
    <p>Despite what <OutboundLink href="https://www.goodreads.com/quotes/24012-once-you-label-me-you-negate-me">sad Danes may say</OutboundLink>, Labels 
    are a way to associate things that are similar, affirming their commonality without limiting their individual qualities.
    </p>
    <dl>
      <dt><Styled.code>// two records of names</Styled.code></dt>
      <dd><Styled.code>{`(:Person {name:'Bartosz Milewski'}) (:Person {name:'Manuel Lima'})`}</Styled.code></dd>
    </dl>
    <Styled.h3>2b. Add some detail</Styled.h3>
    <p>
    </p>
    <Styled.pre>
{`
(:Person {  name:'Bartosz Milewski',
            social: {
              about:   'https://bartoszmilewski.com',
              twitter: 'https://twitter.com/BartoszMilewski'
            },
            books: [
              {"Category Theory for Programmers":"https://www.blurb.com/b/9621951"}
            ]
         }
) 
(:Person {  name:'Manuel Lima',
            social: {
              about:   'https://www.mslima.com',
              twitter: 'https://twitter.com/mslima'
            },
            books: [
              {"Book of Circles":"https://twitter.com/bookofcircles"}
            ]
         }
)
`}
    </Styled.pre>

  </Layout>
)

export default EvolutionPage
