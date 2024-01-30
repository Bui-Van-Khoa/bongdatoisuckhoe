/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import React, { useEffect, useState } from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { checkIfUserInAccount } from '@/lib/api/users';
import UserInformationForm from '@/components/UserInformationForm';
import LoadingComponent from '@/components/LoadingComponent';
import {
	getNextMatch,
	insertAttendedMember,
	checkIfUserRegisterCompete,
	removeAttendedMember,
	getAttendedMember,
} from '@/lib/api/match';
import TableComponent from '@/components/TableComponent';
import { Can } from "@/components/Abilities";
import { getUserDetail } from '@/common/getUserDetail';
import { Button } from 'flowbite-react';
import EditMatchModal from './EditMatchModal';



export const data = {
	labels: ['Thắng', 'Hòa', 'Thua'],
	datasets: [
		{
			label: '# of Votes',
			data: [12, 19, 3],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
			],
			borderWidth: 1,
		},
	],
};

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'Chart.js Line Chart',
		},
	},
};

const data1 = {
	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
	datasets: [
		{
			label: 'First dataset',
			data: [33, 53, 85, 41, 44, 65],
			fill: true,
			backgroundColor: 'rgba(75,192,192,0.2)',
			borderColor: 'rgba(75,192,192,1)',
		},
	],
};

const columnsAttendedMember = [
	{
		title:'Tên',
		key:'name'
	},
	{
		title:'Số áo',
		key:'number'
	},
	{
		title:'Vị trí',
		key:'position'
	},
	{
		title:'Chiều cao',
		key:'height'
	},
	{
		title:'Cân nặng',
		key:'weight'
	},
];
const index: React.FC = () => {
	const { v4: uuidv4 } = require('uuid');
	const [isLoading, setIsLoading] = useState(true);
	const [isOpenUserForm, setIsOpenUserForm] = useState(false);
	const [email, setEmail] = useState<any>('');
	const [userId, setUserId] = useState();
	const [filedNumber, setFiledNumber] = useState<any>();
	const [nextMatchPlace, setNextMatchPlace] = useState<any>('');
	const [nextMatchTime, setNextMatchTime] = useState('');
	const [nextMatchAddress, setNextMatchAddress] = useState('');
	const [emailData, setEmailData] = useState<any>();
	const [isRegisterCompete, setIsRegisterCompete] = useState<boolean>(false);
	const [isRegisterCompeteLoading, setIsRegisterCompeteLoading] =
		useState<boolean>(false);
	const [dataRegisterCompeteTable, setDataRegisterCompeteTable] = useState<any>(
		{},
	);
	const [isOpenUpdateNextMatch, setIsOpenUpdateNextMatch] = useState(false);
	const user = getUserDetail();


	useEffect(() => {
		(async () => {
			await getAllAttendedMember();
			setEmail(user?.email);
			setUserId(user?.id);

			checkOpenUserDetailModal(user?.email);

			checkUserRegisterCompete(user?.email);
		})();
	}, []);

	useEffect(() => {
		checkUserRegisterCompete(email);
	}, [isRegisterCompeteLoading]);

	useEffect(() => {
		getNextMatchInformation()
	}, [isOpenUpdateNextMatch])

	const getNextMatchInformation = async () => {
		const nextMatchInformation: any = await getNextMatch();
		const isTimeExpire = changeTimeAndPlace(nextMatchInformation[0].time);
		let matchInformation = {};
			if (!isTimeExpire) {
				setNextMatchTime('Đang đặt sân...');
				setNextMatchPlace('Đang đặt sân...');
				setFiledNumber(null);
				setNextMatchAddress('Đang đặt sân...')
				matchInformation = {
					email: user?.email,
					userName: user?.user_name,
					time: 'Đang đặt sân...',
					location: 'Đang đặt sân...',
					filedNumber: null,
					address:'Đang đặt sân'
				};
			} else {
				setNextMatchTime(isTimeExpire);
				setNextMatchPlace(`Sân vận động ${nextMatchInformation[0].place} - `);
				setFiledNumber(`sân số ${nextMatchInformation[0].field_number}`);
				setNextMatchAddress(nextMatchInformation[0].address)
				matchInformation = {
					email: user?.email,
					userName: user?.user_name,
					time: isTimeExpire,
					location: nextMatchInformation[0].place,
					filedNumber: nextMatchInformation[0].field_number,
					address:nextMatchInformation[0].address
				};
			}

		setEmailData(matchInformation);
	}

	const checkOpenUserDetailModal = async (data: any) => {
		const isUserExist = await checkIfUserInAccount(data);
		if (!isUserExist) {
			setIsOpenUserForm(true);
		} else {
			setIsLoading(false);
			setIsOpenUserForm(false);
		}
	};

	const checkUserRegisterCompete = async (email: any) => {
		const data = await checkIfUserRegisterCompete(email);
		if (!data) setIsRegisterCompete(false);
		else setIsRegisterCompete(true);
	};

	const changeTimeAndPlace = (data: any) => {
		const today = new Date();
		const date = new Date(data);
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();
		const hours = date.getHours();
		const minutes = date.getMinutes();

		const formattedDate = `${hours} giờ ${minutes} phút. Ngày ${day < 10 ? '0' : ''
			}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
		if (date >= today) {
			return formattedDate;
		}
		return false;
	};

	const registerCompete = async () => {
		const registerData = {
			id: uuidv4(),
			email: email,
			name: email.match(/^.+(?=@)/)[0],
			user_id: userId,
		};
		await insertAttendedMember(registerData);
	};

	const sendEmail = async () => {
		try {
			const formData = new FormData();
			formData.append('email', emailData?.email);
			formData.append('name', emailData?.userName);
			formData.append('time', emailData?.time);
			formData.append('location', emailData?.location);
			formData.append('filedNumber', emailData?.filedNumber);
			formData.append('address', emailData?.address);
			const response = await fetch('/api/contact', {
				method: 'post',
				body: formData,
			});

			if (!response.ok) {
				throw new Error(`response status: ${response.status}`);
			}
			const responseData = await response.json();
			return responseData;
		} catch (err) {
			return err;
		}
	};

	const handleCancelRegister = async () => {
		setIsRegisterCompeteLoading(true);

		await removeAttendedMember(email);
		await getAllAttendedMember();
		setIsRegisterCompeteLoading(false);
	};

	async function handleSubmitRegisterCompete(event: any) {
		setIsRegisterCompeteLoading(true);
		event.preventDefault();
		await registerCompete();
		const data = await sendEmail();
		await getAllAttendedMember();
		if (data.status) alert('Bạn đã đăng ký thi đấu thành công!');
		else alert('Bạn đăng ký thi đấu thất bại!');
		setIsRegisterCompeteLoading(false);
	}

	const getAllAttendedMember = async () => {
		const data: any = await getAttendedMember();
		let tempData: any[] = [];
		data.map((item: any) => {
			tempData.push({
				key: item.id,
				name: item?.accounts?.user_name,
				position: item?.accounts?.position,
				number: item?.accounts?.number,
				weight: item?.accounts?.weight,
				height: item?.accounts?.height,
			});
		});
		setDataRegisterCompeteTable(tempData);
	};

	return (
		<>
			{isLoading ? (
				<LoadingComponent />
			) : (
				<div className="flex flex-col gap-4 pb-8 relative">
					<div className="bg-white shadow-md mt-2 rounded-lg p-4 flex flex-col gap-4">
						<h1 className="text-xl font-medium">Trận đấu tiếp theo</h1>

						<p className="text-lg ">
							Thời gian:{' '}
							<span className="text-red-500 font-semibold">
								{nextMatchTime}
							</span>
						</p>
						<p className="text-lg ">
							Địa điểm:{' '}
							<span className="text-red-500 font-semibold">
								{nextMatchPlace} {filedNumber}
							</span>
						</p>
						<p className="text-lg ">
							Địa chỉ:{' '}
							<span className="text-red-500 font-semibold">
								{nextMatchAddress}
							</span>
						</p>
						<Can I="edit" a="Match">
							<Button className='w-fit' onClick={() => setIsOpenUpdateNextMatch(true)}>Chỉnh sửa trận đấu</Button>
						</Can>
					</div>
					<div className="bg-white shadow-md mt-2 rounded-lg p-4">

						<h1 className="text-xl font-medium">Đăng ký thi đấu</h1>
						<div className="mt-3">
							{isRegisterCompete ? (
								<span className="bg-green-100 text-green-700 font-medium me-2 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">Bạn đã đăng ký thi đấu</span>
							) : (
								<span className="bg-yellow-100 text-yellow-800 font-medium me-2 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">Bạn chưa đăng ký thi đấu</span>
							)}
						</div>

						<div className="flex gap-4 mt-4">
							<button type="button" className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ${isRegisterCompete ? 'cursor-not-allowed' : ''}`} disabled={isRegisterCompete} onClick={handleSubmitRegisterCompete}>Đăng ký thi đấu</button>
							<button type="button" className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ${!isRegisterCompete ? 'cursor-not-allowed' : ''}`} disabled={!isRegisterCompete} onClick={handleCancelRegister}>Hủy đăng ký thi đấu</button>

						</div>

						<div className="mt-4">
							<h1 className="text-xl font-medium">Danh sách thi đấu thi đấu</h1>
							<TableComponent
								columns={columnsAttendedMember}
								dataSource={dataRegisterCompeteTable}
								loading={isRegisterCompeteLoading} />
						</div>
					</div>
					<div className="bg-white shadow-md mt-2 rounded-lg p-4">
						<h1 className="text-xl font-medium">
							Thống kê trận đấu (updating)
						</h1>
						<div className="h-[50vh] mt-4">
							<Doughnut
								data={data}
								options={{
									responsive: true,
									maintainAspectRatio: false,
									plugins: {
										title: {
											display: true,
											text: 'Biểu đồ hiển thị tỉ lệ thắng/hòa/thua',
											font: {
												size: 16,
											},
										},
									},
								}}
							/>
						</div>

						<div className="mt-7">
							<Line
								data={data1}
								width={50}
								height={300}
								options={{
									maintainAspectRatio: false,
									plugins: {
										title: {
											display: true,
											text: 'Biểu đồ hiển thị số bàn thắng qua từng trận',
											font: {
												size: 16,
											},
										},
										legend: {
											display: false,
										},
									},
								}}
							/>
						</div>
					</div>
				</div>
			)}
			<UserInformationForm
				isModalOpen={isOpenUserForm}
				email={email}
				userId={userId}
				closeModalStatus={() => {
					setIsOpenUserForm(false),
						setIsLoading(false)
				}}
			/>
			<EditMatchModal isOpen={isOpenUpdateNextMatch} closeModalStatus={() => setIsOpenUpdateNextMatch(false)} />
		</>
	);
};

export default index;
