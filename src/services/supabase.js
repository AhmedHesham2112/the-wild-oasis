import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dgoyogwocyealxkeeiwv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnb3lvZ3dvY3llYWx4a2VlaXd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyNzg2NzIsImV4cCI6MjA2Mzg1NDY3Mn0.ohPBBK4nmHEuIHRgxGcbBXrxQQF-5R8TyDcflmGC1dw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
