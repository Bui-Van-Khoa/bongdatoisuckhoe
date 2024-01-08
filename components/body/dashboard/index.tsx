"use client"

import React, { useEffect, useState } from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import 'chart.js/auto'
import { getUser, checkIfUserInAccount,getCookies } from '@/lib/api/users';
import { useRouter } from "next/navigation";
import UserInformationForm from '@/components/UserInformationForm';
import LoadingComponent from '@/components/LoadingComponent';


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
	labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
	datasets: [
		{
			label: "First dataset",
			data: [33, 53, 85, 41, 44, 65],
			fill: true,
			backgroundColor: "rgba(75,192,192,0.2)",
			borderColor: "rgba(75,192,192,1)"
		},
	]
};

const index = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true)
	const [isOpenUserForm, setIsOpenForm] = useState(false);
	const [email, setEmail] = useState("")
	const [userId, setId] = useState()


	useEffect(() => {
		async function getUserInformation() {
			const user : any = await getUser();
			setEmail(user?.email)
			setId(user?.id)

			if (!user) {
				router.push('/login')
			}

			const isUserExist = await checkIfUserInAccount(user?.email)
			if (!isUserExist) {
				setIsOpenForm(true)
			} else {
				setIsLoading(false)
				setIsOpenForm(false)

			}
		}
		getUserInformation();
	}, [isOpenUserForm])


	return (
		<>
			{isLoading ?
				<LoadingComponent /> :
						<div className='flex flex-col gap-4 pb-8' >
							<div className='bg-white shadow-md mt-2 rounded-lg p-4 '>
								<h1 className='text-xl font-medium'>Trận đấu tiếp theo</h1>
								<p>Thời gian: coming soon</p>
								<p>Địa điểm: coming soon</p>
							</div>
							<div className='bg-white shadow-md mt-2 rounded-lg p-4'>
								<h1 className='text-xl font-medium'>Thống kê trận đấu (updating)</h1>
								<div className='h-[50vh] mt-4'>
									<Doughnut data={data}
										options={{
											responsive: true,
											maintainAspectRatio: false,
											plugins: {
												title: {
													display: true,
													text: "Biểu đồ hiển thị tỉ lệ thắng/hòa/thua",
													font: {
														size: 16
													}
												},

											}
										}} />
								</div>

								<div className='mt-7'>
									<Line data={data1}
										width={50}
										height={300}
										options={{
											maintainAspectRatio: false,
											plugins: {
												title: {
													display: true,
													text: "Biểu đồ hiển thị số bàn thắng qua từng trận",
													font: {
														size: 16
													}
												},
												legend: {
													display: false
												},
											}
										}}
									/>
								</div>
							</div>
						</div>
			}
					<UserInformationForm
						isModalOpen={isOpenUserForm}
						email={email}
						userId={userId}
						closeModalStatus={() => setIsOpenForm(false)}
					/>
				</>
	);
};

			export default index;
