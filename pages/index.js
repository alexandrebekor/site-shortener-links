import Link from 'next/link'
import React from 'react'

const Index = ({ data }) => {
    return (
        <div className='flex flex-col'>
            {data.map(item => {
                return (
                    <Link key={item.title} href={`/${item.slug}`}>
                        <a>{item.title}</a>
                    </Link>
                )
            })}
        </div>
    )
}

export default Index

export async function getServerSideProps() {
    const response = await fetch('http://localhost:3000/api/getLinks')
    const data = await response.json()

    return {
        props: {
            data
        }
    }
}