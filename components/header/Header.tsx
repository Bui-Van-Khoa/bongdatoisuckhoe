'use client'

import Image from 'next/legacy/image'
import React, { useEffect, useState } from 'react'
import logo from '@/assets/channels4_profile.jpg'
import { Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { getUser } from '@/lib/fetchData/users'
import { navMenu } from './headerData'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { HeaderStyled } from './StyledHeader'
import Link from 'next/link';


const Header = () => {

	const [user, setUser] = useState({});
	const [show, setShow] = useState(false);
	const [shouldRender, setRender] = useState(false);
	const [username, setUserName] = useState(" ")

	useEffect(() => {
		async function getUserInformation() {
			const user = await getUser();
			setUser(user)
			setUserName(user?.email.match(/^([^@]*)@/)[1]);
		}
		getUserInformation();
	}, [])

	useEffect(() => {
		if (show) setRender(true);
	}, [show]);

	const onAnimationEnd = () => {
		if (!show) setRender(false);
	};

	return (
		<HeaderStyled className='relative'>
			<div className='flex justify-between bg-amber-200 px-3 sm:px-10 items-center' >
				<div className='flex items-center gap-4 '>
					<Image src={logo} width={80} height={80} />
					{/* <p>Bóng đá sức khỏe tối Football club</p> */}
				</div>
				<div className='hidden sm:flex justify-center items-center gap-2'>
					<Avatar size="large" icon={<UserOutlined />} />
					<p>Hi, {username}</p>
				</div>
				<div className="block sm:hidden ">
					<Button
						className="border-0"
						icon={<MenuOutlined />}
						onClick={() => setShow(!show)}
					></Button>
				</div>
			</div>
			<div className='bg-amber-300  px-3 sm:px-10 hidden sm:block py-3'>
				<ul className='flex md:gap-8 gap-4'>
					{Object.values(navMenu).map((item, index) => (
						<li key={index} className='text-lg font-medium hover:text-blue-800'> 
							<Link href={item.link}>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
			</div>

			{/* mobile menu */}
			<div>
				{shouldRender &&
					<div
						className={`bg-white h-screen w-screen flex justify-between px-10 py-6 absolute top-0  ${show ? 'mountedStyle' : 'unMountedStyle'}`}
						onAnimationEnd={onAnimationEnd}
					>
						<div className=''>
							<div className='flex gap-3 items-center pb-4'>
								<Avatar size="large" icon={<UserOutlined />} />
								<p>Hi, {username}</p>
							</div>
							<ul>
								{Object.values(navMenu).map((item, index) => (
									<li key={index} className='pb-4 text-lg font-medium'> {item}</li>
								))}
							</ul>
						</div>
						<div>
							<Button
								className="border-0"
								icon={<CloseOutlined />}
								onClick={() => setShow(!show)}
							/>
						</div>
					</div>
				}
			</div>

		</HeaderStyled>
	)
}

export default Header