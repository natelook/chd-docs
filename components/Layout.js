import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link
          rel='stylesheet'
          href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
          integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
          crossorigin='anonymous'
        />
      </Head>
      <nav className='nav justify-content-start container'>
        <div class='nav-item'>
          <Link href='/docs'>
            <a class='nav-link active'>Docs</a>
          </Link>
        </div>
      </nav>
      {children}
    </div>
  )
}
