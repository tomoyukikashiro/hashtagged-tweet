import Head from 'next/head'
import MetaSocial from './MetaSocial'

export default function Layout({ title, children }) {
  return (
    <main className="wrapper">
      <Head>
        <title>{title} | Hashtagged Tweet</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.0/milligram.css" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <MetaSocial />
      </Head>
      <nav className="navigation">
        <section className="container">
          <a className="navigation-title" href="/">
            <svg className="img" role="img" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" aria-labelledby="hashIconTitle" stroke="#1da1f2" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#1da1f2">
              <path d="M11 3L5 21M19 3L13 21M3 16L19 16M5 8L21 8"/>
            </svg>
            <h1 className="title">
              Hashtagged Tweet
            </h1>
          </a>
          <a href="https://github.com/tomoyukikashiro/hashtagged-tweet" rel="noopener" target="_blank" title="hashtagged tweet">
            <svg className="octocat" viewBox="0 0 250 250">
              <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
              <path className="octocat-arm" d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"></path>
              <path className="octocat-body" d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"></path>
            </svg>
          </a>
        </section>
      </nav>
      <div className="contents">
        {children}
      </div>
      <style jsx>{`
        .wrapper {
          display: block;
          overflow: hidden;
          position: relative;
          width: 100%
        }
        .wrapper .container {
          max-width: 80rem
        }
        .wrapper > .container {
          padding-bottom: 7.5rem;
          padding-top: 7.5rem
        }

        .navigation {
          background: #f4f5f6;
          border-bottom: .1rem solid #d1d1d1;
          display: block;
          height: 5.2rem;
          left: 0;
          max-width: 100%;
          position: fixed;
          right: 0;
          top: 0;
          width: 100%;
          z-index: 1
        }
        
        .navigation .container {
          padding-bottom: 0;
          padding-top: 0;
          height: 100%;
        }
        
        .navigation .navigation-title {
          display: flex;
          align-items: center;
          height: 100%;
        }

        .navigation .navigation-title > .img {
          margin-right: 10px;
        }
        
        .navigation .title {
          color: #606c76;
          font-family: Gotham Rounded A,Gotham Rounded B,Helvetica Neue,Arial,sans-serif;
          position: relative
        }
        
        .navigation .title {
          font-size: 1.6rem;
          padding: 0;
          text-decoration: none;
          margin-bottom: 0;
        }
        
        .contents {
          padding-top: 1rem;
        }
        @media(min-width: 40rem) {
          .contents {
            padding-top:5rem;
          }
        }
        
        .octocat {
          border: 0;
          fill: #000;
          height: 5.2rem;
          position: fixed;
          right: 0;
          top: 0;
          width: 5.2rem;
          z-index: 1
        }
        
        .octocat .octocat-arm, 
        .octocat .octocat-body {
          fill: #f4f5f6;
        }
      `}</style>
    </main>
  )
}
