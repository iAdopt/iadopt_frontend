
import styles from './Style.module.scss';
import { useState, useRef } from 'react';
import Image from 'next/image';
import v01 from '../../../../public/v01.png'



      
export const AdminAddAnimalForm = (props:any) => {
    const [animal, setAnimalState] = useState({
        species: "",
        name: "",
        gender: "",
        birthdate: "",
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
                birthdate: "",
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
                birthdate: "",
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

    const handleCheckboxChange = (e:any) => {
        if (e.target.checked) {
          if (!animal.tags.includes(e.target.value)) {
            setAnimalState((prev:any) => ({ 
                ...animal,
                tags: [...prev.tags, e.target.value]}
            ))
          }
        } else {
            setAnimalState((prev:any) => ({ 
                ...animal,
                tags: prev.tags.filter((tag:any)=> tag !==e.target.value)}
            ))
        }
      }
    const handlePictureChange = (e:any) => {
        let uploadText = document.getElementById('fileImg');
        const file = e.target.files[0];
        const reader = new FileReader();
        /* Send image as base64 */
        reader.onloadend = () => {
          var b64 = reader.result.replace(/^data:.+;base64,/, '');
          console.log('b64', b64);
            setAnimalState({
                ...animal,
                [e.target.name]: b64
            })
        }; 
        reader.readAsDataURL(file);  

        /* Change text once image is uploaded */
        uploadText.textContent = e.target.files[0].name;
    }

    return(
        <div className={styles.adminAddAnimal}>
            <h3>Añadir un animal al centro</h3>

            <form className={styles.form} ref={form} onSubmit={submitForm}>
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
                        <label htmlFor="birthdate">Fecha de nacimiento:</label>
                        <input type="date" name="birthdate" placeholder="Nombre" value={animal.birthdate} onChange={handleChange}/>
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
                        <label htmlFor="tags">Carácter del animal:</label>
                        <div className={styles.checkbox}>
                            {
                                ["Bueno", 
                                "Cariñoso", 
                                "Tranquilo", 
                                "Bien con gatos", 
                                "Bien con perros", 
                                "Bien con niños", 
                                "Juguetón", 
                                "Arisco", 
                                "Miedoso", 
                                "Tranquilo"].map((tag, i) => {
                                  return (
                                    <>
                                        <div className={styles.checkbox} key={i}>
                                          <input type="checkbox" id={tag} value={tag} onChange={handleCheckboxChange} />
                                          <label htmlFor={tag}>{tag}</label>
                                        </div>
                                    </>
                                  )
                                })
                            }
                        </div>
                    </div>
                    <div className={styles.textarea}>
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
                            <input type="radio" name="identified"  value='1'
                                onChange={(e:any) => { setAnimalState(animal => ({...animal, [e.target.name]:e.target.value}))}}
                                checked={animal.identified == '1' ? true : false} 
                            />
                            <label htmlFor="identified">Si</label>
                        </div>

                        <div>
                            <input type="radio" name="noIdentified" id="identified" value='0' 
                                onChange={(e:any) => { setAnimalState(prev => ({...animal, [e.target.id]:e.target.value}))}}
                                checked={animal.identified == '0' ? true : false} 
                            />
                            <label htmlFor="noIdentified">No</label>
                        </div>
                    </div>

                    <div className={styles.textZone}>
                        <label htmlFor="issues">Otras patologias:</label>
                        <textarea name="issues" placeholder="Descripción de otras patologías del animal" value={animal.issues} onChange={handleChange}/>
                    </div>
                </div>

                <h4>Imágenes</h4>
                <div className={styles.block}>
                    <div className={styles.inputs}>
                        <input style={{display:'none'}} accept="image/jpeg" type="file" name="blob" id="blob" onChange={handlePictureChange} />
                        <span style={{textAlign: 'center'}} id="fileImg">Ningún archivo seleccionado</span>
                        <label className={styles.uploadImgBtn} htmlFor="blob">
                            Subir imagen del animal 
                            <svg id="upload" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                            </svg>
                        </label>

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
