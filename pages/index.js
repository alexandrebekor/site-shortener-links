import Link from 'next/link'
import React from 'react'
import { getComponents, getLinks } from '../utils/spreadsheet'

const Index = ({ links, title }) => {
    return (
        <div className='flex flex-col'>
            <h2>{title.value}</h2>
            {links.map(link => {
                return (
                    <Link key={link.title} href={`/${link.slug}`}>
                        <a>{link.title}</a>
                    </Link>
                )
            })}
        </div>
    )
}

export default Index

export async function getStaticProps() {
    const links = await getLinks('0')
    const components = await getComponents('2060472715')

    const [title] = components.filter(component => component.component === 'Title')

    return {
        props: {
            links,
            title
        }
    }
}