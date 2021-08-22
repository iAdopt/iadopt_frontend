import {useSelector, useDispatch} from "react-redux"
import { bindActionCreators } from 'redux';
import { actionCreators } from "../../../../stateStore/index"
import styles from './Style.module.scss';

      
export const AnimalsV01 = ({

}:any) => {

/* ANIMALS DATA STATE FROM REDUX*/
const animalsData = useSelector((state) => state.allAnimals[0]);  //get all animals
const singleAnimal = useSelector((state) => state.animal);  //get single animals
console.log(animalsData);


    return(
        <div className={styles.animalsV01}>
            {animalsData.map((animal, i) => (
                <div key={i} className={styles.animalBoxv01}>
                    <img src={animal.image} alt="animal picture" />
                    <h3>{animal.name}</h3> 
                    <div className={styles.animalBoxInfo}>
                        <p>{animal.age} |</p>
                        <p>{animal.gender == 'female' ? '♀ Hembra' : '♂ Macho'} |</p>
                        <p>{animal.location}</p>
                    </div>
                </div>
            
            ))}
        </div> 
    )
 }
      
      
 