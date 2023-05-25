


import {useState} from 'react';

const usePassword = () => {
    const [hidePasswordIcon, setHidePasswordIcon] =  useState('eye-off-outline');
    const [hideReafirmPasswordIcon, setHideReafirmPasswordIcon] =  useState('eye-off-outline');
    const [hidePassword, sethidePassword] = useState(true);
    const [hideReafirmPassword, setHideReafirmPassword] = useState(true);

    const showPassword = ()=>{

        (hidePasswordIcon === 'eye-off-outline')
        ? (
            setHidePasswordIcon('eye-outline'),
            sethidePassword(false)
            )
        : (
            setHidePasswordIcon('eye-off-outline'),
            sethidePassword(true)
            );
    };
    const showReafirmPassword = ()=>{

        (hideReafirmPasswordIcon === 'eye-off-outline')
        ? (
            setHideReafirmPasswordIcon('eye-outline'),
            setHideReafirmPassword(false)
            )
        : (
            setHideReafirmPasswordIcon('eye-off-outline'),
            setHideReafirmPassword(true)
            );
    };



    return ({
        hidePassword,
        hidePasswordIcon,
        hideReafirmPassword,
        hideReafirmPasswordIcon,
        showPassword,
        showReafirmPassword,
    });

};

export default usePassword;
