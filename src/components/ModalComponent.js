import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

function EnterModal() {
	//Modal open state
	const [isOpen, setIsOpen] = useState(true);

	const handleClose = () => setIsOpen(false);
	//const handleOpen = () => setIsOpen(true);

	return (
		<div>
			<Modal
				show={isOpen}
				onHide={handleClose}
				centered
				fullscreen=''
				size='lg'
			>
				<ModalHeader closeButton>Modal Title</ModalHeader>
				<ModalBody>Modal Body</ModalBody>
				<ModalFooter>
					<Button color='info'>Submit</Button>
					<Button color='info' onClick={handleClose}>
						No Thanks
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default EnterModal;
