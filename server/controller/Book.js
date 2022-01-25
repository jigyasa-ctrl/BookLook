

const getBooks = (req, res) => {
    return res.json({ "success": true })
}

const createBooks = (req, res) => {
    try {
        return res.status(200).json(req.body)
    } catch (err) {
        console.log(err)
        res.status(400).json({ "success": false })
    }
}

const updateBooks = (req, res) => {
    res.send('update books')
}
const deleteBooks = (req, res) => {
    res.send('delete books')
}

module.exports = { getBooks, createBooks, updateBooks, deleteBooks }