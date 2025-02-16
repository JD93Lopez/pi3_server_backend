import { abstractTopic } from "./AbstractTopic";

export class NullUser extends abstractTopic {
    constructor() {
        super(
          "",
          "",
          ""
        );
    }

    isNull(): boolean {
        return true;
    }

}