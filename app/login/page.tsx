'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button, Form, Input } from 'antd';
import Image from 'next/legacy/image';
import logo from '@/assets/channels4_profile.jpg';

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const supabase = createClientComponentClient();

	const handleSignIn = async () => {
		setLoading(true);
		const res = await supabase.auth.signInWithPassword({
			email,
			password,
		});
		console.log("res", res.data, res.error)

		if (res.data.session?.access_token) {
			router.push('/');
			setEmail('');
			setPassword('');
		} else {
			window.alert('Email hoặc password không đúng. Xin mời thử lại!');
		}
		setLoading(false);
	};

	return (
		<main className="h-screen flex flex-col justify-center items-center " >
			<section className="border border-slate-300 shadow-md rounded-lg">
				<div className="bg-yellow-300">
					<div className="flex gap-4 items-center w-full">
						<Image alt="logo" src={logo} width={80} height={80} />
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl px-4">
							Bóng đá sức khỏe tối
						</h1>
					</div>
				</div>
				<div className="px-10">
					<h2 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mt-4">
						Login form
					</h2>

					<form className="max-w-sm mx-auto pt-4">
						<div className="mb-5">
							<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
							<input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required
								onChange={(e) => setEmail(e.target.value)} />
						</div>
						<div className="mb-5">
							<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
							<input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</form>
					<div className='flex justify-between pb-4'>
						<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleSignIn()}> Sign In</button>
						<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => router.push('/sign-up')}> Sign Up</button>
					</div>
				</div>
			</section>
		</main>
	);
}
