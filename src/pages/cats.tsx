import Head from 'next/head';
import catImg from '../../public/catPageImg.svg'
import { Header } from '../common/components/Header'
import { TitleAndImg } from '../common/components/TitleAndImg/index'
import { FiltersGroup } from '../common/components/Filters/FiltersGroup'
import { SectionAnimalsView } from '../common/components/SectionAnimalsView'


import { ThemeProvider } from 'styled-components';



export interface CatsMainPageProps {
    className?: any;
    loading?:boolean;
    id?:string;
    theme: any
};
const theme = {
   
}

const Cats = () => {
    return(
        <ThemeProvider theme={theme}>
            <Head>
                <title>iAdopt Cats</title>
                <meta name="description" content="Plataforma de adopción que pone en contacto protectoras y adoptantes" />
            </Head>
            <main>
                <Header path='/' text="Inicio"/>
                <TitleAndImg title="Gatos" img={catImg} />
                <FiltersGroup theme="catTheme" animalType="CAT"/>
                <SectionAnimalsView />
            </main>
        </ThemeProvider>
    )
}
export default Cats
