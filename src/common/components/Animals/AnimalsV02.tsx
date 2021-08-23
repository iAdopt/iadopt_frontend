import {useSelector, useDispatch} from "react-redux"
import { bindActionCreators } from 'redux';
import { actionCreators } from "../../../../stateStore/index"
import Image from 'next/image'
import localizationMark from '../../../../public/localization.png'
import styles from './Style.module.scss';

      
export const AnimalsV02 = ({

}:any) => {

/* ANIMALS DATA STATE FROM REDUX*/
const animalsData = useSelector((state) => state.allAnimals[0]);  //get all animals
const singleAnimal = useSelector((state) => state.animal);  //get single animals
// console.log(animalsData);
const label = false;

    return(
        <div className={styles.animalsV02}>
            {animalsData.map((animal, i) => (
                <div key={i} className={styles.animalBoxv02}>
                    <div className={styles.photo} style={{backgroundImage: "url(" + animal.image + ")"}}></div>
                    <div className={styles.animalBoxInfo}>
                        <div>
                            <h3>{animal.name} 
                                {label ? <div className={styles.label}>{animal.label}</div> : ''}
                            </h3> 

                            <p><b>Edad:</b>{animal.age}</p>
                            <p><b>Género:</b>{animal.gender == 'female' ? '♀ Hembra' : '♂ Macho'}</p>
                            <p><b>Carácter:</b></p>                           
                        </div>
                        <div>
                            <h4>Descripción:</h4>
                            <p>{animal.description}</p>
                        </div>
                        <div>
                            <h4>Información addicional:</h4>
                            <p><b>Vacunación:</b>{animal.name}</p>
                            <p><b>Esterilización:</b>{animal.name}</p>
                            <p><b>Identificación CIF:</b>{animal.name}</p>
                            <p><b>Otras patologías:</b>{animal.name}</p>
                        </div>
                        <div>
                            <h4>Contacto</h4>
                            <p><b>Localización:</b>{animal.location}</p>
                        </div>
                        <div className={styles.buttonsBox}>
                            <button> Quiero adoptar a {animal.name}! </button>
                            <button> Chat </button>
                        </div>
                    </div>
                </div>
            
            ))}
        </div> 
    )
 }

      
      
 