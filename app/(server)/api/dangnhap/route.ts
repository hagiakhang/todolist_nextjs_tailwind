import { supabase } from '@/lib/supabaseClient'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const { email, password } = req.body
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) return res.status(400).json({ error: error.message })
  return res.status(200).json({ message: 'Login successful', session: data.session })
}
