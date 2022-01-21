import { GoogleSpreadsheet } from 'google-spreadsheet'

const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID)

const getLinks = async (req, res) => {
    await doc.useServiceAccountAuth({
        client_email: process.env.SPREADSHEET_CLIENT_EMAIL,
        private_key: process.env.SPREADSHEET_PRIVATE_KEY
    })
    await doc.loadInfo()

    const sheet = doc.sheetsById['0']
    const rows = await sheet.getRows()
    const linkTree = rows.map(row => ({
        title: row.Title,
        link: row.Link
    }))

    res.send(linkTree)
}

const postAccess = async () => {

}

export default getLinks