import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Main from './pages/Main/Main.jsx'
import App from './App';
import Form from './pages/Form/Form.jsx';
import Gallery from './pages/Gallery/Gallery.jsx';
import Admin from './pages/Admin/Admin';
import Authorization from './pages/Authorization/Authorization';
import Registration from './pages/Registration/Registration';
import Profile from './pages/Profile/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<App/>}>
          <Route path ="Main" element={<Main/>} />
          <Route path ="Form" element={<Form/>} />
          <Route path ="Gallery" element={<Gallery/>} />
          <Route path ="Admin" element={<Admin/>} />
          <Route path ="Authorization" element={<Authorization/>} />
          <Route path ="Registration" element={<Registration/>} />
          <Route path ="Profile" element={<Profile/>} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem", margin: "30vh 0px", font: "50px sans-serif"}}>
                <p color='white'>NO PAGE?</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
);

reportWebVitals();
