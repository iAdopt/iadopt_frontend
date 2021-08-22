import styles from './Styles.module.scss';
import Image from 'next/image'
import v01 from '../../../../../public/v01.png'
import v02 from '../../../../../public/v02.png'
import { useState, useEffect, useRef } from 'react'


export const VisualFilter = ({
...props
}) => { 
const [stateVisual, setStateVisual] = useState({ v01:true, v02:false});
const buttonFocused = useRef(null);

useEffect(() => {
    buttonFocused.current.focus();
}, []);


const handleClickv01 = (event:any) => {
    setStateVisual(() => ({v01:true, v02:false}));
}

const handleClickv02 = (event:any) => {
    setStateVisual(() => ({v01:false, v02:true})); 
}

return(
    <div className={styles.container}>
        <p className={styles.result}><strong>Resultado:</strong></p>
        <div className={styles.visualBox}>
            <p><strong>Visualización:</strong></p>

            <button className={stateVisual.v01  ? 'activeClass' : ''} onClick={handleClickv01} ref={buttonFocused}>
                <Image id="v01" src={v01} width="56" alt="visualization01"/>
            </button>
            <button className={stateVisual.v02  ? 'activeClass' : ''} onClick={handleClickv02}>
                <Image id="v02" src={v02} width="56" alt="visualization02"/>
            </button>
        </div>     
    </div>
)
}