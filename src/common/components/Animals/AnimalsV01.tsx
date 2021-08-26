/* eslint-disable @next/next/link-passhref */
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from 'redux';
import { actionCreators } from "../../../../stateStore/index"
import localizationMark from '../../../../public/localization.png'
import styles from './Style.module.scss';
import Link from 'next/link'


      
export const AnimalsV01 = ({

}:any) => {

/* ANIMALS DATA STATE FROM REDUX*/
const animalsData = useSelector((state) => state.allAnimals[0]);  //get all animals
const ROUTE_ANIMAL_ID = "/animal/[id]";

    return(
        <div className={styles.animalsV01}>
            {animalsData.map((animal, i) => (
                <div key={i} className={styles.animalBoxv01}>
                        <Link href={{pathname: ROUTE_ANIMAL_ID,query: {id: animal.id}}} >
                            {/* <a target="_blank"> */}
                                <div className={styles.photo} style={{backgroundImage: "url(" + animal.image + ")"}}></div>
                            {/* </a> */}
                        </Link>
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
      
      
 