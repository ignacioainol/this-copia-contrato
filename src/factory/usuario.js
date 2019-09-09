import md5 from 'md5';

const MODEL = 'Usuario';
const API_URL = process.env.REACT_APP_API_USUARIOS;
const usuario = getUsuario();

export async function login(username,password) {
    let pass = password ? md5(password) : '';
    const object = {
      login: username,
      password: pass
    };
    const aux = await fetch(API_URL+'/login', {
      method: "POST", 
      body: JSON.stringify(object), 
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      }
    });
    const data = await aux.json();
    if (aux.status === 200) {
      sessionStorage.setItem(MODEL,JSON.stringify(data));
      return data;
    }
  
    return null;
  }

  export function getUsuario() {
    return JSON.parse(sessionStorage.getItem(MODEL) || null);
  }