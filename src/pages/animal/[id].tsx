import Head from 'next/head';
import { Header } from '../../common/components/Header'
import styles from './Styles.module.scss';

import { useRouter } from 'next/router'
import { useEffect } from 'react';

import { actionCreators } from "../../../stateStore/index"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from 'redux';


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
            "age": "3 years",
            "type": "DOG",
            "location": "Barcelona",
            "gender": "male",
            "image": "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg",
            "description": "Just like for humans, the five senses play an important role in helping felines understand their surroundings. But the way cats use those senses is often very different than how we do."
        };
 
    useEffect(() => {
        selectAnimal(dataExampleAnimal);
        console.log('SINGLE ANIMAL', dataExampleAnimal)
        // setHeaderState("singleAnimal")
        if (animalId && animalId !== "") {
            // SingleAnimalDataFetch();
        }
      }, [animalId]);


    return(
        <>
            <Head>
                <title>iAdopt</title>
                <meta name="description" content="Plataforma de adopción que pone en contacto protectoras y adoptantes" />
            </Head>
            <main>
                <Header path='/' text="Volver" />
                <p>Real Id id: {router.query.id} //REMEMBER: fake forced data </p>
                <div className={styles.sectionAnimal}>
                    <div className={styles.photo} style={{backgroundImage: "url(" + storeSingleAnimal.image + ")"}}></div>
                    <div className={styles.basicInfo}>
                        <h1>{storeSingleAnimal.name}</h1>
                        <p><b>Edad:</b>{storeSingleAnimal.age}</p>
                        <p><b>Género:</b>  {storeSingleAnimal.gender == 'female' ? '♀ Hembra' : '♂ Macho'}</p>

                    </div>
                </div>
                <div className={styles.sectionCenter}>
                </div>
                
            </main>
        </>
    )
}
export default SingleAnimalPage
