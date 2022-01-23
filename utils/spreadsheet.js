import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'

const auth = async () => {
    const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID)
    await doc.useServiceAccountAuth({
        client_email: process.env.SPREADSHEET_CLIENT_EMAIL,
        private_key: process.env.SPREADSHEET_PRIVATE_KEY
    })
    await doc.loadInfo()
    return doc
}

const getComponents = async (id) => {
    const doc = await auth()
    const sheet = doc.sheetsById[id]
    const rows = await sheet.getRows()
    const components = rows.map(row => ({
        component: row.Component,
        value: row.Value
    }))

    return components
}

const getLinks = async (id) => {
    const doc = await auth()
    const sheet = doc.sheetsById[id]
    const rows = await sheet.getRows()
    const links = rows.map(row => ({
        title: row.Title,
        slug: row.Slug,
        link: row.Link
    }))

    return links
}

const addClick = async (linkTo, id) => {
    const doc = await auth()
    const sheet = doc.sheetsById[id]

    await sheet.addRow({
        "Date": moment().format("YYYY/MM/DD HH:mm"),
        "Slug": linkTo.slug,
        "Link": linkTo.link
    })

    return true
}

export { getComponents, getLinks, addClick }