import multer from 'multer';
import csvParser from 'csv-parser';
import Contact from '../../../models/contact';

const upload = multer({ dest: 'uploads/' });

export const config = {
    api: {
        bodyParser: false,
    },
};

export default upload.single('file', async (req, res) => {
    const contacts = [];
    req.file
        .createReadStream()
        .pipe(csvParser())
        .on('data', (row) => {
            contacts.push(row);
        })
        .on('end', async () => {
            await Contact.bulkCreate(contacts);
            res.status(200).json({ message: 'Contacts uploaded successfully' });
        });
});
