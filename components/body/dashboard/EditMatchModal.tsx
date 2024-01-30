'use client'
import { FC, useEffect, useState } from 'react';
import { Alert, Button, Label, Modal, Select, TextInput } from 'flowbite-react';
import { listMatchPlace } from './list-match-place';
import { DatePicker } from 'antd';
import type { GetProps } from "antd";
import dayjs from "dayjs";
import { HiInformationCircle } from 'react-icons/hi';
import { updateNextMatch } from '@/lib/api/match';

type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

interface UpdateNextMatchProps {
	isOpen: boolean;
	closeModalStatus: () => void;
}

const EditMatchModal: FC<UpdateNextMatchProps> = ({ isOpen, closeModalStatus }) => {

	const [isDatePickerAlert, setIsDatePickerAlert] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const [formData, setFormData] = useState({
		place: listMatchPlace[0].name,
		time: null,
		field_number: null,
		address: listMatchPlace[0].address

	})

	const convertTIme = (val: any) => {
		const inputTime = new Date(val);
		const gmtPlus7Options = { timeZone: 'Asia/Bangkok' }; // 'Asia/Bangkok' represents GMT+7
		const gmtPlus7Time = inputTime.toLocaleString('en-US', gmtPlus7Options);
		return gmtPlus7Time;
	}

	const changeFormData = (data: any) => {
		if (data.type === 'place') {
			const parseData = JSON.parse(data.val)
			setFormData({
				...formData,
				place: parseData.name,
				address: parseData.address
			})
		} else {
			const key = data.type;
			const val = data.val;
			setFormData({
				...formData,
				[key]: val
			})
		}

	}
	const handleSubmitForm = async (e: any) => {
		setIsLoading(true)
		e.preventDefault();
		if (formData.time === null || formData.time === undefined) {
			setIsDatePickerAlert(true);
			setIsLoading(false)
			return
		}
		setIsDatePickerAlert(false);

		const error = await updateNextMatch(formData)
		if(error === null) {
			alert("Bạn đã cập nhật trận đấu thành công!")
		}
		setIsLoading(false)
		closeModalStatus()
	};

	const disabledDate: RangePickerProps["disabledDate"] = (current:any) => {
		// Can not select days before today and today
		return current < dayjs().endOf("day");
	};

	const resetForm = () => {
		setFormData({
			place: listMatchPlace[0].name,
			time: null,
			field_number: null,
			address: listMatchPlace[0].address
		});
		setIsDatePickerAlert(false);
		closeModalStatus();
	}

	useEffect(() => {

	}, [isDatePickerAlert])


	return (
		<>
			<Modal show={isOpen} onClose={() => resetForm()}>
				<Modal.Header>Chỉnh sửa thông tin trận đấu tiếp theo</Modal.Header>
				<Modal.Body>
					<form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
						<div>
							<div className="mb-2 block">
								<Label htmlFor="place" value="Tên sân" />
							</div>
							<Select
								id="place"
								required
								onChange={(e) => changeFormData({ type: 'place', val: e.target.value })} >
								{listMatchPlace.map((el: any) => {
									return (
										<option key={el.id} value={JSON.stringify(el)}>{el.name}</option>
									)
								}
								)}
							</Select>
						</div>
						<div>
							<div className="mb-2 block">
								<Label htmlFor="time" value="Thời gian" />
							</div>
							<DatePicker
								format="YYYY-MM-DD HH:mm:ss"
								disabledDate={disabledDate}
								showTime={{ defaultValue: dayjs("00:00:00", "HH:mm:ss") }}
								onChange={(e) => {
									changeFormData({ type: 'time', val: convertTIme(e?.toISOString()) })
								}}
							/>
							<Alert color="failure" icon={HiInformationCircle} className={`mt-1 ${isDatePickerAlert ? 'block' : 'hidden'}`}>
								Đây là trường bắt buộc
							</Alert>
						</div>
						<div>
							<div className="mb-2 block">
								<Label htmlFor="field_number" value="Sân số mấy" />
							</div>
							<TextInput
								id="field_number"
								type="number"
								placeholder="Vui lòng điền số sân!"
								required
								onChange={(e) => changeFormData({ type: 'field_number', val: e.target.value })}

							/>
						</div>

						<Button type="submit" isProcessing={isLoading}>Submit</Button>
					</form>
				</Modal.Body>
			</Modal>

		</>
	);
};

export default EditMatchModal;
