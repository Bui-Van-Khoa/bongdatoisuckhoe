'use client'
import { FC, useEffect, useState } from 'react';
import { insertUserToAccount } from '@/lib/api/users';
import { Button, Label, Modal, Select, TextInput } from 'flowbite-react';


interface UserInformationFormProps {
	isModalOpen: boolean;
	email: string;
	userId: any;
	closeModalStatus: () => void;
}

const UserInformationForm: FC<UserInformationFormProps> = ({
	isModalOpen,
	email,
	userId,
	closeModalStatus,
}) => {
	const [formData, setFormData] = useState({
		id: userId,
		user_name: null,
		position: 'Tiền đạo',
		number: null,
		height: null,
		weight: null,
		email: email,
	})

	const changeFormData = (data: any) => {
		const key = data.type;
		const val = data.val;

		setFormData({
			...formData,
			id:userId,
			email,
			[key]: val
		})
	}
	const handleSubmitForm = async (e:any) => {
		e.preventDefault();
		await insertUserToAccount(formData);
		closeModalStatus();
	};

	useEffect(() => {
		setFormData({
			...formData,
			id:userId,
			email,
		})
	},[email,userId])

	return (
		<>
			<Modal show={isModalOpen} >
				<Modal.Header>Vui lòng cập nhật thông tin của bạn</Modal.Header>
				<Modal.Body>
					<form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
						<div>
							<div className="mb-2 block">
								<Label htmlFor="name" value="Tên ingame" />
							</div>
							<TextInput
								id="name"
								type="text"
								placeholder="Vui lòng điền tên ingame của bạn!"
								required
								onChange={(e) => changeFormData({ type: 'user_name', val: e.target.value })} />
						</div>
						<div>
							<div className="mb-2 block">
								<Label htmlFor="position" value="Vị trí" />
							</div>
							<Select
								id="position"
								required
								onChange={(e) => changeFormData({ type: 'position', val: e.target.value })} >
								<option>Tiền đạo</option>
								<option>Tiền vệ</option>
								<option>Hậu vệ</option>
								<option>Thủ môn</option>
								<option>Dự bị</option>
								<option>Báo con</option>
							</Select>
						</div>
						<div>
							<div className="mb-2 block">
								<Label htmlFor="number" value="Số áo (Vui lòng điền chữ số)" />
							</div>
							<TextInput
								id="number"
								type="number"
								placeholder="Vui lòng điền số áo của bạn!"
								required
								onChange={(e) => changeFormData({ type: 'number', val: e.target.value })} />
						</div>
						<div>
							<div className="mb-2 block">
								<Label htmlFor="height" value="Chiều cao (cm)" />
							</div>
							<TextInput
								id="height"
								type="number"
								placeholder="Vui lòng điền chiều cao của bạn!"
								required
								onChange={(e) => changeFormData({ type: 'height', val: e.target.value })} />
						</div>
						<div>
							<div className="mb-2 block">
								<Label htmlFor="weight" value="Cân nặng (kg)" />
							</div>
							<TextInput
								id="weight"
								type="number"
								placeholder="Vui lòng điền cân nặng của bạn!"
								required
								onChange={(e) => changeFormData({ type: 'weight', val: e.target.value })} />
						</div>
						<Button type="submit">Submit</Button>
					</form>
				</Modal.Body>
			</Modal>

		</>
	);
};

export default UserInformationForm;
