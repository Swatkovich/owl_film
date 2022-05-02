import React, { useState } from 'react';

import styles from './App.css';

import HeaderTab from './components/HeaderTab/HeaderTab';
import BodyTab from './components/BodyTab/BodyTab';
import SocialTab from './components/SocialTab/SocialTab';
import FormTab from './components/FormTab/FormTab';
import Menu from './components/Menu/Menu';


export default function App() {
  const [page, setPage] = useState(true);

  return (
    <div className="application">
          <HeaderTab/>
          <BodyTab view = {page}/>
          <SocialTab />
          <FormTab view = {page} />
          <Menu view = {page} />
    </div>
  );
}
