'use client';
import React from 'react';
import Layout from '../components/Layout';
import useCards from '../hooks/useCards';
import { SkeletonCard } from '../ui/SkeletonCard';
import { Card } from '../ui/Card';
import Button from '../ui/Button';

export default function ClientPage() {
	const { cards, loading, error, disableRefresh, fetchCards } = useCards();
	return (
		<Layout title="Карточки" onRefresh={fetchCards} loading={loading} disableRefresh={disableRefresh}>
			{
				error ? (
					<div className="flex flex-col items-center justify-center text-center space-y-4">
						<p className="mb-4 text-red-600">{error}</p>
						<Button onClick={fetchCards}>
							Повторить
						</Button>
					</div>
				) : (
					<div className="flex flex-wrap justify-center items-center gap-4 flex-col md:flex-row">
						{loading
							? Array.from({ length: 7 }).map((_, idx) => <SkeletonCard key={idx} />)
							: cards.map((card, index) => <Card key={card.title + index} title={card.title} text={card.text} />)}
					</div>
				)
			}
		</Layout>
	)
}