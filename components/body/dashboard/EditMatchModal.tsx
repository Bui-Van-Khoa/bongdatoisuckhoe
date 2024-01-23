'use client'
import { FC, useEffect, useState } from 'react';
import { Button, Label, Modal, Select, TextInput } from 'flowbite-react';
import { listMatchPlace } from './list-match-place';
import { DatePicker } from 'antd';
import type { GetProps } from "antd";
import dayjs from "dayjs";

type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

const EditMatchModal: FC = ({ }) => {

	const [formData, setFormData] = useState({
		place: null,
		time: null,
		field_number: null,
		address: null,
	
	})

	const changeFormData = (data: any) => {
		console.log("data", data)
		// const key = data.type;
		// const val = data.val;
	}
	const handleSubmitForm = async (e: any) => {
		e.preventDefault();

	};

	const disabledDate: RangePickerProps["disabledDate"] = (current) => {
		// Can not select days before today and today
		return current && current < dayjs().endOf("day");
	};



	return (
		<>
			<Modal show={true} >
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
								onChange={(e) => changeFormData({ type: 'time', val: e?.get})}
							/>
						</div>
						<div>
							<div className="mb-2 block">
								<Label htmlFor="field-number" value="Sân số mấy" />
							</div>
							<TextInput
								id="field-number"
								type="number"
								placeholder="Vui lòng điền số sân!"
								required
								onChange={(e) => changeFormData({ type: 'time', val: e.target.value })}

							 />
						</div>

						<Button type="submit">Submit</Button>
					</form>
				</Modal.Body>
			</Modal>

		</>
	);
};

export default EditMatchModal;
