


import {useState} from 'react';

const usePassword = () => {
    const [hidePasswordIcon, sethidePasswordIcon] =  useState('eye-off-outline');
    const [hidePassword, sethidePassword] = useState(true);

    const showPassword = ()=>{

        (hidePasswordIcon === 'eye-off-outline')
        ? (
            sethidePasswordIcon('eye-outline'),
            sethidePassword(false)
            )
        : (
            sethidePasswordIcon('eye-off-outline'),
            sethidePassword(true)
            );
    };

    return({
        hidePassword,
        hidePasswordIcon,
        showPassword,
    });

};

export default usePassword;
