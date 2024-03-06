import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
const supabase = createClientComponentClient();

export async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

export async function checkIfUserInAccount(email: any) {
  const { data, error } = await supabase
    .from('accounts')
    .select()
    .eq('email', email);
  if (data!.length > 0) {
    return true;
  }
  return false;
}

export async function insertUserToAccount(data: any) {
  const { error } = await supabase.from('accounts').insert(data);
}

export async function getAllUser() {
  const { data, error } = await supabase.from('accounts').select();
  return data;
}

export async function getUserDetail(id:any) {
	const { data } = await supabase.from('accounts').select();
  return data;
}

export async function insertUserFault(data:any) {
	const { error } = await supabase.from('list_of_penalties').insert(data);
}