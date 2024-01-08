import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');

// Handles POST requests to /api


export async function POST(request) {

    const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
    const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
    const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;


    console.log("dealing with request")
    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: "bongdasuckhoetoi@gmail.com",
				pass: "busi gxxw zolt htjs",
			},
		})

		console.log("transporter",transporter)

    try {
				console.log("m da chayj toi day")
        const mail = await transporter.sendMail({
					from: "bongdasuckhoetoi@gmail.com",
					to: "buivankhoa212@gmail.com",
					subject: `Message from (${email})`,
					text: message,
        })
				transporter.close();

				console.log("mail", mail)

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log("error,", error)
        // NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
    }


}
