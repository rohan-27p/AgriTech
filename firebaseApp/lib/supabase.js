import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = `https://fzbtaueiipbdnzzyuvsm.supabase.co`
const supabaseAnonKey =`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6YnRhdWVpaXBiZG56enl1dnNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2ODUxMzYsImV4cCI6MjA1MDI2MTEzNn0.VYOYEMvntwWynqR52u7d52bKyazI3yJR3ZiqAaMuYcg`

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
