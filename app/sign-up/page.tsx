'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import Image from 'next/legacy/image';
import logo from '@/assets/channels4_profile.jpg';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const supabase = createClientComponentClient();

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    if (data.user) {
      if (
        window.confirm(
          'Bạn đã đăng ký thành công. Xin mời kiểm tra email để xác thực tài khoản trước khi đăng nhập!',
        )
      ) {
        setEmail('');
        setPassword('');
      }
    } else {
      window.alert(error?.message);
    }
    router.refresh();
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
            Register form
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
              <Input
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password
                id="input-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
            <div className="flex justify-between">
              <Form.Item>
                <Button
                  type="primary"
                  className="bg-red-500"
                  onClick={handleSignUp}
                >
                  Register
                </Button>
              </Form.Item>
              <Button
                type="primary"
                className="bg-red-500"
                onClick={() => router.push('/login')}
              >
                Back to Login
              </Button>
            </div>
          </Form>
        </div>
      </section>
    </main>
  );
}
