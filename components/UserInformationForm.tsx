import { FC } from 'react';
import { Button, Modal, Form, Input, Select, InputNumber } from 'antd';
import { insertUserToAccount } from '@/lib/api/users';

const { Option } = Select;

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
  const handleSubmitForm = async (values: any) => {
    const accountForm = {
      id: userId,
      user_name: values.user_name,
      position: values.position,
      number: values.number,
      height: values.height,
      weight: values.weight,
      email: email,
    };
    await insertUserToAccount(accountForm);
    closeModalStatus();
  };

  return (
    <div>
      <Modal
        title={
          <p className="text-black/[.88] text-xl font-bold">
            Vui lòng cập nhật thông tin của bạn
          </p>
        }
        open={isModalOpen}
        closable={false}
        maskClosable={true}
        footer={null}
      >
        <Form layout="vertical" onFinish={handleSubmitForm}>
          <Form.Item
            label="Tên ingame"
            name="user_name"
            rules={[{ required: true, message: 'Đây là trường bắt buộc' }]}
          >
            <Input placeholder="Vui lòng điền tên ingame của bạn!" />
          </Form.Item>
          <Form.Item
            label="Vị trí"
            name="position"
            rules={[{ required: true, message: 'Đây là trường bắt buộc' }]}
          >
            <Select placeholder="Vui lòng điền vị trí của bạn!" allowClear>
              <Option value="Tiền đạo">Tiền đạo</Option>
              <Option value="Tiền vệ">Tiền vệ</Option>
              <Option value="Hậu vệ">Hậu vệ</Option>
              <Option value="Thủ môn">Thủ môn</Option>
              <Option value="Dự bị">Dự bị</Option>
              <Option value="Báo con">Báo con</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Số áo"
            name="number"
            rules={[{ required: true, message: 'Đây là trường bắt buộc!' }]}
          >
            <Input type="number" placeholder="Vui lòng điền số áo của bạn!" />
          </Form.Item>
          <Form.Item
            label="Chiều cao (cm)"
            name="height"
            rules={[{ required: true, message: 'Đây là trường bắt buộc' }]}
          >
            <Input
              type="number"
              placeholder="Vui lòng điền chiều cao của bạn!"
            />
          </Form.Item>
          <Form.Item
            label="Cân nặng (kg)"
            name="weight"
            rules={[{ required: true, message: 'Đây là trường bắt buộc' }]}
          >
            <Input
              type="number"
              placeholder="Vui lòng điền cân nặng của bạn!"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="bg-blue-600">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UserInformationForm;
