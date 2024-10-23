import Contact from '../../../models/contact';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { name, email, timezone } = req.query;
        const filters = {};
        if (name) filters.name = name;
        if (email) filters.email = email;
        if (timezone) filters.timezone = timezone;

        const contacts = await Contact.findAll({ where: filters });
        res.status(200).json(contacts);
    }
}
