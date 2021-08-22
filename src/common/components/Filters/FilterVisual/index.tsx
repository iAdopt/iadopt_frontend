import styles from './Styles.module.scss';
import Image from 'next/image'
import v01 from '../../../../../public/v01.png'
import v02 from '../../../../../public/v02.png'


export const VisualFilter = ({
stateVisual,
setStateVisual,
...props
}:any) => { 

/* FILTERS VIEWS BUTTONS HANDLERS */
const handleClickv01 = () => {
    setStateVisual(() => ({v01:true, v02:false}));
}

const handleClickv02 = () => {
    setStateVisual(() => ({v01:false, v02:true})); 
}

return(
    <div className={styles.container}>
        <p className={styles.result}><strong>Resultado:</strong></p>
        <div className={styles.visualBox}>
            <p><strong>Visualización:</strong></p>

            <button style={stateVisual.v01 ? (istyles.activeClass): (istyles.disabledClass)} onClick={handleClickv01}>
                <Image id="v01" src={v01} width="56" alt="visualization01"/>
            </button>
            <button style={stateVisual.v02 ? (istyles.activeClass): (istyles.disabledClass)} onClick={handleClickv02}>
                <Image id="v02" src={v02} width="56" alt="visualization02"/>
            </button>
        </div>     
    </div>
)
}

const istyles = {
    activeClass: {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
        backgroundColor:'#ffd47d'
    },
    disabledClass: {
        backgroundColor: '#FFE9AD'
    }
};