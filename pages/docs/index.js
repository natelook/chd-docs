import groq from 'groq'
import Link from 'next/link'
import client from '../../client'
import Layout from '../../components/Layout'

export default function Docs({ posts }) {
  return (
    <Layout>
      <div className='container'>
        <h1>Docs</h1>
        {posts.map((post) => (
          <div>
            <Link href={`docs/${post.slug.current}`}>
              <a>{post.title}</a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
    *[_type == 'post'] {
      title,
      slug
    }
  `)

  return { props: { posts } }
}
