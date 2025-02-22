import { AbstractFlashcard } from "../../domain/model/flashcard/AbstractFlashcard";
import { OrganizerServicePort } from "../../domain/ports/driver/service/OrganizerServicePort";

export class OrganizerService implements OrganizerServicePort {

    prioritize(flashcards: AbstractFlashcard[]): AbstractFlashcard[] {
        
        // separar en 2 array 1 learned y el otro no
        let learnedFlashcards: AbstractFlashcard[] = [];
        let unlearnedFlashcards: AbstractFlashcard[] = []; 

        flashcards.forEach(card => {
            card.isLearned() ? learnedFlashcards.push(card) : unlearnedFlashcards.push(card);
        });

        // ordenar learnedFlashcards por fecha de aprendizaje
        learnedFlashcards.sort((a, b) => {
            return a.getLastDateAdded().getTime() - b.getLastDateAdded().getTime();
        });

        unlearnedFlashcards.sort((a, b) => {
            return a.getLastDateAdded().getTime() - b.getLastDateAdded().getTime();
        });

        // rellenar organizedFlashcards con 2 flashcards no aprendidas y una aprendida hasta terminar
        // si se vacia alguno las demas van al final

        return this.interleaveFlashcards(unlearnedFlashcards, learnedFlashcards);

    }

    private interleaveFlashcards(unlearned: AbstractFlashcard[], learned: AbstractFlashcard[]): AbstractFlashcard[] {
        const organized: AbstractFlashcard[] = [];
        let uIndex = 0;
        let lIndex = 0;

        while (uIndex < unlearned.length || lIndex < learned.length) {
            // Agregar hasta 2 no aprendidas
            for (let i = 0; i < 2; i++) {
                if (uIndex < unlearned.length) {
                    if (unlearned[uIndex] !== undefined ) {
                        organized.push(unlearned[uIndex] as AbstractFlashcard);
                    }
                    uIndex++;
                }
            }
            
            // Agregar 1 aprendida si hay disponibles

            if (lIndex < learned.length) {
                organized.push(learned[lIndex++] as AbstractFlashcard);
            }
        }

        return organized;
    }

}


