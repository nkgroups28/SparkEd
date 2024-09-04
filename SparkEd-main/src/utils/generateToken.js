import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '30d' });
    
    res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=${30 * 24 * 60 * 60}`);
};

export default generateTokenAndSetCookie;
