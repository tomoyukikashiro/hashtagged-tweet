import '../styles.css'
import App from 'next/app'
import { TagsProvider } from '../contexts/TagsContext'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <TagsProvider>
        <Component {...pageProps} />
      </TagsProvider>
    )
  }

}

