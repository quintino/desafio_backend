const config: any = {
    type: 'sqlite',
    database: 'vuttr.db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    synchronize: false,
    logging: true,
    migrationsRun: true,
    logger: 'file',
};

export = config;