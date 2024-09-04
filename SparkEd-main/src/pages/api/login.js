
import bcrypt from 'bcryptjs';
import connectToDatabase from '../../config/db';
import User from '../../model/user';
import generateTokenAndSetCookie from '../../utils/generateToken';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ msg: 'Method not allowed' });
    }

    try {
        await connectToDatabase();

        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ msg: 'Invalid username or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid username or password' });
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            userType: user.userType
        });

    } catch (error) {
        console.error('Error in login controller', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}
