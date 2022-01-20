import React from 'react'
import { useRouter } from 'next/router'

const RedirectTo = () => {
    const router = useRouter()
    const { slug } = router.query

    return (
        <h1>{slug}</h1>
    )
}

export default RedirectTo