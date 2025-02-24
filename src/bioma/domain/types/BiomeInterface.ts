import { ThemeInterface } from "./ThemeInterface";
import { TopicInterface } from "./TopicInterface";

export interface BiomeInterface {
    id_biome: number;
    name: string;
    theme: ThemeInterface;
    topics: TopicInterface[];
}