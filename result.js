import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
)

export default function ResultPage() {
  const [status, setStatus] = useState('Sending...')

  useEffect(() => {
    const insertData = async () => {
      const { data, error } = await supabase
        .from('symbols')
        .insert([
          {
            user_ref: 'test-user-123',  // Replace with real auth later
            planet: 'Mars',
            symbol: 'Silent Falcon',
            code: 'MARS-04-FALC',
            message: 'Move with clarity and fire today.'
          }
        ])

      if (error) {
        console.error('Insert failed:', error)
        setStatus('❌ Failed to save')
      } else {
        console.log('Inserted:', data)
        setStatus('✅ Saved to Supabase!')
      }
    }

    insertData()
  }, [])

  return (
    <div style={{ padding: '2rem', color: 'white', background: 'black', minHeight: '100vh' }}>
      <h1>Signal Sent</h1>
      <p>{status}</p>
    </div>
  )
}
