import React from 'react'
import postAccess from '../utils/accessCount'

const RedirectTo = () => <h1>Redirecting...</h1>
export default RedirectTo

export async function getServerSideProps({ params, res }) {
    const response = await fetch('http://localhost:3000/api/getLinks')
    const data = await response.json()

    const [linkTo] = data.filter(item => item.slug === params.slug)

    if (linkTo) {
        await postAccess(linkTo.link)
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