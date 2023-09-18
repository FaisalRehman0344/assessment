import React, { useEffect, useState } from "react";
import './profile.css'
import { loginController } from "../../controllers/login-controller";
import { Dialog, } from 'primereact/dialog';
import { Button } from "primereact/button";
import { InputNumber } from 'primereact/inputnumber';
import { toast } from "react-toastify";
import { RadioButton } from 'primereact/radiobutton';
import { ProfileController } from "../../controllers/profile-controller";

export const ProfileScreen = () => {
    let [userData, setUserData] = useState(loginController.getUserData());

    const [visible, setVisible] = useState(localStorage.getItem('firstLogin') === 'true');
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');

    const DialogFooter = (<>
        <Button onClick={updateData} label="Update" icon="pi pi-check"></Button>
    </>);


    function updateData() {
        if (!age || !gender) {
            toast.info('Please input all fields');
            return;
        }
        if (age) {
            userData.age = age;
        }
        if (gender) {
            userData.gender = gender;
        }
        ProfileController.updateUser(userData);
        setUserData(userData);
        setVisible(false);
    }

    return <>
        <div className="main display-center">
            <div onClick={() => setVisible(true)} className="card display-center justify-content-between">
                <img src={userData.photoURL} className="profile-img" alt="" />
                <div className="text-center">
                    <h3>{userData.displayName}</h3>
                    <p>{userData.email}</p>
                    <p>Gender: <span style={{ fontWeight: 'bolder' }}>{userData.gender}</span></p>
                    <p>Age: <span style={{ fontWeight: 'bolder' }} >{userData.age}</span></p>
                </div>
            </div>
        </div>
        <Dialog header="Update Profile" footer={DialogFooter} visible={visible} style={{ width: '30vw', fontSize: '16px' }}>
            <div className="d-block" style={{ padding: '2rem' }}>
                <div className="col">
                    <label htmlFor="age" className="font-bold block mb-2">Age:</label>
                    <InputNumber className="w-100" maxLength="2" inputId="age" value={age} onValueChange={(e) => setAge(e.value)} />
                </div>
                <div className="col mt-5">
                    <label className="font-bold block mb-2">Gender:</label>
                    <div className="w-100 row">
                        <div className="col">
                            <RadioButton inputId="male" value="Male" onChange={(e) => setGender(e.value)} checked={gender === 'Male'} />
                            <label htmlFor="male" className="mx-1">Male</label>
                        </div>
                        <div className="col">
                            <RadioButton inputId="female" value="Female" onChange={(e) => setGender(e.value)} checked={gender === 'Female'} />
                            <label htmlFor="female" className="mx-1">Female</label>
                        </div>
                    </div>
                </div>
            </div>

        </Dialog>
    </>;
}