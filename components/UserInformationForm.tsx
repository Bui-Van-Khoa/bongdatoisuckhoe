'use client'
import { FC, useState } from 'react';
import { insertUserToAccount } from '@/lib/api/users';
import { Button, Modal } from 'flowbite-react';


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
	const [openModal, setOpenModal] = useState(false);
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
		<>
<Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>

		</>
	);
};

export default UserInformationForm;
