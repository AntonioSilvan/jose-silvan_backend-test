import { DataSource } from 'typeorm';
import { URL } from 'url';

const dbUrl = new URL("postgresql://AntonioSilvan:5IKG9On0G8wLPflZaUV7YA@free-tier11.gcp-us-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dflashy-shark-1521");
const routingId = dbUrl.searchParams.get("options");
dbUrl.searchParams.delete("options");

export const config = new DataSource({
    type: "cockroachdb",
    url: dbUrl.toString(),
    ssl: true,
    synchronize: false,
    migrationsTableName: "migrations",
    migrations: [__dirname + "/database/migrations/*.ts"],
    entities: [__dirname + "/modules/**/*.entity{.ts,.js}"],
    extra: {
        options: routingId
    }
})
