import React, { useContext } from 'react';
import '../css/App.css';
import { AlertContext } from './AlertContext';

export default function AlertPopup(props) {
    return (
        <AlertContext.Consumer>
        {
          (context) => {
            return (
                <p className={context.hide ? "Hide" : ""}>{context.message}</p>
                );
          }
        }
      </AlertContext.Consumer>
    );
}