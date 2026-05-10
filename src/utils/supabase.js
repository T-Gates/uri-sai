import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://qnowncbllepecruubuhh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFub3duY2JsbGVwZWNydXVidWhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxNzQyMTAsImV4cCI6MjA5Mzc1MDIxMH0.Qa5fPwU56zw8vDGUp1py96BmftjpZM2ldLJJ88NCmzo'
);
