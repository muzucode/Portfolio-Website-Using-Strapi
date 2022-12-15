import Link from 'next/link'
import React from 'react'
import { IBlogLink } from '../../interfaces/IBlogLink'
import styles from './BlogLink.module.scss'

export default function BlogLink(props: IBlogLink) {
  return (
    <a className={styles.link + ' blog-link'} href='/blog'>Blog &rarr;</a>
  )
}