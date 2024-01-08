"use client"

import React, { useState } from "react";
import { Table } from 'antd';
import { Checkbox, Typography } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
const { Text } = Typography;

interface DataType {
	key: React.Key;
	name: string;
	amount: string;
	status: string;
}

const columns: ColumnsType<DataType> = [
	{
		title: 'Tên',
		dataIndex: 'name',
		key: 'name',
		width: 40,
		fixed: 'left',
		
	},
	{
		title: 'Thời gian',
		children: [
			{
				title: 'Tháng 1',
				children: [
					{
						title: 'Số tiền',
						dataIndex: 'amount',
						key: 'amount',
						width: 50,
					},
					{
						title: 'Trạng thái',
						dataIndex: 'status',
						key: 'status',
						width: 50,
						render: (text) => {
							return (
								<div>
									<Checkbox >Checkbox</Checkbox>
								</div>
							)
						},
					},
				],
				dataIndex: 'time',
				key: 'time',
				width: 150,

			},
			{
				title: 'Tháng 1',
				children: [
					{
						title: 'Số tiền',
						dataIndex: 'amount',
						key: 'amount',
						width: 50,
					},
					{
						title: 'Trạng thái',
						dataIndex: 'status',
						key: 'status',
						width: 50,
						render: (text) => {
							return (
								<div>
									<Checkbox >Checkbox</Checkbox>
								</div>
							)
						},
					},
				],
				dataIndex: 'time',
				key: 'time',
				width: 150,

			}, {
				title: 'Tháng 1',
				children: [
					{
						title: 'Số tiền',
						dataIndex: 'amount',
						key: 'amount',
						width: 50,
					},
					{
						title: 'Trạng thái',
						dataIndex: 'status',
						key: 'status',
						width: 50,
						render: (text) => {
							return (
								<div>
									<Checkbox >Checkbox</Checkbox>
								</div>
							)
						},
					},
				],
				dataIndex: 'time',
				key: 'time',
				width: 150,

			},
		],
	},
];

const data: DataType[] = [];
for (let i = 0; i < 10; i++) {
	data.push({
		key: i,
		name: 'John Brown',
		amount:"200vbd",
		status: 'Lake Park',
	});
}

const columnsSum = [
  {
    title: 'Thời gian',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Tổng tiền',
    dataIndex: 'total',
    key: 'total',
  },
  {
    title: 'Tiền sân',
    dataIndex: 'field',
    key: 'field',
  },
  {
    title: 'Tiền nước',
    key: 'water',
    dataIndex: 'water',
  }, 
	{
    title: 'Còn lại',
    key: 'remain',
    dataIndex: 'remain',
  }
];

const dataSum = [
  {
    key: '1',
    time: 'Tháng 1',
    total: 32,
    field: 'New York No. 1 Lake Park',
    water: '120',
		remain:"150"
  },
	{
    key: '2',
    time: 'Tháng 2',
    total: 32,
    field: 'New York No. 1 Lake Park',
    water: '120',
		remain:"150"
  },
	{
    key: '3',
    time: 'Tháng 3',
    total: 32,
    field: 'New York No. 1 Lake Park',
    water: '120',
		remain:"150"
  },
	{
    key: '4',
    time: 'Tháng 4',
    total: 32,
    field: 'New York No. 1 Lake Park',
    water: '120',
		remain:"150"
  },
 
];


type TablePaginationPosition = NonNullable<TablePaginationConfig['position']>[number];
const page: React.FC = () => {

	const [paginationPosition, setPaginationPosition] = useState<TablePaginationPosition>('bottomCenter');

	return (
		<div className='px-3 sm:px-10 bg-slate-200 h-full'>
			<div className='flex flex-col gap-4 pb-8' >
				<div className='bg-white shadow-md mt-2 rounded-lg p-4 '>
					<h1 className='text-xl font-medium'>Danh sách nộp quỹ</h1>
					<Table
						columns={columns}
						dataSource={data}
						bordered
						size="middle"
						pagination={{ position: [paginationPosition]}}
						scroll={{ x: 'calc(700px + 50%)'}}
						className="mt-4"
					/>
				</div>

				<div className='bg-white shadow-md mt-2 rounded-lg p-4 '>
					<h1 className='text-xl font-medium'>Thống kê</h1>
					<Table columns={columnsSum} dataSource={dataSum}
					summary={(pageData) => {
						let totalBorrow = 0;
						let totalRepayment = 0;
						pageData.forEach(() => {
							totalBorrow += 1;
							totalRepayment += 1;
						});
						return (
							<>
								<Table.Summary.Row>
									<Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
									<Table.Summary.Cell index={1}>
										<Text type="danger">{totalBorrow}</Text>
									</Table.Summary.Cell>
								
								</Table.Summary.Row>
								<Table.Summary.Row>
									<Table.Summary.Cell index={0}>Balance</Table.Summary.Cell>
									<Table.Summary.Cell index={1} colSpan={2}>
										<Text type="danger">{totalBorrow - totalRepayment}</Text>
									</Table.Summary.Cell>
								</Table.Summary.Row>
							</>
						);
					}}
					/>
				</div>

			</div>
		</div>
	)
}

export default page;