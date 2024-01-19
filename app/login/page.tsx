'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button, Form, Input } from 'antd';
import Image from 'next/legacy/image';
import logo from '@/assets/channels4_profile.jpg';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const supabase = createClientComponentClient();

  const handleSignIn = async () => {
    setLoading(true);
    const res = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (res.data.session?.access_token) {
      document.cookie = 'name=John Doe';
      router.push('/');
      setEmail('');
      setPassword('');
    } else {
      window.alert('Email hoặc password không đúng. Xin mời thử lại!');
    }
    setLoading(false);
  };

  return (
    <main className="h-screen flex flex-col justify-center items-center ">
      <section className="border border-slate-300 shadow-md rounded-lg">
        <div className="bg-yellow-300">
          <div className="flex gap-4 items-center w-full">
            <Image alt="logo" src={logo} width={80} height={80} />
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl px-4">
              Bóng đá sức khỏe tối
            </h1>
          </div>
        </div>
        <div className="px-10">
          <h2 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mt-4">
            Login form
          </h2>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            layout="vertical"
            autoComplete="off"
            className="mt-2"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your Email!' }]}
            >
              <Input onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white"
              />
            </Form.Item>

            <div className="flex justify-between">
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-red-500"
                  onClick={handleSignIn}
                  loading={loading}
                >
                  Sign In
                </Button>
              </Form.Item>
              <Button
                type="primary"
                className="bg-red-500"
                onClick={() => router.push('/sign-up')}
              >
                Sign Up
              </Button>
            </div>
          </Form>
        </div>
      </section>
    </main>
  );
}
