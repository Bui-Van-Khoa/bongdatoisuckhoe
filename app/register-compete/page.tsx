/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { Button, Form } from 'antd';
import { useEffect } from 'react';

const page = () => {
  const formData = new FormData();

  async function handleSubmit(event: any) {
    event.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'post',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();

      alert('Message successfully sent');
    } catch (err) {
      alert('Error, please try resubmitting the form');
    }
  }

  useEffect(() => {
    let flat = 0;
    const localStorageData: any = localStorage.getItem('matchInformation');
    const matchInformation = JSON.parse(localStorageData);
    if (flat === 0) {
      formData.append('email', matchInformation.email);
      formData.append('name', matchInformation.userName);
      formData.append('time', matchInformation.time);
      formData.append('location', matchInformation.location);
      formData.append('filedNumber', matchInformation.filedNumber);
    }
    flat = +1;
  }, []);

  return (
    <div className="px-3 sm:px-10 bg-slate-200 h-full">
      <div className="flex flex-col gap-4 pb-8">
        <div className="bg-white shadow-md mt-2 rounded-lg p-4 ">
          <Form
            name="Đăng ký thi đấu"
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
            autoComplete="off"
          >
            <h1 className="text-xl font-medium">Đăng ký thi đấu</h1>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default page;
