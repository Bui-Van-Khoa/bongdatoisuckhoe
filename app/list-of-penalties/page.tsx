import React from 'react'
import { Space, Table, Tag } from 'antd';

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
    fault: 'Đi muộn',
    amount: "30.000 vnd",
    status: 'yes',
  },
	{
    key: '2',
    fault: 'Đi muộn',
    amount: "30.000 vnd",
    status: 'yes',
  }, {
    key: '3',
    fault: 'Đi muộn',
    amount: "30.000 vnd",
    status: 'yes',
  }, {
    key: '4',
    fault: 'Đi muộn',
    amount: "30.000 vnd",
    status: 'yes',
  }, {
    key: '5',
    fault: 'Đi muộn',
    amount: "30.000 vnd",
    status: 'yes',
  }, {
    key: '6',
    fault: 'Đi muộn',
    amount: "30.000 vnd",
    status: 'yes',
  }, {
    key: '7',
    fault: 'Đi muộn',
    amount: "30.000 vnd",
    status: 'yes',
  }, {
    key: '8',
    fault: 'Đi muộn',
    amount: "30.000 vnd",
    status: 'yes',
  }, {
    key: '12',
    fault: 'Đi muộn',
    amount: "30.000 vnd",
    status: 'yes',
  }, {
    key: '10',
    fault: 'Đi muộn',
    amount: "30.000 vnd",
    status: 'yes',
  }, {
    key: '11',
    fault: 'Đi muộn',
    amount: "30.000 vnd",
    status: 'yes',
  },
];
const page = () => {
	return (
		<div className='px-3 sm:px-10 bg-slate-200 min-h-screen'>
			<div className='	'>
			<h1>Danh sách thành viên đội bóng</h1>
			<Table columns={columns} dataSource={data} />
		</div>
		</div>
	)
}

export default page