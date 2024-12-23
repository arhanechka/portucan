import { useState } from 'react';

function useModal(modalData) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (modalKey) => {
    setModalContent(modalData[modalKey]);  
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent('');
  };

  return {
    isModalOpen,
    modalContent,
    openModal,
    closeModal
  };
}

export default useModal;
