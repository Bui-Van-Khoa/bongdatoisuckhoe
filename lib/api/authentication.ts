import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
const supabase = createClientComponentClient();

export async function signOut() {
  const data = await supabase.auth.signOut();
  if (!data.error) return true;
  return false;
}

export async function checkLogin() {
	const { data: { user } } = await supabase.auth.getUser();
	return user
}

