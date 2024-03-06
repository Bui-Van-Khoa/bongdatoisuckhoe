import { NextResponse, NextRequest } from 'next/server';
const nodemailer = require('nodemailer');
import generateEmailTemplate from '@/app/template-email/emailTemplate';

export async function POST(request: any) {
  const formData = await request.formData();

  const email = formData.get('email');
  const userName = formData.get('name');
  const time = formData.get('time');
  const location = formData.get('location');
  const filedNumber = formData.get('filedNumber');
  const address = formData.get('address');

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bongdasuckhoetoi@gmail.com',
      pass: 'busi gxxw zolt htjs',
    },
  });

  try {
    await transporter.sendMail({
      from: 'bongdasuckhoetoi@gmail.com',
      to: email,
      subject: `Bóng đá sức khỏe tối thông báo`,
      html: generateEmailTemplate({
        name: userName,
        time: time,
        location: location,
        filedNumber: filedNumber,
				address:address,
      }),
    });
    transporter.close();
    return NextResponse.json({
      message: 'Success: email was sent',
      status: true,
    });
  } catch (error) {
    NextResponse.json({ message: 'COULD NOT SEND MESSAGE', status: false });
  }
}
