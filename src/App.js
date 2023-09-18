import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { createContext } from 'react'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'react-toastify/dist/ReactToastify.css';
import { PrimeReactProvider } from 'primereact/api';
import { ProfileScreen } from './components/screens/profile/profile-screen';
import { ProtectedRoute } from "./components/protectors/route-protector";
import { LandingScreen } from "./components/screens/landing/landing-screen";
import { Header } from "./components/screens/layout/header";
import { loginController } from "./components/controllers/login-controller";


function App() {
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>} >
            <Route index element={<LandingScreen />} ></Route>
            <Route path="profile" element={<ProtectedRoute><ProfileScreen /></ProtectedRoute>} />
          </Route>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  );
}

export default App;