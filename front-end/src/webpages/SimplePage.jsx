import { Link } from 'react-router-dom'

function SimplePage({ title }) {
  return (
    <main>
      <h1>{title}</h1>
      <p>YEEHAW THE PAGES WORK</p>
      <Link to="/dashboard">Back to Dashboard</Link>
    </main>
  )
}

export default SimplePage
