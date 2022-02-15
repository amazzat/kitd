import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "utils/supabaseClient";

const dictionaryHandler = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const { data } = await supabase.from("sozdik").select();
  response.json(JSON.stringify(data));
  response.end();
};

export default dictionaryHandler;
