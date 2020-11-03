import groq from 'groq'
import BlockContent from '@sanity/block-content-to-react'
import Layout from '../../components/Layout'
import client from '../../client'

const query = groq`
  *[_type == "post" && slug.current == $slug]
`

export default function Docs({ post }) {
  return (
    <Layout>
      <div className='container'>
        <h1>{post.title}</h1>
        <BlockContent blocks={post.body} />
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = await client.fetch(groq`
    *[_type == "post"] {
      slug {
        current
      }
    }
  `)

  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const { slug = '' } = context.params
  const post = await client.fetch(query, { slug })

  return { props: { post: post[0] } }
}
