import Link from 'next/link';
import Layout from '../components/layout';
import styles from '../styles/About.module.css';
export default function About() {
    return (
        <div className={styles.about_index}>
            <Layout>
                <p>This is about page</p>
                <Link href='/'>
                    Home
                </Link>
            </Layout>
        </div>
    )
}