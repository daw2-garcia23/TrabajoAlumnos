import { createClient } from '@supabase/supabase-js'
//Creando la conexión con supabase
const supabaseUrl = 'https://rydghkcdscemqxjusruu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5ZGdoa2Nkc2NlbXF4anVzcnV1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NzE3NjYzMSwiZXhwIjoxOTkyNzUyNjMxfQ.ktRYpCcypihoa31VbsrE4meIb_XPd36JfDYfJHeRifU'

//exportamos la conexión
export const supabase = createClient(supabaseUrl, supabaseKey)
