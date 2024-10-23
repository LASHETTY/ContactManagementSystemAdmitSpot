import Contact from '../../../models/contact';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, phoneNumber, address, timezone } = req.body;
        const contact = await Contact.create({ name, email, phoneNumber, address, timezone });
        res.status(201).json(contact);
    }
}
