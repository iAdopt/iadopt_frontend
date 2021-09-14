import {useSelector} from "react-redux"
import styles from './Style.module.scss';

      
export const AnimalsV02 = ({

}:any) => {

/* ANIMALS DATA STATE FROM REDUX*/
const animalsData = useSelector((state) => state.allAnimals[1]);  //get all animals
    return(
        <div className={styles.animalsV02}>
            {animalsData.map((animal, i) => (
                <div key={i} className={styles.animalBoxv02}>
                    <div className={styles.photo} style={{backgroundImage: "url(data:image/jpeg;base64," + animal.image + ")"}}></div>
                    <div className={styles.animalBoxInfo}>
                        <div>
                        <div className={styles.identification}>
                                <h3>{animal.name}</h3> 
                                {animal.status ? <span className={animal.status == 'urgent' ? styles.labelUrgent : styles.labelNew}>{animal.status}</span> : ''}
                            </div>

                            <p><b>Edad:</b>{animal.years != 0 ? ` ${animal.years} año(s) y ${animal.months} meses` : `${animal.months} meses`}</p>
                            <p><b>Género:</b>{animal.gender == 'female' ? '♀ Hembra' : '♂ Macho'}</p>
                            <p><b>Carácter:</b></p>                           
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

      
      
 