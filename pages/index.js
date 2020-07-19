import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title="Home">
      <header className="header" id="home">
        <section className="container">
          <svg className="img" role="img" xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 24 24" aria-labelledby="hashIconTitle" stroke="#1da1f2" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#1da1f2">
            <path d="M11 3L5 21M19 3L13 21M3 16L19 16M5 8L21 8"/>
          </svg>
          <h1 className="title">Hashtagged Tweet</h1>
          <p className="description" data-version="Currently">Tweet with favorite hashtags.</p>
          <Link href="/app/">
            <a className="button">Getting Started</a>
          </Link>
        </section>
      </header>
      <section className="container">
        <div className="media">
          <div className="text">
            <h3>Save Hashtags</h3>
            <p>よく使うハッシュタグを保存します</p>
          </div>
          <img src="https://i.gyazo.com/6fc699878901a552b19d26891765e942.png" width="200" height="216" alt=""/>
        </div>
      </section>
      <section className="container">
        <div className="media reverse">
          <div className="text">
            <h3>Share URL with App</h3>
            <p>シェアするとき、このアプリを指定します</p>
          </div>
          <img src="https://i.gyazo.com/8e94a1853f2b6a0b603fc18349635dba.png" width="200" height="295" alt=""/>
        </div>
      </section>
      <section className="container">
        <div className="media">
          <div className="text">
            <h3>Share with Hashtags</h3>
            <p>タグを選択してシェアすることができます</p>
          </div>
          <img src="https://i.gyazo.com/691779f272fb73274be62b793e318305.png" width="200" height="318" alt=""/>
        </div>
      </section>
      <footer>
        <p><i>Tomoyuki kashiro all right reserved.</i></p>
      </footer>
      <style jsx>{`
        section.container {
          padding-bottom: 7.5rem;
          padding-top: 7.5rem;
          max-width: 80rem;
        }

        .media {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .media .text {
          text-align:center;
        }
        .media img {
          border: 1px solid #ccc;
        }
        
        @media (min-width: 40rem) {
          .media {
            justify-content: center;
          }
          .media:not(.reverse) {
            flex-direction: row;
          }
          .media:not(.reverse) .text {
            margin-right: 5rem;
          }
          .media.reverse {
            flex-direction: row-reverse;
          }
          .media.reverse img {
            margin-right: 5rem;
          }
        }
        
        footer {
          text-align:center;
          padding-top: 8rem;
          padding-bottom: 5rem;
        }
        
        .header {
          background-color: #f4f5f6;
        }
        .header + section {
          border-top: 0;
        }
        .header .container {
          border-top: 0;
          padding-bottom: 7.5rem;
          padding-top: 7.5rem;
          position: relative;
          text-align: center;
        }
        .header .img {
           margin-bottom: 2rem;
        }
        .header .title {
          font-family: Gotham Rounded A,Gotham Rounded B,Helvetica Neue,Arial,sans-serif;
        }
        .header .button {
          margin-bottom: 4rem;
          margin-top: 2rem;
          background-color: #1da1f2;
          border-color: #1da1f2;
        }
      `}</style>
    </Layout>
  )
}
