"use client"

import React, { useEffect } from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import 'chart.js/auto'
import { getUser } from '@/lib/fetchData/users';
import { testApi } from '@/lib/fetchData/load-header';


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

	useEffect(() => {
		async function getUserInformation() {
			const user = await getUser();
			
		}
		getUserInformation();
		
	}, [])

	// useEffect(() => {
	// 	async function getUserInformation1() {
	// 		 await testApi("test2@yopmail.com")
	// 	}
	// 	getUserInformation1();
		
	// }, [])


	

	return (
		<div className='flex flex-col gap-4 pb-8' >
			<div className='bg-white shadow-md mt-2 rounded-lg p-4 '>
				<h1 className='text-xl font-medium'>Trận đấu tiếp theo</h1>
				<p>Thời gian: coming soon</p>
				<p>Địa điểm: coming soon</p>
			</div>
			<div className='bg-white shadow-md mt-2 rounded-lg p-4'>
				<h1 className='text-xl font-medium'>Thống kê trận đấu</h1>
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
									display: ""
								},
							}
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default index;
