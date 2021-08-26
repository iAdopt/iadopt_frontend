import Head from 'next/head';
import dogImg from '../../public/dogPageImg.svg'
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
const Dogs = () => {
    return(
        <>
        <Head>
            <title>iAdopt Dogs</title>
            <meta name="description" content="Plataforma de adopción que pone en contacto protectoras y adoptantes" />
        </Head>
        <main>
            <Header
                path='/'
                text="Inicio"
            />
        <TitleAndImg 
            title="Perros"
            img={dogImg}
        />
        <FiltersGroup theme="dogTheme" animalType="DOG"/>
        <SectionAnimalsView />



        </main>
        </>
    )
}
export default Dogs