import { CardData } from "../types/card";

export const sortCards = (cards: CardData[]): CardData[] =>
	cards
		.slice()
		.sort((a, b) => {
			const aEmpty = a.title.trim() === '';
			const bEmpty = b.title.trim() === '';
			if (aEmpty && bEmpty) return 0;
			if (aEmpty) return 1;
			if (bEmpty) return -1;

			const alpha = a.title.localeCompare(b.title);
			if (alpha !== 0) return alpha;

			return a.text.length - b.text.length;
		})
		.slice(0, 7);