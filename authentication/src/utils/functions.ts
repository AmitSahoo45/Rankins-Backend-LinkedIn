import { validate } from 'deep-email-validator'

interface ValidateResult {
    valid: boolean;
}

export const getRandomNumber = (): number => Math.floor(Math.random() * 100) + 1

export const isEmailValid = async (email: string): Promise<ValidateResult> => {
    const { valid } = await validate(email)
    return { valid }
}
