import Contact from '../../../models/contact';

export default async function handler(req, res) {
    const { id } = req.query;
    if (req.method === 'PUT') {
        const { name, email, phoneNumber, address, timezone } = req.body;
        await Contact.update({ name, email, phoneNumber, address, timezone }, { where: { id } });
        res.status(200).json({ message: 'Contact updated' });
    } else if (req.method === 'DELETE') {
        await Contact.destroy({ where: { id } });
        res.status(200).json({ message: 'Contact deleted' });
    }
}
