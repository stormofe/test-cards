'use client';
import React from 'react';
import { SkeletonCard } from '../ui/SkeletonCard';
import { Card } from '../ui/Card';
import { CardData } from '../types/card';
import Button from '../ui/Button';

interface ClietsPageProps {
	cards: CardData[],
	loading: boolean,
	error: string | null,
	onRefresh: () => void
}

export default function ClientPage({ cards, error, onRefresh, loading }: ClietsPageProps) {

	return error ? (
		<div className="flex flex-col items-center justify-center text-center space-y-4">
			<p className="mb-4 text-red-600">{error}</p>
			<Button onClick={onRefresh}>
				Повторить
			</Button>
		</div>
	) : (
		<div className="flex flex-wrap justify-center items-center gap-4 flex-col md:flex-row">
			{loading
				? Array.from({ length: 7 }).map((_, idx) => <SkeletonCard key={idx} />)
				: cards.map((card, index) => <Card key={card.title + index} title={card.title} text={card.text} />)}
		</div>
	);
}