import { GoogleSpreadsheet } from "google-spreadsheet"

const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID)

const postAccess = async (linkTo) => {
    await doc.useServiceAccountAuth({
        client_email: process.env.SPREADSHEET_CLIENT_EMAIL,
        private_key: process.env.SPREADSHEET_PRIVATE_KEY
    })
    await doc.loadInfo()

    const sheet = doc.sheetsById['1033818891']
    await sheet.addRow({
        "Date": new Date(),
        "Link": linkTo
    })
}

export default postAccess