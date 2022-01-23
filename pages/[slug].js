import React from 'react'
import { addClick, getLinks } from '../utils/spreadsheet'

const RedirectTo = () => <h1>Redirecting...</h1>
export default RedirectTo

export async function getServerSideProps({ params }) {
    const data = await getLinks('0')
    const [linkTo] = data.filter(item => item.slug === params.slug)

    if (linkTo) {
        await addClick(linkTo, '1033818891')
        return {
            redirect: {
                destination: linkTo.link,
                permanent: true
            }
        }
    } else {
        return {
            redirect: {
                destination: '/',
                permanent: true
            }
        }
    }

    return {
        props: {}
    }
}