import {BrowserRouter, Route, Routes} from "react-router-dom";
import SocialTab from "./components/SocialTab/SocialTab"
import {AuthProvider} from './contexts/Auth';
import {MessageProvider} from './contexts/Message'
import Main from "./pages/Main/Main";
import Form from "./pages/Form/Form";
import Gallery from "./pages/Gallery/Gallery";
import Admin from "./pages/Admin/Admin";
import Authorization from "./pages/Authorization/Authorization";
import Registration from "./pages/Registration/Registration";
import Profile from "./pages/Profile/Profile";
import React from "react";
import styles from './App.module.css'
import {TopBar} from './components/TopBar'
import {Message} from './components/Message'

export function App() {
    return (
        <div className={styles.application}>
            <AuthProvider>
                <MessageProvider>
                    <SocialTab className={styles.social_tab_area}/>
                    <BrowserRouter>
                        <TopBar/>
                        <Routes>
                            <Route path="/" element={<Main/>}/>
                            <Route path="/Form" element={<Form/>}/>
                            <Route path="/Gallery" element={<Gallery/>}/>
                            <Route path="/Admin" element={<Admin/>}/>
                            <Route path="/Authorization" element={<Authorization/>}/>
                            <Route path="/Registration" element={<Registration/>}/>
                            <Route path="/Profile" element={<Profile/>}/>
                            <Route
                                path="*"
                                element={
                                    <main style={{padding: "1rem", margin: "30vh 0px", font: "50px sans-serif"}}>
                                        <p color='white'>NO PAGE?</p>
                                    </main>
                                }
                            />
                        </Routes>
                    </BrowserRouter>
                    <Message/>
                </MessageProvider>
            </AuthProvider>
        </div>
    );
}
