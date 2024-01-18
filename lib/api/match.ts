import supabase from './index';

export async function getNextMatch() {
  const { data, error } = await supabase.from('next-match').select();
  return data;
}

export async function loadHeaderImage() {
  const { data } = await supabase.storage.from('logo').getPublicUrl('logo.jpg');
  const imageUrl = data.publicUrl;
  return imageUrl;
}

export async function insertAttendedMember(data: any) {
  const { error } = await supabase.from('attended-members').insert(data);
  return error;
}

export async function removeAttendedMember(data: any) {
  const { error } = await supabase
    .from('attended-members')
    .delete()
    .eq('email', data);
  return error;
}

export async function checkIfUserRegisterCompete(email: any) {
  const { data, error } = await supabase
    .from('attended-members')
    .select()
    .eq('email', email);
  if (data!.length > 0) {
    return true;
  }
  return false;
}

export async function getAttendedMember() {
  const { data, error } = await supabase.from('attended-members').select(`
    id, email,
    accounts (
      user_name, 
			position,
			number
    )
  `);
  return data;
}
