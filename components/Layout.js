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
      <nav className='nav navbar navbar-dark bg-dark justify-content-start'>
        <div className='container'>
          <div class='nav-item'>
            <Link href='/docs'>
              <a class='nav-link active' style={{ color: '#fff' }}>
                Docs
              </a>
            </Link>
          </div>
        </div>
      </nav>
      {children}
    </div>
  )
}
