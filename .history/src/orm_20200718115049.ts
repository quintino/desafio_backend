export class Orm {

    static config: any = {
        type: 'sqlite',
      database: 'vuttr.db',
      entities: [],
      synchronize: true,
      logging: true,
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