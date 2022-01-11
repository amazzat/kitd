import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "utils/supabaseClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (supabase) {
    const { data } = await supabase?.from("dictionary").select();
    res.status(200);
    res.json(JSON.stringify(data));
    res.end();
  } else {
    res.status(500);
    res.end();
  }
}
