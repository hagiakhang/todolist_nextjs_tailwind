import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eftkjkofysaumhtdtdfb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmdGtqa29meXNhdW1odGR0ZGZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyNzY0MDEsImV4cCI6MjA2NDg1MjQwMX0.nrSGw60gIsOProfD1zjR6HzyHkqWVxldnX117eglI58'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
