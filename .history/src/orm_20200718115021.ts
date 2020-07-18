export class Env {

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

    static firebaseConfig: any = {
        apiKey: 'AIzaSyBrwMWG6Ew53ywEPbI-0ya-k-zrdQKOivk',
        authDomain: 'b2in-dev.firebaseapp.com',
        databaseURL: 'https://b2in-dev.firebaseio.com',
        projectId: 'b2in-dev',
        storageBucket: 'b2in-dev.appspot.com',
        messagingSenderId: '901059724806',
        appId: '1:901059724806:web:0b5e7d940ff581b6',
    };

    static apiName = 'Blueghost (Dev)';
    static prodMode = false;

}