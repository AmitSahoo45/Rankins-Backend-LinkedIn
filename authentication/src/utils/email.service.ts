import hbs, { NodemailerExpressHandlebarsOptions } from 'nodemailer-express-handlebars'
import nodemailer from 'nodemailer'
import path from 'path'

const __dirname = path.resolve()

interface ContextOptions {
    username: string;
    resetLink: string;
}

const transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASSWORD
        }
    }
)

const handlebarsOptions: NodemailerExpressHandlebarsOptions = {
    viewEngine: {
        partialsDir: path.resolve(__dirname, 'src', 'templates'),
        defaultLayout: false
    },
    viewPath: path.resolve(__dirname, 'src', 'templates'),
}

transporter.use('compile', hbs(handlebarsOptions))

export const sendEmail = async (
    from: string,
    to: string,
    subject: string,
    template: string,
    context: ContextOptions
) => {
    try {
        const mailOptions = { from, to, template, subject, context };
        await transporter.sendMail(mailOptions);
    } catch (error) {
        return error;
    }
};

export default transporter