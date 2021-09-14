
import styles from './Style.module.scss';
import { useState, useRef } from 'react';
import Image from 'next/image';
import v01 from '../../../../public/v01.png'



      
export const AdminAddAnimalForm = (props:any) => {
    const [animal, setAnimalState] = useState({
        species: "",
        name: "",
        gender: "",
        age: "",
        description: "",
        vaccinated: "",
        sterilized: "",
        identified: "",
        issues: "",
        blob: "",
        status: "",
        tags: [""],
        center: '0c266122-e95f-4a7c-88b6-5794c281896a'
    });
    const form = useRef(null);

    const submitForm = async (event:any) => {
        event.preventDefault();
        try {
            await fetch('http://localhost:8080/api/animals/post/animal/', {
                method: 'POST',
                headers: {
                    'Accept' : 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(animal)
            });
            setAnimalState({
                species: "",
                name: "",
                gender: "",
                age: "",
                description: "",
                vaccinated: "",
                sterilized: "",
                identified: "",
                issues: "",
                blob: "",
                status: "",
                center:"0c266122-e95f-4a7c-88b6-5794c281896a",
                tags: [""]
            })

        } catch(error) {
            console.error('Error to submit information:', error)
            setAnimalState({
                species: "",
                name: "",
                gender: "",
                age: "",
                description: "",
                vaccinated: "",
                sterilized: "",
                identified: "",
                issues: "",
                blob: "",
                status: "",
                center: '0c266122-e95f-4a7c-88b6-5794c281896a',
                tags: [""]
            })
        }
    }

    const handleChange = (e:any) => {
        setAnimalState({
            ...animal,
            [e.target.name]: e.target.value
        })
    }

    const handlePictureChange = (e:any) => {
        const file = e.target.files[0];
        console.log('event', file);
        const reader = new FileReader();
        reader.onloadend = () => {
          var b64 = reader.result.replace(/^data:.+;base64,/, '');
          console.log('b64', b64);
          setAnimalState({
            ...animal,
            [e.target.name]: b64
        })
        }; 
        reader.readAsDataURL(file)  
    }

    return(
        <div className={styles.adminAddAnimal}>
            <h3>Añadir un animal al centro</h3>

            <form  className={styles.form} ref={form} onSubmit={submitForm}>
                <h4>Información general</h4>
                <div className={styles.block}>
                    <div className={styles.inputs}>
                        <label htmlFor="species">Especie:</label>
                        <select name="species" value={animal.species} onChange={handleChange}>
                            <option value="">Seleciona una especie de animal</option>
                            <option value="cat">Gato</option>
                            <option value="dog">Perro</option>
                        </select>
                    </div>

                    <div className={styles.inputs}>
                        <label htmlFor="name">Nombre del animal:</label>
                        <input type="text" name="name" placeholder="Nombre" value={animal.name} onChange={handleChange}/>
                    </div>

                    <div className={styles.inputs}>
                        <label htmlFor="age">Fecha de nacimiento:</label>
                        <input type="date" name="age" placeholder="Nombre" value={animal.age} onChange={handleChange}/>
                        <p>Si se desconoce fecha de nacimiento del animal, selecciona una fecha aproximada</p>
                    </div>

                    <div className={styles.inputs}>
                        <label htmlFor="gender">Genero:</label>
                        <select name="gender" value={animal.gender} onChange={handleChange}>
                            <option value="0">Seleciona el género del animal</option>
                            <option value="female">Femenino</option>
                            <option value="male">Masculino</option>
                        </select>
                    </div>

                    <div className={styles.inputs}>
                        <label htmlFor="description">Descripción:</label>
                        <textarea name="description" placeholder="Descripción del animal" value={animal.description}  onChange={handleChange}/>
                    </div>
                </div>

                <h4>Información médica</h4>
                    <div className={styles.blockMedical}>
                    <h5>Vacunación:</h5>
                    <div className={styles.radios}>
                        <div>
                            <input type="radio" name="noVaccinated" value='0' id="vaccinated" 
                                onChange={(e:any) => { setAnimalState(prev => ({...animal, [e.target.id]:e.target.value}))}}
                                checked={animal.vaccinated == '0' ? true : false} 
                            />
                            <label htmlFor="noVaccinated">Sin vacunación</label>
                        </div>

                        <div>
                            <input type="radio" name="vaccinated" value='1' 
                                onChange={(e:any) => { setAnimalState(animal => ({...animal, [e.target.name]:e.target.value}))}}
                                checked={animal.vaccinated == '1' ? true : false} 
                             />
                            <label htmlFor="completed">Vacunación completa</label>
                        </div>
                    </div>

                    <h5>Esterilización:</h5>
                    <div className={styles.radios}>
                        <div>
                            <input type="radio" name="sterilized" value='1'
                                onChange={(e:any) => { setAnimalState(animal => ({...animal, [e.target.name]:e.target.value}))}}
                                checked={animal.sterilized == '1' ? true : false} 
                            />
                            <label htmlFor="sterilized">Si</label>
                        </div>
                        <div>
                            <input type="radio" name="noSterilized" id="sterilized" value='0'
                                onChange={(e:any) => { setAnimalState(prev => ({...animal, [e.target.id]:e.target.value}))}}
                                checked={animal.sterilized == '0' ? true : false} 
                            />
                            <label htmlFor="noSterilized">No</label>
                        </div>
                    </div>

                    <h5>Microchip identificativo:</h5>
                    <div className={styles.radios}>
                        <div>
                            <input type="radio" name="identified"  value='true'
                                onChange={(e:any) => { setAnimalState(animal => ({...animal, [e.target.name]:e.target.value}))}}
                                checked={animal.identified == 'true' ? true : false} 
                            />
                            <label htmlFor="identified">Si</label>
                        </div>

                        <div>
                            <input type="radio" name="noIdentified" id="identified" value='false' 
                                onChange={(e:any) => { setAnimalState(prev => ({...animal, [e.target.id]:e.target.value}))}}
                                checked={animal.identified == 'false' ? true : false} 
                            />
                            <label htmlFor="noIdentified">No</label>
                        </div>
                    </div>

                    <div className={styles.textZone}>
                        <label htmlFor="medicalDescription">Otras patologias:</label>
                        <textarea name="medicalDescription" placeholder="Descripción de otras patologías del animal" value={animal.issues} onChange={handleChange}/>
                    </div>
                </div>

                <h4>Imágenes</h4>
                <div className={styles.block}>
                    <div className={styles.inputs}>
                        <label htmlFor="image">Imágen del animal:</label>
                        <input style={{display:'block'}} accept="image/jpeg" type="file" name="blob" onChange={handlePictureChange} />
                        {/* <Image id="imageUploaded" src={v01} height="200" alt="Animal photo"/> */}
                    </div>
                </div>

                <h4>Relevancia</h4>
                <div className={styles.block}>
                    <div className={styles.inputs}>
                        <label htmlFor="status">Status en el centro:</label>
                        <select name="status" value={animal.status} onChange={handleChange}>
                            <option value="">Seleciona la relevancia</option>
                            <option value="new">Nuevo</option>
                            <option value="urgent">Urgente</option>
                        </select>
                    </div>
                </div>

                <input type="submit" value="Añadir animal"></input>
            </form>
        </div> 
    )
 }
