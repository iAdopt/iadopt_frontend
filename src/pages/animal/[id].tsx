import Head from 'next/head';
import { Header } from '../../common/components/Header'
import styles from './Styles.module.scss';

import { useRouter } from 'next/router'
import { useEffect } from 'react';

import { actionCreators } from "../../../stateStore/index"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from 'redux';
import { store } from '../../../stateStore/store';


const SingleAnimalPage = () => {
    const router = useRouter();
    const animalId = router.query.id;
    const {selectAnimal} = bindActionCreators(actionCreators, useDispatch());
    const storeSingleAnimal = useSelector((state) => state.singleAnimal);


    /* PENDING TO DO FETCH DATA */
    const SingleAnimalDataFetch = async () => {
        let API_URL = `URLAPI..id={id}`;
        const response = await fetch(API_URL);
        const data = await response.json();
        // selectAnimal(data) SET THE DATA TO REDUX STORE HERE! :) :) :) 
    }

    const dataExampleAnimal = {
            "id": 1,
            "name": "Arlo",
            "age": "3 años",
            "type": "DOG",
            "location": "Barcelona",
            "gender": "male",
            "image": "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg",
            "description": "Just like for humans, the five senses play an important role in helping felines understand their surroundings. But the way cats use those senses is often very different than how we do.",
            "medicalInfo": {
                "vaccination": true,
                "sterilized": false,
                "chip": true,
                "other": "El animal no tiene otras patologías"
            },
            "character": ["Sociable", "Bien con otros gatos", "Tranquilo"],
            "center": "Protectora SPAM Mataró"
        };
 
    useEffect(() => {
        selectAnimal(dataExampleAnimal);
        console.log('SINGLE ANIMAL', dataExampleAnimal)
        // setHeaderState("singleAnimal")
        if (animalId && animalId !== "") {
            // SingleAnimalDataFetch();
        }
      }, []);

    //   const MAP_MODE = place;
    //   const IFRAME_MAP_URL = `https://www.google.com/maps/embed/v1/${MAP_MODE}?key=YOUR_API_KEY&PARAMETERS`


    return(
        <>
            <Head>
                <title>iAdopt</title>
                <meta name="description" content="Plataforma de adopción que pone en contacto protectoras y adoptantes" />
            </Head>
            <main>
                <Header path='/' text="Volver" page="general"/>

                <div className={styles.sectionAnimal}>
                    <div className={styles.photo} style={{backgroundImage: "url(" + storeSingleAnimal.image + ")"}}></div>
                    <div className={styles.animalInformation}>
                        <div className={styles.nameCTAinfo}>
                            <h1>{storeSingleAnimal.name}</h1>
                            <button> Quiero adoptar a {storeSingleAnimal.name}! </button>
                            <button> Chat </button>
                        </div>

                        <div className={styles.basicInfo}>
                            <p><b>Edad:</b> {storeSingleAnimal.age}</p>
                            <p><b>Género:</b>  {storeSingleAnimal.gender == 'female' ? '♀ Hembra' : '♂ Macho'}</p>
                        </div>

                        <div className={styles.extraInfo}>
                            <div className={styles.description}>
                                <h4>Descripción</h4>
                                <p>{storeSingleAnimal.description}</p>
                            </div>

                            <div className={styles.additionalInfo}>
                                <h4>Información Médica</h4>
                                <p><b>Vacunación:</b> <span>{dataExampleAnimal.medicalInfo.vaccination ? "Sí" : "No"}</span></p>
                                <p><b>Esterilización:</b>  <span>{dataExampleAnimal.medicalInfo.sterilized ? "Sí" : "No"}</span></p>
                                <p><b>Microchip:</b>  <span>{dataExampleAnimal.medicalInfo.chip ? "Sí" : "No"}</span></p>
                                <p><b>Otras patologías:</b><br/> {dataExampleAnimal.medicalInfo.other}</p>
                            </div>

                            <div className={styles.caracterInfo}>
                                <h4>Carácter</h4>
                                {dataExampleAnimal.character.map(e => <span>{e}</span>)}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={styles.sectionCenter}>
                    <div className={styles.center}>
                        <h4>Localización del Animal</h4>
                        <p><b>Centro:</b> {storeSingleAnimal.center}</p>
                        <p><b>Dirección:</b> {storeSingleAnimal.center}</p>
                        <br/>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                            width="700"
                            height="400"
                            frameBorder="0"
                            style={{ border: 0 }}
                            aria-hidden="false"
                            tabIndex="0"
                          />
                    </div>
                </div>
            </main>
        </>
    )
}
export default SingleAnimalPage
