import Link from 'next/link'
import React from 'react'
import { IBlogLink } from '../../interfaces/IBlogLink'
import styles from './BlogLink.module.scss'

export default function BlogLink(props: IBlogLink) {
  return (
    <a className={styles.link} href='/blog'>Check out my blog &#10154;</a>
  )
}