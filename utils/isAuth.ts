
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
const supabase = createClientComponentClient();

let isCheck;
export async function getUser() {
	const { data } = await supabase.auth.getUser()
	if(data) isCheck = true
	else isCheck = false

	return isCheck;
}

export const isAuthenticated = getUser();