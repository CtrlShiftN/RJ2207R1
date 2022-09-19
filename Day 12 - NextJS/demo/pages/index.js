import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>This is homepage</h1>
      <Link href='/about'>
        About
      </Link>
    </div>
  )
}
