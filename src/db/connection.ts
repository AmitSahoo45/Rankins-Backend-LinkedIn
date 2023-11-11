import { Client } from 'pg';

export async function connect(): Promise<Client> {
    const client = new Client({
        user: process.env.POSTGRES_USER as string,
        host: process.env.POSTGRES_HOST as string,
        database: process.env.POSTGRES_DB as string,
        password: process.env.POSTGRES_PASSWORD as string,
        port: process.env.POSTGRES_PORT as unknown as number,
        connectionString: process.env.POSTGRES_URL as string,
    })

    await client.connect();

    return client;
}