export class Util {

    static convertTags() {
        let list = '';
            for (const tag of item.tags) {
                list += (list ? '|' : '') + tag;
            }
    }

}