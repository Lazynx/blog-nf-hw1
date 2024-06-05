"use client"
import Image from "next/image";
import Link from "next/link";
import Card from "@/components/ui/Card";
import { useEffect, useState } from 'react';

async function fetchCards() {
  const res = await fetch('/data.json');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

function getRandomCards(cards, count) {
  const shuffled = cards.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function Home() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadCards() {
      try {
        const data = await fetchCards();
        const randomCards = getRandomCards(data, 3);
        setCards(randomCards);
      } catch (err) {
        setError(err.message);
      }
    }

    loadCards();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    
    <main className="flex-1 extra-height">
        <section className="w-full mx-auto py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Discover the Latest Insights and Trends
              </h1>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Our blog is your go-to source for the latest news, tips, and insights in the world of technology and
                business.
              </p>
              <Link
                href="/blog"
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-all hover:bg-gray-700 hover:shadow-lg focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:hover:text-gray-800 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Read More
              </Link>
            </div>
            <Image src="/images/hero.jpg" className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover" alt="My Photo" width={500} height={500} />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Posts</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Check out our most popular and recent blog posts.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8 container">
            {cards.length > 0 ? (
              cards.map((card, index) => (
                <Card key={index} card={card} />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </section>
      </main>
  );
}
