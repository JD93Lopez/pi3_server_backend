import { AbstractTopic } from "./AbstractTopic";


export class NullTopic extends AbstractTopic {
    constructor() {
        super(
          0,
          "",
          ""
        );
    }

    isNull(): boolean {
        return true;
    }

}