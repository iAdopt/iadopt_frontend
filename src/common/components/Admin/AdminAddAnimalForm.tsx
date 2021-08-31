
import styles from './Style.module.scss';

      
export const AdminAddAnimalForm = () => {
    return(
        <div className={styles.adminAddAnimal}>
            <h3>Añadir un animal al centro</h3>
            <form  className={styles.form}>
                <h4>Información general</h4>
                <div className={styles.inputs}>
                    <label htmlFor="animalType">Especie:</label>
                    <select name="animalType" value="" >
                        <option value="0">Seleciona una especie de animal</option>
                        <option value="cat">Gato</option>
                        <option value="dog">Perro</option>
                    </select>
                </div>

                <div className={styles.inputs}>
                    <label htmlFor="animalName">Nombre del animal:</label>
                    <input type="text" name="animalName" placeholder="Nombre"/>
                </div>

                <div className={styles.inputs}>
                    <label htmlFor="animalAge">Fecha de nacimiento:</label>
                    <input type="date" name="animalAge" placeholder="Nombre"/>
                    <p>Si se desconoce fecha de nacimiento del animal, selecciona una fecha aproximada</p>
                </div>

                <div className={styles.inputs}>
                    <label htmlFor="animalGender">Genero:</label>
                    <select name="animalGender" value="" >
                        <option value="0">Seleciona el género del animal</option>
                        <option value="female">Femenino</option>
                        <option value="male">Masculino</option>
                    </select>
                </div>

                <div className={styles.inputs}>
                    <label htmlFor="animalDescription">Descripción:</label>
                    <textarea  name="animalDescription" placeholder="Descripción del animal"/>
                </div>

                <h4>Información médica</h4>
                <h5>Vacunación:</h5>
                <div className={styles.radios}>
                    <input type="radio" name="noVaccinated" />
                    <label htmlFor="noVaccinated">Sin vacunación</label>


                    <input type="radio" name="firstVaccine" />
                    <label htmlFor="firstVaccine">Primera vacuna</label>

                    
                    <input type="radio" name="completed" />
                    <label htmlFor="completed">Vacunación completa</label>
                </div>

                <h5>Esterilización:</h5>
                <div className={styles.radios}>
                    <input type="radio" name="sterilized" />
                    <label htmlFor="sterilized">Si</label>


                    <input type="radio" name="noSterilized" />
                    <label htmlFor="noSterilized">No</label>
                </div>

                <h5>Microchip identificativo:</h5>
                <div className={styles.radios}>
                    <input type="radio" name="identified" />
                    <label htmlFor="identified">Si</label>


                    <input type="radio" name="noIdentified" />
                    <label htmlFor="noIdentified">No</label>
                </div>

                <div className={styles.inputs}>
                    <label htmlFor="medicalDescription">Otras patologias:</label>
                    <textarea  name="medicalDescription" placeholder="Descripción del animal"/>
                </div>

                <h4>Imágenes</h4>
                <div className={styles.inputs}>
                    <label htmlFor="image">Imágen del animal:</label>
                    <input type="file" name="image" />
                </div>

                
            </form>
        </div> 
    )
 }
