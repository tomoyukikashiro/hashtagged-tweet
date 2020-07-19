import dynamic from 'next/dynamic'
import { useContext } from 'react'
import Layout from '../components/Layout'
import { TagsContext } from '../contexts/TagsContext'
import NoSSR from 'react-no-ssr'

const TagSelectionForm = dynamic(
  () => import('../components/TagSelectionForm'),
  { ssr: false }
)

const getSharedInfo = () => {
  if(!process.browser) return {}
  const parsedUrl = new URL(window.location);
  return {
    title: parsedUrl.searchParams.get('title'),
    text: parsedUrl.searchParams.get('text'),
    url: parsedUrl.searchParams.get('url')
  }
}

export default function App() {
  const { tags, dispatch } = useContext(TagsContext)
  const deleteTag = tag => dispatch({ type: 'delete', tag })
  const addTag = (e) => {
    e.preventDefault()
    const element = e.target.newTag
    dispatch({type: 'add', tag: element.value})
    element.value = ''
  }
  const tweetWithTag = tags => {
    if(!tags.length) return
    const url = new URL('https://twitter.com/intent/tweet')
    url.searchParams.append('hashtags', tags.join(','))
    const sharedInfo = getSharedInfo()
    if (Object.values(sharedInfo).length) {
      url.searchParams.append('url', sharedInfo.text)
      url.searchParams.append('text', sharedInfo.title)
    }
    location.href = url.toString()
  }
  const sharedInfo = getSharedInfo()
  return (
    <Layout title="Tweet">
      <div className="container">
        <form onSubmit={addTag}>
          <fieldset>
            <label htmlFor="newTag">New Hashtag</label>
            <input type="text" placeholder="#twitter" name="newTag" id="newTag" />
            <div className="float-right">
              <button className="button button-primary">Add</button>
            </div>
          </fieldset>
        </form>
        <TagSelectionForm tags={tags} deleteTag={deleteTag} tweetWithTag={tweetWithTag} />
        <NoSSR>
          <details>
            <summary>Shared Info</summary>
            <table>
              <thead>
              <tr>
                <th>key</th>
                <th>value</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>title</td>
                <td>{sharedInfo.title}</td>
              </tr>
              <tr>
                <td>text</td>
                <td>{sharedInfo.text}</td>
              </tr>
              <tr>
                <td>url</td>
                <td>{sharedInfo.url}</td>
              </tr>
              </tbody>
            </table>
          </details>
        </NoSSR>
      </div>
      <style jsx>{`
        .container {
          padding-top: 7rem;
          max-width: 80rem;
        }
        @media(min-width: 40rem) {
          .container {
            padding-top: 3rem;
          }
        }
        .button {
          background-color: #1da1f2;
          border-color: #1da1f2;
        }
      `}</style>
    </Layout>
  )
}
