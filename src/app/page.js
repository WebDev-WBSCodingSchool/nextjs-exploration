import Link from 'next/link';

export default function Home() {
  return (
    <main className='p-4 space-y-4'>
      <h1 className='text-2xl font-bold'>Latest Posts</h1>
      {Array.from({ length: 5 }, (_, i) => (
        <Link href={`/post/${i + 1}`} key={i}>
          <div className='border p-2 rounded mb-5'>
            <h2 className='font-semibold'>Post {i + 1}</h2>
            <p className='text-gray-700'>This is a brief description of post {i + 1}.</p>
          </div>
        </Link>
      ))}
    </main>
  );
}
