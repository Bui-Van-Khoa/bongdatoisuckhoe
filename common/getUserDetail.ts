export const getUserDetail = (cookieName = 'user') =>{
	let cookie:any = {};
	if (typeof document !== 'undefined'){

		document?.cookie.split(';').forEach(function(el) {
			let [key,value] = el.split('=');
			cookie[key.trim()] = value;
		})

		const userDetail = decodeURIComponent(cookie[cookieName])
		return JSON.parse(userDetail);
	}

}