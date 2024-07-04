import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const Section = styled.section`
  
`;

const Title = styled.h2`
  font-size: 28px;
 
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 10px 0;
  font-size: 18px;
`;

const Icon = styled.i`
  margin-right: 10px;
  color: white;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ContactButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailText, setEmailText] = useState('');
  const [email, setEmail] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSendEmail = () => {
    console.log('Sending email:', email);
    console.log('Message:', emailText);
    setIsModalOpen(false);
  };

  return (
    <Section>
      <Title>Contact Me</Title>
      <List>
        <ListItem>
          <Icon className="fa-brands fa-linkedin-in"></Icon>
          <Link href="https://www.linkedin.com/in/rodrigo-zuñiga-182153114/">Rodrigo Zuniga</Link>
        </ListItem>
        <ListItem>
          <Icon className="fa-brands fa-salesforce"></Icon>
          <Link href="https://www.salesforce.com/trailblazer/rodrigozuniga">My Trailhead</Link>
        </ListItem>
        <ListItem>
          <Icon className="fa-brands fa-github"></Icon>
          <Link href="https://github.com/RodrigoZuniga42">RodrigoZuniga42</Link>
        </ListItem>
      </List>
      <ContactButton onClick={openModal}>Contact Me</ContactButton>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        emailText={emailText}
        setEmailText={setEmailText}
        email={email}
        setEmail={setEmail}
        handleSendEmail={handleSendEmail}
      />
    </Section>
  );
};

export default Contact;