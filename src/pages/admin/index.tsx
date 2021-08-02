import Head from 'next/head'
import Image from 'next/image'

export interface CatsMainPageProps {
    className?: any;
    loading?:boolean;
    id?:string;
}
const Admin = () => {
    return(
        <>
        <h1>This is Administrator Page</h1>
        </>
    )
}
export default Admin
