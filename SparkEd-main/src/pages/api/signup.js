import bcrypt from 'bcryptjs';
import connectToDatabase from '../../config/db';
import User from '../../model/user';
import generateTokenAndSetCookie from '../../utils/generateToken';

export default async function signup(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ msg: 'Method not allowed' });
    }

    try {
        await connectToDatabase();

        const { fullName, username, password, confirmPassword,userType } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ msg: 'Passwords do not match' });
        }

        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        
        const newUser = await User.create({
            fullName,
            username,
            password: hashedPassword,
            userType, // Add the new userType field here
        });

        generateTokenAndSetCookie(newUser._id, res);

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            userType: newUser.userType, // Include userType in the response
        });

    } catch (error) {
        console.error('Error in signup controller', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}
