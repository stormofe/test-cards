'use client';
import { ReactNode } from 'react';
import Button from '../ui/Button';

interface LayoutProps {
	title: string;
	onRefresh: () => void;
	loading: boolean;
	disableRefresh: boolean;
	children: ReactNode;
}

export default function Layout({ title, onRefresh, loading, disableRefresh, children }: LayoutProps) {
	return (
		<div className="min-h-screen flex flex-col">
			<header className="fixed top-0 w-full bg-white shadow p-4 flex justify-between items-center z-10">
				<h1 className="text-xl font-semibold">{title}</h1>
        <Button onClick={onRefresh} disabled={loading || disableRefresh} loading={loading}>
          Обновить
        </Button>
			</header>

			<main className="flex-grow pt-24 pb-24 flex justify-center  p-4">
				{children}
			</main>

			<footer className="fixed bottom-0 w-full bg-white shadow-inner p-4 text-center">
				© 2025 Test Project
			</footer>
		</div>
	);
}
