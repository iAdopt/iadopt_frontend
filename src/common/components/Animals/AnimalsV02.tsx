import {useSelector} from "react-redux"
import styles from './Style.module.scss';
import Image from 'next/image'
import globalImg from '../../../../public/noAnimImg.svg';
import comarcas from '../../utils/comarcas/comarcas.json';


      
export const AnimalsV02 = ({

}:any) => {

/* ANIMALS DATA STATE FROM REDUX*/
const animalsData = useSelector((state) => state.allAnimals[1]);  //get all animals
    return(
        <div className={styles.animalsV02}>
            {animalsData.map((animal:any, i:number) => (
                <div key={i} className={styles.animalBoxv02}>
                    {/* <div className={styles.photo} style={{backgroundImage: "url(data:image/jpeg;base64," + animal.image + ")"}}></div> */}
                    {animal.blob ? 
                        (<div style={{border: '2px solid #fff', borderRadius: '24px'}}><Image className={styles.photo} src={'data:image/*;base64,'+ animal.blob} width={257} height={257} alt={animal.name}/></div>) : 
                        (<Image src={globalImg} width={250} height={200} alt="global"/>)
                    }
                    <div className={styles.animalBoxInfo}>
                        <div>
                        <div className={styles.identification}>
                                <h3>{animal.name}</h3> 
                                {animal.status ? <span className={animal.status == 'urgent' ? styles.labelUrgent : styles.labelNew}>{animal.status}</span> : ''}
                            </div>

                            <p><b>Edad:</b>{animal.years != 0 ? ` ${animal.years} año(s) y ${animal.months} meses` : `${animal.months} meses`}</p>
                            <p><b>Género:</b>{animal.gender == 'female' ? '♀ Hembra' : '♂ Macho'}</p>
                            <div><p><b>Carácter:</b></p>    
                            {animal.tags ? animal.tags.map((e:string, i:number) => <span className={styles.tags} key={i}>{e}</span>) : <span className={styles.tags}>Sin descripción</span> }
                            </div>                       
                        </div>
                        <div>
                            <h4>Descripción:</h4>
                            <p>{animal.description}</p>
                        </div>
                        <div>
                            <h4>Información addicional:</h4>                            
                            <p><b>Vacunación:</b>{animal.vaccinated===true ? ' Sí' : ' No'}</p>
                            <p><b>Esterilización:</b>{animal.sterilized===true ? ' Sí' : ' No'}</p>
                            <p><b>Identificación CIF:</b>{animal.identified===true ? ' Sí':' No'}</p>
                            <p><b>Otras patologías:</b>{animal.issues}</p>
                        </div>
                        <div>
                            <h4>Contacto</h4>
                            <p><b>Localización:</b></p>
                            { Object.entries(comarcas).map(comarca => (animal.location && parseInt(comarca[0]) == animal.location) ? <p>{comarca[1]}</p> : '')}

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

      
      
 