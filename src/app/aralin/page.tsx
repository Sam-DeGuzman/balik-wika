'use client';
import React, { useState } from 'react';
import GreetingBanner from '@/components/GreetingBanner';
import TopicCard from '@/components/TopicCard';

export default function AralinPage() {
    // Mock topics array
    const mockTopics = [
        { title: 'Pangngalan (noun)', icon: '🪃' },
        { title: 'Pandiwa (verb)', icon: '💻' },
        { title: 'Pang-uri (adjective)', icon: '🎨' },
        { title: 'Panghalip (pronoun)', icon: '✨' },
        { title: 'Pangatnig (conjunction)', icon: '🔗' },
        { title: 'Pang-abay (adverb)', icon: '🚀' },
        { title: 'Pang-angkop (ligature)', icon: '🧩' },
        { title: 'Pang-ukol (preposition)', icon: '📍' },
        { title: 'Pangngalan Pantangi (proper noun)', icon: '🏙️' },
        { title: 'Pangngalan Pambalana (common noun)', icon: '🏡' },
        { title: 'Panghalip Panao (personal pronoun)', icon: '🧑' },
        { title: 'Panghalip Panaklaw (indefinite pronoun)', icon: '🌐' },
        { title: 'Panghalip Pamatlig (demonstrative pronoun)', icon: '👆' },
        { title: 'Panghalip Pananong (interrogative pronoun)', icon: '❓' },
        { title: 'Pandiwang Palipat (transitive verb)', icon: '🔄' },
        { title: 'Pandiwang Katawanin (intransitive verb)', icon: '🏃' },
        { title: 'Pang-uri Panlarawan (descriptive adjective)', icon: '🖌️' },
        { title: 'Pang-uri Pamilang (numeral adjective)', icon: '🔢' },
        { title: 'Pang-uri Pantangi (proper adjective)', icon: '🏅' },
    ];

    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const perPage = 10;

    // Filter topics by search
    const filteredTopics = mockTopics.filter((topic) =>
        topic.title.toLowerCase().includes(search.toLowerCase())
    );
    const pageCount = Math.ceil(filteredTopics.length / perPage);
    const paginatedTopics = filteredTopics.slice(
        (page - 1) * perPage,
        page * perPage
    );

    // Reset to page 1 if search changes
    React.useEffect(() => {
        setPage(1);
    }, [search]);

    return (
        <main className='bg-gray-100 h-full'>
            <header>
                <h2 className='pt-5 md:pl-5 m-0 font-bold text-2xl font-sans text-center md:text-left'>
                    Mga Aralin
                </h2>
            </header>
            <div className='px-0 md:px-5 mt-4'>
                <GreetingBanner
                    greetingHeader={
                        <>
                            Maligayang pagdating,{' '}
                            <span className='inline-block'>
                                Lorence!{' '}
                                <span role='img' aria-label='waving hand'>
                                    👋
                                </span>
                            </span>
                        </>
                    }
                    greetingText={
                        <>
                            Handa ka na bang matuto Halikanat tayo&apos;y
                            magaral na, Bawat leksyon dito ay espesyal na
                            inihanda upang matulungan kang mas mapalawak ang
                            iyong kaalaman at mapalakas ang iyong kakayahan
                        </>
                    }
                    imageSrc='/images/aralin-welcome.png'
                    imageAlt='Welcome illustration'
                />
            </div>
            <div className='px-0 md:px-5 mt-8'>
                <div className='bg-white rounded-2xl p-6 shadow flex flex-col gap-4 min-h-[600px]'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                        <h3 className='font-bold text-2xl text-gray-900'>
                            Mga Topics
                        </h3>
                        <div className='relative w-full md:w-80'>
                            <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
                                <svg
                                    width='20'
                                    height='20'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        stroke='currentColor'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 6.5 6.5a7.5 7.5 0 0 0 10.6 10.6Z'
                                    />
                                </svg>
                            </span>
                            <input
                                type='text'
                                placeholder='Search...'
                                className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9486d8] bg-gray-50 text-gray-900 shadow-sm'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* Topic Cards Section */}
                    <div className='flex flex-wrap gap-6 mt-4 justify-center md:justify-start min-h-[400px]'>
                        {paginatedTopics.length === 0 ? (
                            <div className='text-gray-500 text-center w-full'>
                                No topics found.
                            </div>
                        ) : (
                            paginatedTopics.map((topic, idx) => (
                                <TopicCard
                                    key={idx}
                                    title={topic.title}
                                    icon={topic.icon}
                                />
                            ))
                        )}
                    </div>
                    {/* Pagination Bar */}
                    <div className='flex justify-center items-center mt-8'>
                        <nav className='flex gap-2'>
                            <button
                                className='px-3 py-1 rounded bg-transparent text-gray-500 hover:bg-gray-200 transition cursor-pointer'
                                onClick={() => setPage(page - 1)}
                                disabled={page === 1}
                            >
                                Previous
                            </button>
                            {Array.from({ length: pageCount }, (_, i) => (
                                <button
                                    key={i}
                                    className={`px-3 py-1 rounded cursor-pointer ${
                                        page === i + 1
                                            ? 'bg-yellow-400 text-white font-bold shadow'
                                            : 'bg-gray-200 text-gray-700 hover:bg-yellow-400 hover:text-white transition'
                                    }`}
                                    aria-current={
                                        page === i + 1 ? 'page' : undefined
                                    }
                                    onClick={() => setPage(i + 1)}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <button
                                className='px-3 py-1 rounded bg-transparent text-gray-500 hover:bg-gray-200 transition cursor-pointer'
                                onClick={() => setPage(page + 1)}
                                disabled={page === pageCount || pageCount === 0}
                            >
                                Next
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </main>
    );
}
