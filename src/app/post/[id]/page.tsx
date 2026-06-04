import { notFound } from 'next/navigation';
import type { Post } from '@/types';

export default async function Post({
	params
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const data = (await res.json()) as Post;

	if (res.status === 404) {
		notFound(); // Triggers app/[...]/not-found.tsx
	}

	if (!res.ok) {
		return <p>There was an error loading the post.</p>;
	}

	return (
		<main className='p-4 space-y-4'>
			<div className='border p-2 rounded'>
				<h2 className='font-semibold'>{data.title}</h2>
			</div>
		</main>
	);
}
