import { AbstractBiome } from "../../domain/model/biome/AbstractBiome";
import Biome from "../../domain/model/biome/Biome";
import { BiomeInterface } from "../../domain/types/BiomeInterface";
import ThemeHelper from "./ThemeHelper";
import TopicHelper from "./TopicHelper";

export default class BiomeHelper {
    endpointToDomainBiome(biomeClient: BiomeInterface) : AbstractBiome {
        const themeHelper = new ThemeHelper();
        const topicHelper = new TopicHelper();

        return new Biome({
            id_biome: biomeClient.id_biome,
            name: biomeClient.name,
            theme: themeHelper.endpointToDomainTheme(biomeClient.theme),
            topics: biomeClient.topics.map((topic) => {
                return topicHelper.endpointToDomainTopic(topic)
            })
        });
    }
}
