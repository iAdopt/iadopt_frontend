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
console.log('ANIMALS DATA:::', animalsData);
    return(
        <div className={styles.animalsV01}>
            {animalsData != undefined && animalsData.length > 0 ? (animalsData.map((animal:any, i:number) => (
                <div key={i} className={styles.animalBoxv01}>
                        <Link href={{pathname: ROUTE_ANIMAL_ID, query:{id: animal.id}}} >
                            {/* <a target="_blank"> */}
                                {animal.blob != null && animal.blob != "" ? 
                                    (<div style={{border: '2px solid #fff', borderRadius: '24px'}}><Image className={styles.photo} src={'data:image/*;base64,'+ animal.blob} width={305} height={181} alt={animal.name}/></div>) : 
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
                            { Object.entries(comarcas).forEach(comarca => {
                                (parseInt(comarca[0]) == animal.location) ? <p>{comarca[1]}</p> : ''
                            })}
                        </div>
                </div>          
            ))) : (<div>Loading...</div>)}
       </div> 
    )
}
      

