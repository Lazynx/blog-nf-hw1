"use client"
import Image from "next/image";
import Link from "next/link"
import { useEffect, useState } from 'react';
import Card from "@/components/ui/Card";

async function fetchCards() {
  const res = await fetch('/data.json');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default function Home() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadCards() {
      try {
        const data = await fetchCards();
        setCards(data);
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
    <main className="flex-1 container extra-height">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
        {cards.length > 0 ? (
          cards.map((card, index) => (
            <Card key={index} card={card} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
}
