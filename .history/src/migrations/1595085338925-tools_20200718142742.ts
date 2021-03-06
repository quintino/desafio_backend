import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import { Util } from "src/util";

const toolsSeed = [
    {
        id: 1,
        title: "Notion",
        link: "https://notion.so",
        description: "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
        tags: [
            "organization",
            "planning",
            "collaboration",
            "writing",
            "calendar"
        ]
    },
    {
        id: 2,
        title: "json-server",
        link: "https://github.com/typicode/json-server",
        description: "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
        tags: [
            "api",
            "json",
            "schema",
            "node",
            "github",
            "rest"
        ]
    },
    {
        id: 3,
        title: "fastify",
        link: "https://www.fastify.io/",
        description: "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
        tags: [
            "web",
            "framework",
            "node",
            "http2",
            "https",
            "localhost"
        ]
    }
];

export class tools1595085338925 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const array = [];
        for (const item of toolsSeed) {
            let list = '';
            for (const tag of item.tags) {
                list += (list ? '|' : '') + tag;
            }
            array.push({
                id: item.id,
                title: item.title,
                link: item.link,
                description: item.description,
                tags: Util.convertTags
            });
        }
        await getRepository('tools').save(array);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
