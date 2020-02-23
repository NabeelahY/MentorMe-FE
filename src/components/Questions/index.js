import React, { useState } from 'react';
import { NavBar } from '../NavBar';
import Questions from './Questions';
import  ModalForm from './ModalForm';

export const Home = () => {
  const [visible, setVisibility] = useState(false);

  const displayModal = () => {
    setVisibility(!visible);
  };
  return (
    <>
      <NavBar displayModal={displayModal} />
      <Questions visible={visible} />
      <ModalForm setVisibility={setVisibility} visible={visible} />
    </>
  );
};
