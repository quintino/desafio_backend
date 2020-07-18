import {ConnectionOptions} from 'typeorm';

export class Orm {

    const config: any = {
        type: 'sqlite',
        database: 'vuttr.db',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
        synchronize: true,
        logging: true,
        migrationsRun: true,
    };

}