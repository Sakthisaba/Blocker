import {createClient} from '@supabase/supabase-js'
 const supabase = createClient(

    "https://ligraspvzbwakjvdralh.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpZ3Jhc3B2emJ3YWtqdmRyYWxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDg3OTY3MDksImV4cCI6MTk2NDM3MjcwOX0.mW0DGRYb_FhwS0kSrYW_Zpyhk3rjtTQqqwQIZaUR5-g"

)

export default supabase;
