/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { getAllUser } from '@/lib/api/users';

const columns = [
  {
    title: 'Tên',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Số áo',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: 'Vị trí',
    key: 'position',
    dataIndex: 'position',
  },
  {
    title: 'Chiều cao',
    key: 'height',
    dataIndex: 'height',
  },
  {
    title: 'Cân nặng',
    key: 'weight',
    dataIndex: 'weight',
  },
];

const page: React.FC = () => {
  const [dataTable, setDataTable] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      } catch (error) {}
    })();
  }, []);
  return (
    <div className="px-3 sm:px-10 bg-slate-200 h-screen">
      <div className="flex flex-col gap-4 pb-8">
        <div className="bg-white shadow-md mt-2 rounded-lg p-4 ">
          <h1 className="text-xl font-medium">Thành viên đội bóng</h1>
          <Table
            columns={columns}
            dataSource={dataTable}
            loading={isLoading}
            className="mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
