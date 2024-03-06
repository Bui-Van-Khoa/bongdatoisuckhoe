import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { Button } from 'flowbite-react';

interface UserInformationFormProps {
	columns: any;
	dataSource: Array<any>;
	loading: boolean
}

const TableComponent: React.FC<UserInformationFormProps> = ({ columns, dataSource, loading }) => {
	const [trHead, setTrHead] = useState<any>(null)
	const [dataTable, setDataTable] = useState<any>([])
	const [activeIndex, setActiveIndex] = useState(0)
	const [rangeData, setRangeData] = useState(0)



	useEffect(() => {
		const chunkSize = 10;
		const chunks = [];

		for (let i = 0; i < Object.keys(dataSource).length; i += chunkSize) {
			const chunk = dataSource.slice(i, i + chunkSize);
			console.log("chunk", chunk)
			chunks.push(chunk);
		}
		console.log("data", chunks)
		setTrHead(columns);
		setDataTable(chunks)

	}, [columns, dataSource])

	const renderBodyTable = (data: any) => {
		return (
			<>
				{Object.keys(data).length === 0
					? <tr>
						<th></th>
						<th></th>
						<th>
							<div className='flex justify-center items-center gap-4 py-8'>
								<FontAwesomeIcon icon={faFolderOpen} className="fa-4x" style={{ color: " #B9bdbd" }} />
								<p>No data</p>
							</div>
						</th>
					</tr>
					: <>
						{(data || []).map((item: any, idx: any) => (
							<tr key={idx} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
								{(columns || []).map((column: any, idx: number) => (
									<>
										{idx === 0 ? <th key={idx}>{item[column.key]}</th> : <td key={idx} className="px-6 py-4">{item[column.key]}</td>}
									</>
								))}
							</tr>
						))}
					</>
				}
			</>
		)
	}

	return (

		<div className="relative overflow-x-auto shadow-md border border-gray-400 sm:rounded-lg mt-4">
			<table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 ">
				<thead className="text-xs text-gray-700 bg-blue-100 dark:bg-blue-700 dark:text-gray-400">
					<tr>
						{(trHead || []).map((item: any, idx: any) => (
							<th key={idx} scope="col" className="px-3 py-3">{item.title}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{loading
						? (
							<tr className='h-32'>
								<th></th>
								<th></th>
								<th>
									<div role="status">
										<svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
										<span className="sr-only">Loading...</span>
									</div>
								</th>
							</tr>

						)
						: renderBodyTable(dataTable[activeIndex] || [])
					}
				</tbody>
			</table>
			{dataTable.length > 1 && (
				<nav className="flex items-center flex-column flex-wrap md:flex-row justify-between px-4 py-6" aria-label="Table navigation">
					<span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900 dark:text-white">{activeIndex*10 +1}-{rangeData*10 + 10}</span> of <span className="font-semibold text-gray-900 dark:text-white">{dataSource.length}</span></span>
					<ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 gap-1">
						{dataTable.map((item: any, idx: any) => (
							<li>
								{activeIndex === idx
									? <Button color="blue" size="xs" onClick={() => {
										setActiveIndex(idx);
									}}>{idx + 1}</Button>
									: <Button color="gray" size="xs" onClick={() => {
										setActiveIndex(idx);
									}}>{idx + 1}</Button>
								}

							</li>
						))}

					</ul>
				</nav>
			)}

		</div>

	);
};

export default TableComponent;
