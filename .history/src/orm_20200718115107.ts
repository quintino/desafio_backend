export class Orm {

    static config: any = {
        type: 'sqlite',
        database: 'vuttr.db',
        entities: [],
        synchronize: true,
        logging: true,
        migrationsRun: true,
    };

}