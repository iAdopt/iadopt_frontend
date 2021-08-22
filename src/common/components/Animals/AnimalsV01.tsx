import Image from 'next/image'
import styles from './Style.module.scss';
import {useSelector, useDispatch} from "react-redux"
import { bindActionCreators } from 'redux';
import { actionCreators } from "../../../../stateStore/index"
      
export const AnimalsV01 = ({

}:any) => {

/* ANIMALS DATA STATE FROM REDUX*/
const animalsData = useSelector((state) => state.allAnimals);  //get all animals
const singleAnimal = useSelector((state) => state.animal);  //get single animals
console.log(animalsData);

    return(
    <div>
        A
        
    </div> 
    )
 }
      
      
 