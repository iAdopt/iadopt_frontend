import {useSelector, useDispatch} from "react-redux"
import { bindActionCreators } from 'redux';
import { actionCreators } from "../../../../stateStore/index"
import Image from 'next/image'
import localizationMark from '../../../../public/localization.png'
import styles from './Style.module.scss';

      
export const AnimalsV01 = ({

}:any) => {

/* ANIMALS DATA STATE FROM REDUX*/
const animalsData = useSelector((state) => state.allAnimals[0]);  //get all animals
const singleAnimal = useSelector((state) => state.animal);  //get single animals


    return(
        <div className={styles.animalsV01}>
            {animalsData.map((animal, i) => (
                <div key={i} className={styles.animalBoxv01}>
                    <div className={styles.photo} style={{backgroundImage: "url(" + animal.image + ")"}}></div>
                    {/* <Image src={animal.image} alt="localization mark" width="258px" height="177px"/> */}
                    <h3>{animal.name}</h3> 
                    <div className={styles.animalBoxInfo}>
                        <p>{animal.age} |</p>
                        <p>{animal.gender == 'female' ? '♀ Hembra' : '♂ Macho'} |</p>
                        {/* <Image src={localizationMark} alt="localization mark" width="12px" height="16px"/> */}
                        <p>{animal.location}</p>
                    </div>
                </div>
            
            ))}
        </div> 
    )
 }
      
      
 