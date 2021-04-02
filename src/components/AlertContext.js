import React, { useState, Provider } from 'react';

export const AlertContext = React.createContext();

export function AlertProvider(props) { 
    const [message, setMessage] = useState('');
    const [hide, setHide] = useState(true);

    function showMessage(message) {
        setMessage(message);
        setHide(false);
        setTimeout(() => setHide(true), 5000);
    }
    
    return (
         <AlertContext.Provider value={{message: message, hide: hide, showMessage: showMessage}}>
             {props.children}
         </AlertContext.Provider>
    );
}
