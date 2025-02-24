import { AbstractIcon } from "../../domain/model/icon/AbstractIcon";
import Icon from "../../domain/model/icon/Icon";
import { IconInterface } from "../../domain/types/IconInterface";

export default class IconHelper {

    endpointToDomainIcon(icon: IconInterface): AbstractIcon {
        return new Icon(
            icon.id_icon,
            icon.image,
        );
    }
}