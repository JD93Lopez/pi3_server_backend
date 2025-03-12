import { AbstractFlashcard } from "../../../model/flashcard/AbstractFlashcard";

export default interface FlashcardByBiomeRetrieverServicePort {
    getFlashcardsByBiome(id_biome: number): Promise<AbstractFlashcard[]>;
}