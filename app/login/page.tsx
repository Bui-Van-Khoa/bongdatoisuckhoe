'use client';

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input } from 'antd';
import Image from 'next/legacy/image'
import logo from '@/assets/channels4_profile.jpg'

export default function LoginPage() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const router = useRouter()
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const supabase = createClientComponentClient();

	useEffect(() => {
		async function getUser() {
			const { data: { user } } = await supabase.auth.getUser()
			setUser(user)
			setLoading(false)
		}

		getUser();
	}, [])


	const handleSignUp = async () => {
		const res = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${location.origin}/auth/callback`
			}
		})

    setUser(res?.data?.user)
		router.refresh();
		setEmail('')
		setPassword('')
	}

	const handleSignIn = async () => {
		const res = await supabase.auth.signInWithPassword({
			email,
			password
		})
		setUser(res.data.user)
		router.push("/");
		setEmail('')
		setPassword('')
	}

	const handleLogout = async () => {
		await supabase.auth.signOut();
		router.refresh();
		setUser(null)
	}


	if (loading) {
		return <h1>loading..</h1>
	}


	return (	
		<main className="h-screen flex flex-col justify-center items-center ">
			<section className="border border-slate-300 py-8 px-10 shadow-md rounded-lg">
				<div className="flex gap-4 items-center">
				<Image src={logo} width={80} height={80}/>
				<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">Bóng đá sức khỏe tối</h1>
				</div>
				<div>
					
					<Form
						name="basic"
						initialValues={{ remember: true }}
						layout="vertical"
						autoComplete="off"
						className="mt-2"
					>
						<Form.Item
							label="Email"
							name="email"
							rules={[{ required: true, message: 'Please input your Email!' }]}
						>
							<Input  onChange={(e) => setEmail(e.target.value)}/>
						</Form.Item>

						<Form.Item
							label="Password"
							name="password"
							rules={[{ required: true, message: 'Please input your password!' }]}
						>
							<Input.Password onChange={(e) => setPassword(e.target.value)}/>
						</Form.Item>

					<div className="flex justify-between">
					<Form.Item >
							<Button type="primary" htmlType="submit" className="bg-red-500"  onClick={handleSignIn}>
							Sign In
							</Button>
						</Form.Item>
						<Form.Item >
							<Button type="primary" htmlType="submit" className="bg-red-500"  onClick={handleSignUp}>
							Sign Up
							</Button>
						</Form.Item>
					</div>
					</Form>
				</div>

			</section>
			{/* <div>
        <input 
            type="email" 
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
        />
        <input 
            type="password" 
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            
        />
        <button 
            onClick={handleSignUp}
        >
            Sign Up
        </button>
        <button 
            onClick={handleSignIn}
        >
            Sign In
        </button>
        </div> */}
		</main>
	)

}