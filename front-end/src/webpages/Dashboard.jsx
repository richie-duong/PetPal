import { useEffect, useState } from 'react'
import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000'

function Dashboard() {
  const [message, setMessage] = useState('Checking backend...')

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/status/`)
      .then((response) => setMessage(response.data.message))
      .catch(() => setMessage('Backend is not connected yet.'))
  }, [])

  return (
    <main>
      <h1>Dashboard</h1>
      <p>{message}</p>
    </main>
  )
}

export default Dashboard
