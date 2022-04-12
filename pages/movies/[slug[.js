
import { PrismaClient } from '@prisma/client';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

const prisma = new PrismaClient();

const Movie = ({ movie }) =>{
    return(
        <>
            <Head>
                    <title>{`Movies | ${movie.title}`}</title>
                    <link rel='icon' href='/favicon'/>
            </Head>
            
            <div className={styles.container}>
                <main >
                    <h2>{movie.title}</h2>
                    <p>{movie.description}</p>
                </main>
            </div>
        </>
    );
}
export default Movie;

export async function getServerSideProps(context){
    const {slug} = context.query;

    const movie = await prisma.movie.findFirst({
        where: {
            slug: slug
        }
    })
    return{
        props: {
            movie
        }
    }
}