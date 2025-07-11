import React from 'react';
import GreetingBanner from '../components/GreetingBanner';
import TopicCard from '../components/TopicCard';

export default function Home() {
    return (
        <main className='bg-gray-100 h-full'>
            <header>
                <h2 className='pt-5 md:pl-5 m-0 font-bold text-2xl font-sans text-center md:text-left'>
                    Lorence Gerona’s Status
                </h2>
            </header>
            <section
                className='grid grid-cols-1 md:grid-cols-[2fr_1fr] md:grid-rows-[auto_1fr_1.5fr] gap-6 p-5 h-[calc(100vh-60px)]'
                style={{ gridAutoRows: 'minmax(0,1fr)' }}
            >
                {/* Top left box */}
                <GreetingBanner
                    className='md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2'
                    greetingHeader={
                        <>
                            Maligayang pagbabalik,
                            <br />
                            Lorence!{' '}
                            <span className='inline-block align-middle'>
                                👋
                            </span>
                        </>
                    }
                    greetingText={
                        <>
                            Natuto ka na ng 70% ng iyong layunin ngayong linggo!
                            <br />
                            Ipagpatuloy mo lang at pagbutihin pa ang iyong
                            progreso.
                        </>
                    }
                    imageSrc='/images/welcome-image.png'
                    imageAlt='Welcome'
                />
                {/* Top right box (Badge section) */}
                <div className='md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 bg-white rounded-[22px] border-[2px] border-[#e5e7eb] box-border flex flex-col p-4 overflow-hidden shadow-none'>
                    <h3 className='font-bold text-2xl mb-6 text-gray-800'>
                        Badge
                    </h3>
                    <div className='flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#e5e7eb] scrollbar-track-transparent'>
                        {/* Badge cards */}
                        <div className='flex flex-col gap-4'>
                            {/* Badge 1 */}
                            <div className='flex items-center bg-[#fbefff] rounded-2xl p-4 shadow-sm'>
                                <div className='flex-shrink-0 w-14 h-14 bg-yellow-300 rounded-full flex items-center justify-center mr-4'>
                                    <span className='text-3xl'>🏅</span>
                                </div>
                                <div>
                                    <div className='font-bold text-lg'>
                                        1st position
                                    </div>
                                    <div className='text-gray-500 text-sm'>
                                        On Programming for beginners course
                                        <span className='align-super'>.</span>
                                    </div>
                                </div>
                            </div>
                            {/* Badge 2 */}
                            <div className='flex items-center bg-[#fff0f3] rounded-2xl p-4 shadow-sm'>
                                <div className='flex-shrink-0 w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center mr-4'>
                                    <span className='text-3xl'>🥈</span>
                                </div>
                                <div>
                                    <div className='font-bold text-lg'>
                                        1st position
                                    </div>
                                    <div className='text-gray-500 text-sm'>
                                        On Programming for beginners course
                                        <span className='align-super'>.</span>
                                    </div>
                                </div>
                            </div>
                            {/* Badge 3 */}
                            <div className='flex items-center bg-[#f0fff3] rounded-2xl p-4 shadow-sm'>
                                <div className='flex-shrink-0 w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mr-4'>
                                    <span className='text-3xl'>🏅</span>
                                </div>
                                <div>
                                    <div className='font-bold text-lg'>
                                        1st position
                                    </div>
                                    <div className='text-gray-500 text-sm'>
                                        On Programming for beginners course
                                        <span className='align-super'>.</span>
                                    </div>
                                </div>
                            </div>
                            {/* Badge 4 */}
                            <div className='flex items-center bg-[#fff6f0] rounded-2xl p-4 shadow-sm'>
                                <div className='flex-shrink-0 w-14 h-14 bg-yellow-300 rounded-full flex items-center justify-center mr-4'>
                                    <span className='text-3xl'>🏅</span>
                                </div>
                                <div>
                                    <div className='font-bold text-lg'>
                                        1st position
                                    </div>
                                    <div className='text-gray-500 text-sm'>
                                        On Programming for beginners course
                                        <span className='align-super'>.</span>
                                    </div>
                                </div>
                            </div>
                            {/* Badge 5 */}
                            <div className='flex items-center bg-[#e6f7ff] rounded-2xl p-4 shadow-sm'>
                                <div className='flex-shrink-0 w-14 h-14 bg-blue-300 rounded-full flex items-center justify-center mr-4'>
                                    <span className='text-3xl'>🎖️</span>
                                </div>
                                <div>
                                    <div className='font-bold text-lg'>
                                        1st position
                                    </div>
                                    <div className='text-gray-500 text-sm'>
                                        On Programming for beginners course
                                        <span className='align-super'>.</span>
                                    </div>
                                </div>
                            </div>
                            {/* Badge 6 */}
                            <div className='flex items-center bg-[#f9fbe7] rounded-2xl p-4 shadow-sm'>
                                <div className='flex-shrink-0 w-14 h-14 bg-green-200 rounded-full flex items-center justify-center mr-4'>
                                    <span className='text-3xl'>🏆</span>
                                </div>
                                <div>
                                    <div className='font-bold text-lg'>
                                        1st position
                                    </div>
                                    <div className='text-gray-500 text-sm'>
                                        On Programming for beginners course
                                        <span className='align-super'>.</span>
                                    </div>
                                </div>
                            </div>
                            {/* Badge 7 */}
                            <div className='flex items-center bg-[#f3e8ff] rounded-2xl p-4 shadow-sm'>
                                <div className='flex-shrink-0 w-14 h-14 bg-purple-300 rounded-full flex items-center justify-center mr-4'>
                                    <span className='text-3xl'>🏅</span>
                                </div>
                                <div>
                                    <div className='font-bold text-lg'>
                                        1st position
                                    </div>
                                    <div className='text-gray-500 text-sm'>
                                        On Programming for beginners course
                                        <span className='align-super'>.</span>
                                    </div>
                                </div>
                            </div>
                            {/* Badge 8 */}
                            <div className='flex items-center bg-[#ffe7e7] rounded-2xl p-4 shadow-sm'>
                                <div className='flex-shrink-0 w-14 h-14 bg-red-200 rounded-full flex items-center justify-center mr-4'>
                                    <span className='text-3xl'>🏅</span>
                                </div>
                                <div>
                                    <div className='font-bold text-lg'>
                                        1st position
                                    </div>
                                    <div className='text-gray-500 text-sm'>
                                        On Programming for beginners course
                                        <span className='align-super'>.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Middle left box */}
                <div className='md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 bg-white rounded-3xl border border-[#e5e7eb] box-border flex flex-col p-4 gap-4 shadow-sm'>
                    {/* Header */}
                    <h3 className='font-bold text-2xl text-gray-800'>
                        Educational Progress
                    </h3>
                    <div className='flex flex-col md:flex-row gap-4'>
                        {/* Left Card: Module Completed */}
                        <div className='flex-1 bg-[#e3f0ff] rounded-2xl p-4 flex flex-col justify-between min-w-[280px] relative overflow-visible'>
                            {/* Top icons */}
                            <div className='flex justify-between items-center mb-2'>
                                <span className='inline-flex items-center justify-center w-8 h-8 bg-white rounded-lg shadow-sm'>
                                    <span className='text-2xl'>🎯</span>
                                </span>
                                <span className='inline-flex items-center justify-center w-7 h-7 bg-white rounded-full shadow-sm'>
                                    <span className='text-lg text-gray-400'>
                                        &gt;
                                    </span>
                                </span>
                            </div>
                            {/* Title */}
                            <div className='font-bold text-lg text-gray-800 mb-2'>
                                Module Completed
                            </div>
                            {/* Main content: Progress and Lessons */}
                            <div className='flex flex-row items-center gap-6'>
                                {/* Progress */}
                                <div className='flex flex-col items-center'>
                                    <div className='relative w-16 h-16 mb-1'>
                                        <svg
                                            className='absolute top-0 left-0'
                                            width='64'
                                            height='64'
                                        >
                                            <circle
                                                cx='32'
                                                cy='32'
                                                r='28'
                                                stroke='#e0e7ef'
                                                strokeWidth='7'
                                                fill='none'
                                            />
                                            <circle
                                                cx='32'
                                                cy='32'
                                                r='28'
                                                stroke='#3b82f6'
                                                strokeWidth='7'
                                                fill='none'
                                                strokeDasharray='176'
                                                strokeDashoffset='44'
                                                strokeLinecap='round'
                                            />
                                        </svg>
                                        <div className='absolute inset-0 flex items-center justify-center text-base font-bold text-[#3b82f6]'>
                                            75%
                                        </div>
                                    </div>
                                    <div className='text-xs text-gray-500 font-semibold'>
                                        75% Completed
                                    </div>
                                </div>
                                {/* Lessons */}
                                <div className='flex flex-col gap-3'>
                                    <div className='flex items-center'>
                                        <span className='inline-flex items-center justify-center w-7 h-7 bg-yellow-100 rounded-full mr-2'>
                                            <span className='text-xl'>🏅</span>
                                        </span>
                                        <div>
                                            <div className='font-bold text-sm text-gray-800 leading-tight'>
                                                Completed Lessons
                                            </div>
                                            <div className='text-xs text-gray-500'>
                                                Kultura at Tradisyon
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='inline-flex items-center justify-center w-7 h-7 bg-gray-200 rounded-full mr-2'>
                                            <span className='text-xl'>🕑</span>
                                        </span>
                                        <div>
                                            <div className='font-bold text-sm text-gray-800 leading-tight'>
                                                Pending Lessons
                                            </div>
                                            <div className='text-xs text-gray-500'>
                                                Kasaysayan ng Pilipinas
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right Card: Badges Earning */}
                        <div className='flex-1 bg-[#f3eaff] rounded-2xl p-4 flex flex-row items-center min-w-[260px]'>
                            {/* Left: Trophy, title, and badges */}
                            <div className='flex-1 flex flex-col justify-center'>
                                <span className='inline-flex items-center justify-center w-8 h-8 bg-[#fff7c7] rounded-lg mb-2'>
                                    <span className='text-xl text-[#3b82f6]'>
                                        🏆
                                    </span>
                                </span>
                                <span className='font-bold text-lg text-gray-800 mb-2'>
                                    Badges Earning
                                </span>
                                <div className='flex items-center mb-1'>
                                    <span className='text-lg mr-1'>🥇</span>
                                    <span className='text-gray-500 font-bold mr-1'>
                                        Budget Hero:
                                    </span>
                                    <span className='font-bold text-black text-lg ml-2'>
                                        05
                                    </span>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-lg mr-1'>🥈</span>
                                    <span className='text-gray-500 font-bold mr-1'>
                                        Treasure Saver:
                                    </span>
                                    <span className='font-bold text-black text-lg ml-2'>
                                        03
                                    </span>
                                </div>
                            </div>
                            {/* Right: Medal illustration */}
                            <div className='flex items-center justify-center ml-4'>
                                {/* Larger placeholder for 3D medal image */}
                                <span className='text-8xl drop-shadow-lg'>
                                    🏅
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bottom left box (spans both columns) */}
                <div className='md:col-start-1 md:col-end-3 md:row-start-3 md:row-end-4 bg-white rounded-3xl box-border p-6 flex flex-col'>
                    <h3 className='font-bold text-2xl mb-6 text-gray-800'>
                        Suggested Topics
                    </h3>
                    <div className='overflow-x-auto'>
                        <div className='flex flex-wrap gap-6 justify-start'>
                            {/* Pangngalan Card */}
                            <TopicCard title='Pangngalan (noun)' icon='🪃' />
                            {/* Pandiwa Card */}
                            <TopicCard title='Pandiwa (verb)' icon='💻' />
                            {/* Pang-uri Card */}
                            <TopicCard title='Pang-uri (adjective)' icon='🎨' />
                            {/* Panghalip Card (optional, as in AralinPage) */}
                            <TopicCard title='Panghalip (pronoun)' icon='🧑‍🤝‍🧑' />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
