'use client';

import Image from 'next/legacy/image';
import React, { useEffect, useState } from 'react';
import logo from '@/assets/channels4_profile.jpg';
import { Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { getUser } from '@/lib/api/users';
import { navMenu } from './headerData';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { HeaderStyled } from './StyledHeader';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import LoadingComponent from '../LoadingComponent';
import { signOut } from '@/lib/api/authentication';
import { getUserDetail } from '@/common/getUserDetail';


const Header: React.FC = () => {
	const [show, setShow] = useState(false);
	const [shouldRender, setRender] = useState(false);
	const [username, setUserName] = useState(' ');
	const [isShowHeader, setIsShowHeader] = useState(true);
	const [isLoading, setIsLoading] = useState(true);

	const pathName = usePathname();

	const router = useRouter();

	useEffect(() => {
		async function getUserInformation() {
			const user: any = getUserDetail();
			setUserName(user?.user_name);
		}
		if (pathName === '/login' || pathName === '/sign-up') {
			setIsShowHeader(true);
		} else {
			setIsShowHeader(false);
			getUserInformation();
		}
		setIsLoading(false);
	}, [pathName]);

	useEffect(() => {
		if (show) setRender(true);
	}, [show]);

	const onAnimationEnd = () => {
		if (!show) setRender(false);
	};

	const handleSignOut = async () => {
		const isSignOut = await signOut();
		if (isSignOut) {
			router.push('/login');
			return;
		}
		window.alert('Đăng xuất không thành công!');
	};

	return (
		<>
			{isLoading ? (
				<LoadingComponent />
			) : (
				<HeaderStyled
					className={`relative ${isShowHeader ? 'hidden' : 'block'}`}
				>
					<div className="flex justify-between bg-amber-200 px-3 pt-3 sm:px-10 items-center">
						<div className="flex items-center gap-4 ">
							<Image src={logo} width={80} height={80} />
							<p className="text-blue-900 text-3xl font-medium">
								Bóng đá sức khỏe tối Football club
							</p>
						</div>
						<div className="flex flex-col gap-2">
							<div className="hidden sm:flex justify-center items-center gap-2">
								<Avatar size="large" icon={<UserOutlined />} />
								<p>Hi, {username}</p>
							</div>
							<Button
								className="border-0 bg-blue-500 hover:text-blue-800"
								onClick={() => handleSignOut()}
							>
								Đăng xuất
							</Button>
						</div>
						<div className="block sm:hidden ">
							<Button
								className="border-0"
								icon={<MenuOutlined />}
								onClick={() => setShow(!show)}
							></Button>
						</div>
					</div>
					<div className="bg-amber-300 sm:px-10 hidden sm:block ">
						<ul className="flex md:gap-8 gap-4">
							{Object.values(navMenu).map((item, index) => (
								<Link href={item.link} key={index}>
									<li
										className={`text-lg font-medium hover:text-blue-800 p-3 ${pathName === item.link ? 'text-blue-800' : 'text-black'
											}`}
									>
										{item.title}
									</li>
								</Link>
							))}
						</ul>
					</div>

					{/* mobile menu */}
					<div>
						{shouldRender && (
							<div
								className={`bg-white h-screen w-screen flex justify-between px-10 py-6 absolute top-0 z-10 ${show ? 'mountedStyle' : 'unMountedStyle'
									}`}
								onAnimationEnd={onAnimationEnd}
							>
								<div className="">
									<div className="flex gap-3 items-center pb-4">
										<Avatar size="large" icon={<UserOutlined />} />
										<p>Hi, {username}</p>
									</div>
									<ul>
										{Object.values(navMenu).map((item, index) => (
											<Link href={item.link} key={index} onClick={() => setShow(!show)}>
												<li key={index} className="pb-4 text-lg font-medium">
													{item.title}
												</li>
											</Link>
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
						)}
					</div>
				</HeaderStyled>
			)}
		</>
	);
};

export default Header;
