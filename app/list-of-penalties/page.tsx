'use client'
import React from 'react';
import { Table } from 'flowbite-react';

const columns = ['Tên', 'Lý do bị phạt', 'Số tiền', 'Trạng thái']

const page = () => {
	return (
		<div className="px-3 sm:px-10 bg-slate-200 h-full">
			<div className="flex flex-col gap-4 pb-8">
				<div className="bg-white shadow-md mt-2 rounded-lg p-4 ">
					<h1 className="text-xl font-medium">Danh sách thành viên đội bóng</h1>
					<Table>
						<Table.Head>
						{columns.map((item,idx) => (
							<Table.HeadCell key={idx}>{item}</Table.HeadCell>
						))}
						</Table.Head>
						<Table.Body className="divide-y">
							<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
								<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
									{'Apple MacBook Pro 17"'}
								</Table.Cell>
								<Table.Cell>Sliver</Table.Cell>
								<Table.Cell>Laptop</Table.Cell>
								<Table.Cell>$2999</Table.Cell>
							</Table.Row>
							<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
								<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
									Microsoft Surface Pro
								</Table.Cell>
								<Table.Cell>White</Table.Cell>
								<Table.Cell>Laptop PC</Table.Cell>
								<Table.Cell>$1999</Table.Cell>
							</Table.Row>
							<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
								<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>
								<Table.Cell>Black</Table.Cell>
								<Table.Cell>Accessories</Table.Cell>
								<Table.Cell>$99</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table>
				</div>
			</div>
		</div>
	);
};

export default page;
