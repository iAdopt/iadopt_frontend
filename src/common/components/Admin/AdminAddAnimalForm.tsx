
import styles from './Style.module.scss';
import { useState, useRef } from 'react'


      
export const AdminAddAnimalForm = (props:any) => {
    const [animal, setAnimalState] = useState({
        specie: "",
        name: "",
        gender: "",
        age: "",
        description: "",
        vaccinated: "",
        sterilized: "",
        identified: "",
        image: ""
    })
    const form = useRef(null);

    // const submitForm = (event) => {
    //    event.preventDefault();
    //    const data = new FormData(form.current)
    //    fetch('', {
    //        method: 'POST',
    //        body: data
    //    })
    //    .then(response => response.json())
    //    .then(json => setAnimalState(json.animal))
    // }

    const submitForm = (event) => {
        event.preventDefault();
        // try {
        //     const data = animal
        //     await fetch('/api', {
        //         method: 'POST',
        //         mode: 'no-cors',
        //         headers: {
        //             'Accept' : 'application/json',
        //             'Content-type': 'application/json'
        //         },
        //         body: data
        //     });
        //     console.log('result', data)

        // } catch(error) {
        //     console.error(error)
        // }
        console.log(animal)
     }

    const handleChange = (e:any) => {
        setAnimalState({
            ...animal,
            [e.target.name]: e.target.value
        })
    }
    return(
        <div className={styles.adminAddAnimal}>
            <h3>Añadir un animal al centro</h3>

            <form  className={styles.form} ref={form} onSubmit={submitForm}>

                <h4>Información general</h4>
                <div className={styles.block}>
                    <div className={styles.inputs}>
                        <label htmlFor="specie">Especie:</label>
                        <select name="specie" value={animal.specie} onChange={handleChange}>
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
                        <label htmlFor="animal[age]">Fecha de nacimiento:</label>
                        <input type="date" name="animal[age]" placeholder="Nombre" value={animal.age}/>
                        <p>Si se desconoce fecha de nacimiento del animal, selecciona una fecha aproximada</p>
                    </div>

                    <div className={styles.inputs}>
                        <label htmlFor="animal[gender]">Genero:</label>
                        <select name="animal[gender]" value={animal.gender} >
                            <option value="0">Seleciona el género del animal</option>
                            <option value="female">Femenino</option>
                            <option value="male">Masculino</option>
                        </select>
                    </div>

                    <div className={styles.inputs}>
                        <label htmlFor="animal[description]">Descripción:</label>
                        <textarea name="animal[description]" placeholder="Descripción del animal" value={animal.description}/>
                    </div>
                </div>

                <h4>Información médica</h4>
                    <div className={styles.blockMedical}>
                    <h5>Vacunación:</h5>
                    <div className={styles.radios}>
                        <div>
                            <input type="radio" name="noVaccinated" value={animal.vaccinated} onChange={e => {setAnimalState(prev => ({...prev, [prev.vaccinated]: false}))}}/>
                            <label htmlFor="noVaccinated">Sin vacunación</label>
                        </div>

                        <div>
                            <input type="radio" name="completed" value={animal.vaccinated} onChange={e => {setAnimalState(prev => ({...prev, [prev.vaccinated]: true}))}}/>
                            <label htmlFor="completed">Vacunación completa</label>
                        </div>
                    </div>

                    <h5>Esterilización:</h5>
                    <div className={styles.radios}>
                        <div>
                            <input type="radio" name="sterilized" />
                            <label htmlFor="sterilized">Si</label>
                        </div>
                        <div>
                            <input type="radio" name="noSterilized" />
                            <label htmlFor="noSterilized">No</label>
                        </div>
                    </div>

                    <h5>Microchip identificativo:</h5>
                    <div className={styles.radios}>
                        <div>
                            <input type="radio" name="identified" />
                            <label htmlFor="identified">Si</label>
                        </div>

                        <div>
                            <input type="radio" name="noIdentified" />
                            <label htmlFor="noIdentified">No</label>
                        </div>
                    </div>

                    <div className={styles.textZone}>
                        <label htmlFor="medicalDescription">Otras patologias:</label>
                        <textarea name="medicalDescription" placeholder="Descripción del animal"/>
                    </div>
                </div>

                <h4>Imágenes</h4>
                <div className={styles.block}>
                    <div className={styles.inputs}>
                        <label htmlFor="image">Imágen del animal:</label>
                        <input type="file" name="image" />
                    </div>
                </div>


                <input type="submit" value="Añadir animal"></input>
            </form>
        </div> 
    )
 }
