/* eslint-disable @next/next/link-passhref */
import { useSelector } from "react-redux"
import styles from './Style.module.scss';
import Link from 'next/link'
import Image from 'next/image'
import globalImg from '../../../../public/noAnimImg.svg';
import comarcas from '../../utils/comarcas/comarcas.json';


      
export const AnimalsV01 = ({
id
}:any) => {

/* ANIMALS DATA STATE FROM REDUX*/
const animalsData = useSelector((state) => state.allAnimals[1]);  //get all animals
const ROUTE_ANIMAL_ID = "/animal/[id]";

    return(
        <div className={styles.animalsV01}>
            {animalsData != undefined && animalsData.length > 0 ? (animalsData.map((animal, i) => (
                <div key={i} className={styles.animalBoxv01}>
                        <Link passHref={true} href={{pathname: ROUTE_ANIMAL_ID, query:{id: animal.id}}} >
                            {/* <a target="_blank"> */}
                            {animal.blob  != null ? 
                                (<Image className={styles.photo} src={'data:image/*;base64,'+ animal.blob} width={305} height={181} alt={animal.name}/>) : 
                                (<Image src={globalImg} width={1} height={180} alt="global"/>)
                            }
                            {/* </a> */}
                        </Link>
                        <div className={styles.identification}>
                            <h3>{animal.name}</h3> 
                            {animal.status ? <div className={animal.status == 'urgent' ? styles.labelUrgent : styles.labelNew}>{animal.status}</div> : ''}
                        </div>
                        <div className={styles.animalBoxInfo}>
                            <p>{animal.years !== 0 ? ` ${animal.years} año(s) |` : `${animal.months} meses |`}</p> {/* Pending to get years and months  */}                            
                            <p>{animal.gender == 'female' ? '♀ Hembra' : '♂ Macho'} |</p>
                            {Object.entries(comarcas).map(comarca => {
                                animal.location == comarca.keys ? (<p>{animal.location}</p>) : (<></>)
                            })}
                            
                        </div>
                </div>          
            ))) : (<div>Loading...</div>)}
        {/* <p>{animal.age != 0 ? `${animal.age} año(s)` : (`${animal.age} meses`)}</p> */}
       </div> 
    )
 }
      

