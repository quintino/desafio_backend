export class Util {

    static convertTags(tags: string[]) {
        let list = '';
        for (const tag of tags) {
            list += (list ? '|' : '') + tag;
        }
        return list;
    }

}