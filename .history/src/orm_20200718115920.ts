export class Orm {

    static config: any = {
        type: 'sqlite',
        database: 'vuttr.db',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/database/**/*{.ts,.js}'],
        synchronize: true,
        logging: true,
        migrationsRun: true,
    };

}