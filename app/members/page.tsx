import React from 'react'
import { Space, Table, Tag } from 'antd';

const columns = [
	{
		title: 'Tên',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Số trận đã đấu',
		dataIndex: 'age',
		key: 'age',
	},
	{
		title: 'Số áo',
		dataIndex: 'address',
		key: 'address',
	},
	{
		title: 'Vị trí',
		key: 'tags',
		dataIndex: 'tags',
	},

];
const data = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
		tags: ['nice', 'developer'],
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
		tags: ['loser'],
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sydney No. 1 Lake Park',
		tags: ['cool', 'teacher'],
	},
];

const page = () => {
	return (
		<div className='px-3 sm:px-10 bg-slate-200 h-screen'>
			<div className='flex flex-col gap-4 pb-8' >
				<div className='bg-white shadow-md mt-2 rounded-lg p-4 '>
					<h1 className='text-xl font-medium'>Thành viên đội bóng</h1>
					<Table columns={columns} dataSource={data} className='mt-4' /> 
				</div>
			
			</div>
		</div>


	)
}

export default page