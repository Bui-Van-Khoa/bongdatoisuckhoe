'use client';

import React, { useEffect, useState } from 'react';
import { getAllUser } from '@/lib/api/users';
import TableComponent from '@/components/TableComponent';

const columns = ['Tên', 'Số áo', 'Vị trí', 'Chiều cao', 'Cân nặng'];

const page: React.FC = () => {
	const [dataTable, setDataTable] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async function () {
			try {
				setIsLoading(true);
				const data: any = await getAllUser();
				const temptableData: any = [];
				data.map((item: any) => {
					temptableData.push({
						key: item.id,
						name: item.user_name,
						number: item.number,
						position: item.position,
						height: item.height,
						weight: item.weight,
					});
					setDataTable(temptableData);
				});
				setIsLoading(false);
			} catch (error) { }
		})();
	}, []);
	return (
		<div className="px-3 sm:px-10 bg-slate-200 h-screen">
			<div className="flex flex-col gap-4 pb-8">
				<div className="bg-white shadow-md mt-2 rounded-lg p-4 ">
					<h1 className="text-xl font-medium">Thành viên đội bóng</h1>
					<TableComponent
						columns={columns}
						dataSource={dataTable}
						loading={isLoading} />
				</div>
			</div>
		</div>
	);
};

export default page;
