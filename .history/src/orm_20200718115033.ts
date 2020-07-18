export class ORM {

    static config: any = {
        type: 'postgres',
        host: '34.68.139.182',
        port: 5432,
        username: 'blueghost',
        password: 'bg2019!',
        database: 'blueghostdb',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/database/**/*{.ts,.js}'],
        synchronize: true,
        migrationsRun: true,
        // logging: ['error', 'query'],
        logging: ['error'],
    };

}