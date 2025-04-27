import React from 'react';
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-4xl font-bold mb-4">404 — Страница не найдена</h1>
      <p className="mb-6 text-center text-gray-600">
        К сожалению, такой страницы не существует.
      </p>
			<Link href="/">Перейти на главную</Link>
    </div>
  );
}