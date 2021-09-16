import Head from 'next/head';
import { Header } from '../../common/components/Header'
import styles from './Styles.module.scss';

import { useRouter } from 'next/router'
import { useEffect } from 'react';

import { actionCreators } from "../../../stateStore/index"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from 'redux';
import Image from 'next/image'
import globalImg from '../../../public/noAnimImg.svg'


const SingleAnimalPage = () => {
    const router = useRouter();
    const animalId = router.query.id;
    const {selectAnimal, selectAnimalImages} = bindActionCreators(actionCreators, useDispatch());
    const storeSingleAnimal = useSelector((state) => state.singleAnimal[1]);
    const storeSingleAnimalImages = useSelector((state) => state.singleAnimalImages[1]);
    
    const SingleAnimalDataFetch = async () => {
        const response = await fetch(`http://localhost:8080/api/animals/byId/${animalId}`);
        const data = await response.json();   
        console.log('Single Animal', data)    
        selectAnimal(data)  
    }
    const SingleAnimalImages = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/images/${animalId}`);
            const data = await response.json(); 
            console.log('ANIMAL ID ::: ', animalId) ; 
            selectAnimalImages(data)  
        } catch(error) {
            console.log(error)
        }

    }
 
    useEffect(() => {
        SingleAnimalDataFetch();
        SingleAnimalImages();
    }, [animalId]);
    
    //const MAP_MODE = place;
    //const IFRAME_MAP_URL = `https://www.google.com/maps/embed/v1/${MAP_MODE}?key=YOUR_API_KEY&PARAMETERS`
    return(
        <>
            <Head>
                <title>iAdopt</title>
                <meta name="description" content="Plataforma de adopción que pone en contacto protectoras y adoptantes" />
            </Head>
            <main>
                <Header path='/' text="Volver" page="general"/>
                    {storeSingleAnimal != undefined ? (
                    <>
                        <div className={styles.sectionAnimal}>
                            { Array.isArray(storeSingleAnimalImages) && storeSingleAnimalImages.length ? 
                                (<Image className={styles.photo} src={'data:image/*;base64,'+ storeSingleAnimalImages[0]?.blob} width={382} height={382} alt={storeSingleAnimal.name}/>) : 
                                (<Image src={globalImg} width={250} height={200} alt="global"/>)
                            }
                            <div className={styles.animalInformation}>
                                <div className={styles.nameCTAinfo}>
                                    <h1>{storeSingleAnimal.name}</h1>
                                    <button> Quiero adoptar a {storeSingleAnimal.name}! </button>
                                    <button> Chat </button>
                                </div>
        
                                <div className={styles.basicInfo}>
                                    <p><b>Edad:</b> {storeSingleAnimal.years!==0? `${storeSingleAnimal.years} año(s) y ${storeSingleAnimal.months} meses`: `${storeSingleAnimal.months} meses`}</p>
                                    <p><b>Género:</b>  {storeSingleAnimal.gender == 'female' ? '♀ Hembra' : '♂ Macho'}</p>
                                </div>
        
                                <div className={styles.extraInfo}>
                                    <div className={styles.description}>
                                        <h4>Descripción</h4>
                                        <p>{storeSingleAnimal.description}</p>
                                    </div>
        
                                    <div className={styles.additionalInfo}>
                                        <h4>Información Médica</h4>
                                        <p><b>Vacunación:</b> <span>{storeSingleAnimal.vaccination===true ? "Sí" : "No"}</span></p>
                                        <p><b>Esterilización:</b>  <span>{storeSingleAnimal.sterilized===true ? "Sí" : "No"}</span></p>
                                        <p><b>Microchip:</b>  <span>{storeSingleAnimal.chip===true ? "Sí" : "No"}</span></p>
                                        <p><b>Otras patologías:</b><br/> {storeSingleAnimal.issues}</p>
                                    </div>
                                    
                                    <div className={styles.caracterInfo}>
                                        <h4>Carácter</h4>
                                        {!storeSingleAnimal.tags ? `Sin descripción`:storeSingleAnimal.tags.map((e:string, i:number) => <span key={i}>{e}</span>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.sectionCenter}>
                            <div className={styles.center}>
                                <h4>Localización del Animal</h4>
                                <p><b>Centro:</b> {storeSingleAnimal.name}</p>
                                <p><b>Dirección:</b> {storeSingleAnimal.location}</p>
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
                    </>

                    ) : (<p>Loading...</p>)}
                    
            </main>
        </>
    )
}
export default SingleAnimalPage
