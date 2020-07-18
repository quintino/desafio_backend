import {ConnectionOptions} from 'typeorm';

static config: ConnectionOptions = {
    type: 'sqlite',
    database: 'vuttr.db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    synchronize: true,
    logging: true,
    migrationsRun: true,
};