import { Request, Response, NextFunction } from 'express';

export const CheckSessionToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const sessionToken = req.headers['authorization'] as string;

        if (!sessionToken) return res.status(400).json({ message: 'Invalid session token' });

        next();
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};
