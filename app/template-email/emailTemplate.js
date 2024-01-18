// emailTemplate.js

const generateEmailTemplate = ({ name, time, location, filedNumber }) => {
  return `
	<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
	xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<style type="text/css">
		#outlook a {
			padding: 0;
		}

		body {
			margin: 0;
			padding: 0;
			-webkit-text-size-adjust: 100%;
			-ms-text-size-adjust: 100%;
		}

		table,
		td {
			border-collapse: collapse;
			mso-table-lspace: 0pt;
			mso-table-rspace: 0pt;
		}

		img {
			border: 0;
			height: auto;
			line-height: 100%;
			outline: none;
			text-decoration: none;
			-ms-interpolation-mode: bicubic;
		}

		p {
			display: block;
			margin: 13px 0;
		}
	</style>
	<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" type="text/css" />
	<style type="text/css">
		@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);
	</style>

	<style type="text/css">
		@media only screen and (min-width:480px) {
			.mj-column-per-100 {
				width: 100% !important;
				max-width: 100%;
			}
		}
	</style>
	<style type="text/css">
		@media only screen and (max-width:480px) {
			table.mj-full-width-mobile {
				width: 100% !important;
			}

			td.mj-full-width-mobile {
				width: auto !important;
			}
		}
	</style>
	<style type="text/css">
		a,
		span,
		td,
		th {
			-webkit-font-smoothing: antialiased !important;
			-moz-osx-font-smoothing: grayscale !important;
		}
	</style>
</head>

<body style="background-color:#ffffff;">
	<div>
		<div style="background-color:#ffffff;">

			<div style="margin:0px auto;max-width:600px;">
				<div style="width: 100%; height: 20px;display: flex;gap: 12px;padding: 45px 0px;">
					<div style="width: 80px;">
						<img alt="Bóng đá tối sức khỏe logo"
							src="https://omtmjfkzasluxnepgyqh.supabase.co/storage/v1/object/sign/logo/logo.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvL2xvZ28uanBnIiwiaWF0IjoxNzA1MDQwNTU3LCJleHAiOjQ4NTg2NDA1NTd9.MIEb2mAqfUvj8afpqvmqEoPvZ8z6EzI6GFpq51hLwJQ&t=2024-01-12T06%3A22%3A19.090Z"
							style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;"
							 />
					</div>
					<h1 style="margin-left: 12px">Bóng đá tối sức khỏe Football Club</h1>
				</div>
				<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
					<tbody>
						<tr>
							<td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;text-align:center;">
								<div class="mj-column-per-100 mj-outlook-group-fix"
									style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
									<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"
										width="100%">
										<tbody>
											<tr>
												<td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
													<table border="0" cellpadding="0" cellspacing="0" role="presentation"
														style="border-collapse:collapse;border-spacing:0px;">
														<tbody>
															<tr>
																<!-- <td>
																	<img alt="Bóng đá tối sức khỏe logo" src="https://omtmjfkzasluxnepgyqh.supabase.co/storage/v1/object/sign/logo/logo.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvL2xvZ28uanBnIiwiaWF0IjoxNzA1MDM5MjQ1LCJleHAiOjE3MzY1NzUyNDV9.MGcNquvf4nNPeJPUZ6rObGKrcJlzuPjsYcnsSE12flc&t=2024-01-12T06%3A00%3A27.019Z" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" />
																	<h1>Bóng đá tối sức khỏe Football Club</h1>
																</td> -->
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
											<tr>
												<td align="center" style="font-size:0px;padding:0;word-break:break-word;">
													<table border="0" cellpadding="0" cellspacing="0" role="presentation"
														style="border-collapse:collapse;border-spacing:0px;">
														<tbody>
															<tr>
																<td style="width:600px;">
																	<a href="https://google.com" target="_blank"
																		style="color: #2e58ff; text-decoration: none;">
																		<img alt="image description" height="auto"
																			src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;h=400&amp;q=80"
																			style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;"
																			width="600" />
																	</a>
																</td>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div style="margin:0px auto;max-width:600px;">
				<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
					<tbody>
						<tr>
							<td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
								<div class="mj-column-per-100 mj-outlook-group-fix"
									style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
									<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"
										width="100%">
										<tbody>
											<tr>
												<td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
													<div
														style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:24px;font-weight:700;line-height:32px;text-align:center;color:#434245;">
														<h1 style="margin: 0; font-size: 24px; line-height: normal; font-weight: bold;">Xin chào ${name}, cảm ơn
															bạn đã đăng ký thi đấu</h1>
													</div>
												</td>
											</tr>
											<tr>
												<td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
													<div
														style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;font-weight:400;line-height:32px;text-align:left;color:#434245;">
														Bóng đá tối sức khỏe FC xác nhận bạn đã đăng ký tham gia thi đấu. Thông tin chi tiết về trận
														đấu được đính kèm bên dưới
													</div>
												</td>
											</tr>
											<tr>
												<td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
													<div
														style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#434245;">
														<ul>
															<li style="padding-bottom: 20px"><strong>Thời gian: </strong> <span
																	style="color:red;font-weight: bold">${time}</span></li>
															<li style="padding-bottom: 20px"><strong>Địa điểm: </strong> <span
																	style="color:red;font-weight: bold">Sân số ${filedNumber || 'updating...'} - ${
                                    location || 'updating'
                                  }</span></li>
														</ul>
													</div>
												</td>
											</tr>
											<tr>
												<td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
													<div
														style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px;text-align:left;color:#434245;font-style: italic">
														*Note: Vui lòng đi đúng giờ để không ảnh hưởng tới mọi người. Nếu bạn đi trễ sẽ bị phạt theo
														nội quy của đội bóng.
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</body>
</html>
  `;
};

module.exports = generateEmailTemplate;
