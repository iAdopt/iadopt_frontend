
import styles from './Style.module.scss';
import { useState, useRef } from 'react'
import {SelectSearch} from '../Filters/Inputs/Select'


      
export const RegisterForm = (props:any) => {
    const [user, setUserState] = useState({
        email: "",
        password: "",
        centerName: "",
        centerAdress: "",
        selectState:""
    });
    const form = useRef(null);

    const submitForm = async (event:any) => {
        event.preventDefault();
        console.log(user)
        try {
            await fetch('http://localhost:8080/api/centers/post/user', {
                method: 'POST',
                headers: {
                    'Accept' : 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(user)
            });

        } catch(error) {
            console.error('Error to submit information:', error)
        }
     }

    const handleChange = (e:any) => {
        setUserState({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div className={styles.adminAddAnimal}>
            <h3>Registrarse como nuevo centro</h3>
            <form  className={styles.form} ref={form} onSubmit={submitForm}>
                <div className={styles.block}>
                    <div className={styles.inputs}>
                        <label htmlFor="centerName">Nombre del centro:</label>
                        <input type="text" name="centerName" placeholder="Nombre del centro" value={user.centerName} onChange={handleChange}/>
                    </div>
                    <div className={styles.inputs}>
                        <label htmlFor="centerAdress">Dirección del centro:</label>
                        <input type="text" name="centerAdress" placeholder="Dirección" value={user.centerAdress} onChange={handleChange}/>
                    </div>
                    <div className={styles.inputs}>
                        <SelectSearch />
                    </div>
                    <div className={styles.inputs}>
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" placeholder="Email" value={user.email} onChange={handleChange}/>
                    </div>
                    <div className={styles.inputs}>
                        <label htmlFor="password">Password:</label>
                        <input type="text" name="password" placeholder="Contraseña" value={user.password} onChange={handleChange}/>
                    </div>
                </div>
                <input type="submit" value="Iniciar Sesión"></input>
            </form>
        </div> 
    )
 }
