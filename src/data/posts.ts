import type { Post } from '@/types';

export const getPosts = async (): Promise<Post[]> => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	if (!res.ok) throw new Error('Failed to fetch posts');
	const posts = (await res.json()) as Post[];
	return posts;
};
