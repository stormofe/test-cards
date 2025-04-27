'use client';
import Layout from '../components/Layout';
import useCards from '../hooks/useCards';
import ClientPage from './ClientPage';

export default function CardsLayout() {
	const { cards, loading, error, disableRefresh, fetchCards } = useCards();
	return (
		<Layout title="Карточки" onRefresh={fetchCards} loading={loading} disableRefresh={disableRefresh}>
			<ClientPage cards={cards} error={error} loading={loading} onRefresh={fetchCards} />
		</Layout>
	);
}