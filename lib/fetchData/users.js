import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
const supabase = createClientComponentClient();

export async function getUser() {
	const { data: { user } } = await supabase.auth.getUser()
  return user;
}

export async function testApi (email) {
	const { error } = await supabase.auth.signIn({ email })
	console.log("error", error)
}
