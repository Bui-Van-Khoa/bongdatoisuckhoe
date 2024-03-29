'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/legacy/image';
import logo from '@/assets/channels4_profile.jpg';
import { Button } from 'flowbite-react';

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();
	const [loading, setLoading] = useState(false)

	const supabase = createClientComponentClient();

	const handleSignUp = async () => {
		setLoading(true);
		const { data, error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${location.origin}/auth/callback`,
			},
		});
		if (data.user) {
			if (
				window.confirm(
					'Bạn đã đăng ký thành công. Xin mời kiểm tra email để xác thực tài khoản trước khi đăng nhập!',
				)
			) {
				setEmail('');
				setPassword('');
			}
		} else {
			window.alert(error?.message);
		}
		setLoading(false);
		router.refresh();
	};

	return (
		<main className="h-screen flex flex-col justify-center items-center ">
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
						Register form
					</h2>

					<form className="max-w-sm mx-auto pt-4">
						<div className="mb-5">
							<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
							<input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required
								onChange={(e) => setEmail(e.target.value)} />
						</div>
						<div className="mb-5">
							<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
							<input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password'
							/>
						</div>
					</form>
					<div className='flex justify-between pb-4'>
						<Button size="sm" isProcessing={loading} onClick={() => handleSignUp()}>Register</Button>
						<Button size="sm" onClick={() => router.push('/login')}> Back to Login</Button>
					</div>
				</div>
			</section>
		</main>
	);
}
