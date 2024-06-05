import Link from 'next/link';

function Card({ card, showLink = true }) {
  return (
    <div className="w-full max-w-md">
      <div className="rounded-lg bg-white shadow-lg dark:bg-gray-650 h-full flex flex-col">
        <div className="p-6 space-y-4 flex-grow">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">{card.title}</h2>
            <p className="text-gray-500 dark:text-gray-400">
              {card.description}
            </p>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <span>{card.author}</span>
            </div>
          </div>
        </div>
        {showLink && (
          <div className="p-6 flex items-center justify-between">
            <Link
              href={`/blog/${card.id}`}
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-all hover:bg-gray-700 hover:shadow-lg focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:hover:text-gray-800 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              See More
            </Link>
            <span className="text-sm text-gray-500 dark:text-gray-400">{card.date}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
