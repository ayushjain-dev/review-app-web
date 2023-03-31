import React, { createContext } from 'react';

export const ContextManagerContext = createContext();

export function ContextManager({ children }) {
  // App Stroage & Env Config
  const config = {
    env: { ...process.env },
    storage: {
      getItem: (key) =>
        new Promise((resolve, reject) => {
          try {
            resolve(sessionStorage.getItem(key));
          } catch (e) {
            reject(e);
          }
        }),
      setItem: (key, value) =>
        new Promise((resolve, reject) => {
          try {
            resolve(sessionStorage.setItem(key, value));
          } catch (e) {
            reject(e);
          }
        }),
      removeItem: (key) =>
        new Promise((resolve, reject) => {
          try {
            resolve(sessionStorage.removeItem(key));
          } catch (e) {
            reject(e);
          }
        }),
      encryptedSetItem: (key, value) =>
        new Promise((resolve, reject) => {
          try {
            resolve(setCookie(key, value));
          } catch (e) {
            reject(e);
          }
        }),
      encryptedGetItem: (key) =>
        new Promise((resolve, reject) => {
          try {
            resolve(getCookie(key));
          } catch (e) {
            reject(e);
          }
        }),
      encryptedRemoveItem: (key) =>
        new Promise((resolve, reject) => {
          try {
            if (key === appStorage.USER_AUTH_DATA) {
              removeCookie(key);
              // window.location.reload();
            }
            resolve(removeCookie(key));
          } catch (e) {
            reject(e);
          }
        })
    }
	return <div>ContextManager</div>;
}

export default ContextManager;
