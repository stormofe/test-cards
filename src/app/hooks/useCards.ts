'use client';
import { useState, useEffect, useRef } from 'react';
import axios, { CancelTokenSource } from 'axios';
import { CardData } from '../types/card';
import { sortCards } from '../utils/sortCards';

const API_URL = 'https://node-test-server-production.up.railway.app/api/cards';

export default function useCards() {
	const [cards, setCards] = useState<CardData[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [disableRefresh, setDisableRefresh] = useState(false);
	const cancelTokenRef = useRef<CancelTokenSource | null>(null);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const fetchCards = async () => {
		cancelTokenRef.current?.cancel('New request initiated');
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		const source = axios.CancelToken.source();
		cancelTokenRef.current = source;
		setLoading(true);
		setError(null);
		try {
			const resp = await axios.get<{ cards: CardData[] }>(API_URL, { cancelToken: source.token });
			const sorted = sortCards(resp.data.cards);
			const filled = [...sorted];
			while (filled.length < 7) filled.push({ id: `empty-${filled.length}`, title: '', text: '' });
			setCards(filled);
			setLoading(false);
			setDisableRefresh(true);
			timeoutRef.current = setTimeout(() => {
				setDisableRefresh(false);
				timeoutRef.current = null;
			}, 3000);
		} catch (err: unknown) {
			if (axios.isCancel(err)) {
				return;
			}
			const message = axios.isAxiosError(err) ? err.message : 'Не удалось загрузить карточки.';
			setError(message);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchCards();
		return () => {
			cancelTokenRef.current?.cancel()
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);

	return { cards, loading, error, disableRefresh, fetchCards };
}