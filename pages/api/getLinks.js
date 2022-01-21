import { GoogleSpreadsheet } from 'google-spreadsheet'

const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID)

const getLinks = async (req, res) => {
    await doc.useServiceAccountAuth({
        client_email: process.env.SPREADSHEET_CLIENT_EMAIL,
        private_key: process.env.SPREADSHEET_PRIVATE_KEY
    })
    await doc.loadInfo()
    res.send(doc.title)
}

export default getLinks