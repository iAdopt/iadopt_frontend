import Head from 'next/head';
import allImg from '../../public/animalPageImg.svg'
import styles from '../styles/Animals.module.scss'
import { FiltersGroup } from '../common/components/Filters/FiltersGroup'
import { Header } from '../common/components/Header'
import { TitleAndImg } from '../common/components/TitleAndImg/index'
import { SectionAnimalsView } from '../common/components/SectionAnimalsView'



export interface CatsMainPageProps {
    className?: any;
    loading?:boolean;
    id?:string;
}
const Animals = () => {
    return(
        <>
        <Head>
            <title>iAdopt Animals</title>
            <meta name="description" content="Plataforma de adopción que pone en contacto protectoras y adoptantes" />
        </Head>
        <main>
            <Header
                path='/'
                text="Inicio"
                page="general"
            />
        <TitleAndImg 
            title="Gatos y Perros"
            img={allImg}
        />
         <FiltersGroup theme="animalsTheme" animalType="all"/>
         <SectionAnimalsView />


        </main>
        </>
    )
}
export default Animals
