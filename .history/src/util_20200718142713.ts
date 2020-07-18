export class Util {

    static convertTags(tags) {
        let list = '';
            for (const tag of tags) {
                list += (list ? '|' : '') + tag;
            }
    }

}