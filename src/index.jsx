// src/index.js

import React from 'react';
import styled from 'styled-components';

// Styled-components are used to create reusable styled elements.
// These styles will be applied to the modal components.

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #ffff; /* Use theme color for modal background */
  padding: 20px;
  border-radius: 8px; /* Rounded corners */
  max-width: 90%; /* Limit modal width */
`;

const ModalMessage = styled.p`
  font-size: 16px; /* Message font size */
  color: #989898; /* Use theme color for text */
`;

const CloseButton = styled.button`
  background-color: #74E39A; /* Use theme color for button background */
  color: #fff; /* Use theme color for button text */
  border: none; /* No border */
  cursor: pointer; /* Pointer cursor */
  padding: 8px 16px; /* Adjust padding */
  border-radius: 4px; /* Rounded corners */
`;

// The Modal component receives three props:
// - isOpen: Controls whether the modal is visible or hidden.
// - onClose: Callback function to close the modal.
// - message: The message or content to display within the modal.

export const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null; // If modal is not open, return null (hide the modal).

  return (
    <ModalOverlay onClick={onClose}>
      {/* Clicking outside the modal triggers the onClose function */}
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {/* Display the provided message */}
        <ModalMessage>{message}</ModalMessage>
        {/* Close button */}
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
