import IconClose from '../components/IconClose'

const TagItem = ({tag, deleteTag}) => {
  return (
    <div className="flex-row align-items-center">
      <input className="mb-0" type="checkbox" id={tag} value={tag} name="tag"/>
      <label className="mb-0 ml-a label-inline" htmlFor={tag}><strong>#{tag}</strong></label>
      <button className="button button-icon" type="button" onClick={() => deleteTag(tag)}>
        <IconClose />
      </button>
    </div>
  )
}

export default function TagSelectionForm({ tags, deleteTag, tweetWithTag }) {
  const submit = e => {
    e.preventDefault()
    const selected = e.target.querySelectorAll('[name=tag]:checked')
    const tags = Array.from(selected, element => element.value)
    tweetWithTag(tags)
  }
  return (
    <form onSubmit={submit}>
      <fieldset>
        <ul>
          {tags.map(tag => (
            <li key={tag} className="list-unstyled p-y-1">
              <TagItem tag={tag} deleteTag={deleteTag} />
            </li>
          ))}
        </ul>
        <div className="float-right">
          <button className="button button-primary">Tweet</button>
        </div>
      </fieldset>
      <style jsx>{`
        .button {
          background-color: #1da1f2;
          border-color: #1da1f2;
        }
      `}</style>
    </form>
  )
}
