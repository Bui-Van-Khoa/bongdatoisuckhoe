import React from 'react'
import { Table } from 'antd';

const columns = [
	{
		title: 'Tên',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Lý do bị phạt',
		dataIndex: 'fault',
		key: 'fault',
	},
	{
		title: 'Số tiền',
		dataIndex: 'amount',
		key: 'amount',
	},
	{
		title: 'Trạng thái',
		key: 'status',
		dataIndex: 'status',
	},

];
const data = [
	{
		key: '1',
		name:"Oscar",
		fault: 'Đi muộn',
		amount: "30.000 vnd",
		status: 'yes',
	},
	{
		key: '2',
		name:"Oscar",
		fault: 'Đi muộn',
		amount: "30.000 vnd",
		status: 'yes',
	}, {
		key: '3',
		name:"Oscar",
		fault: 'Đi muộn',
		amount: "30.000 vnd",
		status: 'yes',
	}, {
		key: '4',
		name:"Oscar",
		fault: 'Đi muộn',
		amount: "30.000 vnd",
		status: 'yes',
	}, {
		key: '5',
		name:"Oscar",
		fault: 'Đi muộn',
		amount: "30.000 vnd",
		status: 'yes',
	}, {
		key: '6',
		name:"Oscar",
		fault: 'Đi muộn',
		amount: "30.000 vnd",
		status: 'yes',
	}, {
		key: '7',
		name:"Oscar",
		fault: 'Đi muộn',
		amount: "30.000 vnd",
		status: 'yes',
	}, {
		key: '8',
		name:"Oscar",
		fault: 'Đi muộn',
		amount: "30.000 vnd",
		status: 'yes',
	}, {
		key: '12',
		name:"Oscar",
		fault: 'Đi muộn',
		amount: "30.000 vnd",
		status: 'yes',
	}, {
		key: '10',
		name:"Oscar",
		fault: 'Đi muộn',
		amount: "30.000 vnd",
		status: 'yes',
	}, {
		key: '11',
		name:"Oscar",
		fault: 'Đi muộn',
		amount: "30.000 vnd",
		status: 'yes',
	},
];
const page = () => {
	return (
		<div className='px-3 sm:px-10 bg-slate-200 h-full'>
			<div className='flex flex-col gap-4 pb-8' >
				<div className='bg-white shadow-md mt-2 rounded-lg p-4 '>
					<h1 className='text-xl font-medium'>Danh sách thành viên đội bóng</h1>
					<Table className='mt-4' columns={columns} dataSource={data} />
				</div>
			</div>
		</div>
	)
}

export default page