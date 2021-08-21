import styles from './Styles.module.scss';
import Image from 'next/image'
import v01 from '../../../../../public/v01.png'
import v02 from '../../../../../public/v02.png'
import { useState } from 'react'


export const VisualFilter = ({
...props
}) => { 
const [stateVisual, setStateVisual] = useState({ v01: true, v02:false});
const handleClick = (e:any) => {
    // setStateVisual((prevState:boolean) => ({}));
}
return(
    <div className={styles.container}>
        <p className={styles.result}><strong>Resultado:</strong></p>
        <div className={styles.visualBox}>
            <p><strong>Visualización:</strong></p>
            <button onClick={handleClick}>
                <Image src={v01} width="56" alt="visualization01"/>
            </button>
            <button autoFocus={stateVisual.v02}onClick={handleClick}>
                <Image src={v02} width="56" alt="visualization02"/>
            </button>
        </div>     
    </div>
)
}