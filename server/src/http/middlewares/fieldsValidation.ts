import { Response, Request, NextFunction } from 'express'


export const validateFields = async (req: Request, res: Response, next:NextFunction) => {
    const {imageUrl, name, age,race, type, petOwner, telephone } = req.body
    if (!imageUrl || !name ||!age || !race || !type || !petOwner || !telephone) {
        return res.status(400).json({ message: 'Some required fields are missing' }); 
    }
    next()
}