// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const ref = React.useRef()
  const [error, setError] = React.useState(null)

  const handleChange = event => {
    const username = event.target.value
    const isValid = username === username.toLowerCase()

    setError(isValid ? null : 'Username must be lower case')
  }

  // 🐨 add a submit event handler here (`handleSubmit`).
  const handleSubmit = event => {
    event.preventDefault()

    const userName = ref.current.value
    onSubmitUsername(userName)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input ref={ref} id="username" type="text" onChange={handleChange} />
      </div>
      <button type="submit" disabled={error}>
        Submit
      </button>
      {error && <p role="alert">{error}</p>}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
