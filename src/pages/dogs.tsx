import Head from 'next/head'
import Image from 'next/image'

export interface CatsMainPageProps {
    className?: any;
    loading?:boolean;
    id?:string;
}
const Cats = () => {
    return(
        <>
        <h1>This is Dogs Page</h1>
        </>
    )
}
export default Cats
