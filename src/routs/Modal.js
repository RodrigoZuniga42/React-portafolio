import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Content = styled.div`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1001;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #333;
`;

const Field = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: black;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  resize: none;
  height: 100px;
`;

const SendButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Modal = ({ isOpen, onClose, emailText, setEmailText, email, setEmail, handleSendEmail }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Overlay>
      <Content>
        <CloseButton onClick={onClose}>×</CloseButton>
        <h2 style={{ fontSize: '24px', marginBottom: '20px', color: 'black' }}>Send me Your Idea</h2>
        <Field>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </Field>
        <Field>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            value={emailText}
            onChange={(e) => setEmailText(e.target.value)}
            placeholder="Enter your message"
          />
        </Field>
        <SendButton onClick={handleSendEmail}>Send</SendButton>
      </Content>
    </Overlay>,
    document.getElementById('modal-root')
  );
};

export default Modal;