import Link from 'next/link';
import Counter from '@/components/Counter'; // The @ is just an alias for the base directory

type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

export default async function Home() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	if (!res.ok) throw new Error('Failed to fetch posts');
	const posts = (await res.json()) as Post[];

	console.log('This log is from the server side');

	return (
		<main className='p-4 space-y-4'>
			<section>
				<h2 className='text-xl font-semibold'>Try the Counter</h2>
				<Counter />
			</section>
			<section>
				<ul className='space-y-2'>
					{posts.map((post) => (
						<Link href={`/post/${post.id}`} key={post.id}>
							<li className='border p-2 rounded mb-5'>
								<h2 className='font-semibold'>{post.title}</h2>
								<p>{post.body}</p>
							</li>
						</Link>
					))}
				</ul>
			</section>
			<h1 className='text-2xl font-bold'>Latest Posts</h1>
		</main>
	);
}
