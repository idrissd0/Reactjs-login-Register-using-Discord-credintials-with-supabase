// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mmjkmhszoexogrecrcuj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tamttaHN6b2V4b2dyZWNyY3VqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc5MDYyMzUsImV4cCI6MjAxMzQ4MjIzNX0.hIIIFq5gj4qQBcaSdgIVWnnNt-YlO_oHfrfTMcoxwQA';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
