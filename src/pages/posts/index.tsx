import { GetStaticProps } from 'next';
import Head from 'next/head'
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';
import Prismic from '@prismicio/client'

export default function Posts() {
    return (
        <>
            <Head>
                <title>

                </title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a>
                        <time> 12 de março de 2021 </time>
                        <strong>Creating a Monorepo with a Lerna & Yarn Workspace</strong>
                        <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
                    </a>
                    <a>
                        <time> 12 de março de 2021 </time>
                        <strong>Creating a Monorepo with a Lerna & Yarn Workspace</strong>
                        <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
                    </a>
                    <a>
                        <time> 12 de março de 2021 </time>
                        <strong>Creating a Monorepo with a Lerna & Yarn Workspace</strong>
                        <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
                    </a>
                </div>
            </main>
        </>
    )
}

export const getStaticProps : GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'publication')],
        {
            fetch: ['publication.title', 'publication.content'],
            pageSize: 100,
        })

        console.log(JSON.stringify(response, null, 2))

    return{
        props: {}
    }
}