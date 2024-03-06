'use client'
import React from 'react';
import { Table } from 'flowbite-react';
import { insertUserFault } from '@/lib/api/users';
import TableComponent from '@/components/TableComponent';

const columns = [
	{
		title: 'Tên',
		key: 'user_name'
	},
	{
		title: 'Lý do bị phạt',
		key: 'reason'
	},
	{
		title: 'Số tiền',
		key: 'amount'
	},
	{
		title: 'Trạng thái',
		key: 'status'
	},
]

const data: any = []

for (let index = 0; index < 100; index++) {
	data.push({
		user_name: "hello",
		reason: index,
		amount: '10000vnd',
		status: 'true'
	})

}
const page = () => {
	return (
		<div className="px-3 sm:px-10 bg-slate-200 h-full">
			<div className="flex flex-col gap-4 pb-8">
				<div className="bg-white shadow-md mt-8 rounded-lg p-4 ">
					<h1 className="text-xl font-medium">Danh sách phạt đội bóng</h1>
					<TableComponent
						columns={columns}
						dataSource={data}
						loading={false} />
				</div>
			</div>
		</div>
	);
};

export default page;
