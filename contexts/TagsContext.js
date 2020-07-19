import React, {useReducer, useEffect} from 'react'

const STORAGE_KEY = 'hashtagged-tweet'
const initialState = []
const TagsContext = React.createContext(initialState)

const reducer = (tags, action) => {
  const { type, tag: paramTag } = action
  if(type === 'add') {
    const withoutHash = paramTag.replace('#', '')
    return tags.find(tag => tag === withoutHash) ? [...tags] : [...tags, withoutHash]
  } else if (type === 'delete') {
    return tags.filter(tag => tag !== paramTag)
  }
}

const TagsProvider = ({children}) => {
  const [tags, dispatch] = useReducer(reducer, initialState, () => {
    const localState = process.browser ? localStorage.getItem(STORAGE_KEY) : null
    return localState ? JSON.parse(localState) : initialState
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tags))
  }, [tags])

  return (
    <TagsContext.Provider value={{ tags, dispatch }}>
      {children}
    </TagsContext.Provider>
  )
}

export {
  STORAGE_KEY,
  TagsContext,
  TagsProvider
}
