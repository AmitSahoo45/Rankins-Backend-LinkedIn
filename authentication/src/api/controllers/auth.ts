import db from '../../db/connection';
import { Request, Response } from 'express';

const fetchUserByEmail = async (req: Request, res: Response) => {
    const { email } = req.params;
    try {
        const user = await db('users').where({ email }).first();
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error('Error fetching user by email:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const fetchAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await db('users').select('*');
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export { fetchAllUsers, fetchUserByEmail };