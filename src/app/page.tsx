import React from 'react';

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
                <section className='relative md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 bg-[#9486d8] rounded-3xl box-border flex flex-col lg:flex-row items-center lg:items-center pl-6 pr-6 py-8 min-h-[220px] overflow-visible'>
                    <div className='flex-1 z-10 w-full md:pr-8'>
                        <h1 className='text-2xl md:text-4xl font-bold text-[#e6e6e6] mb-4 leading-tight text-center md:text-left'>
                            Maligayang pagbabalik,
                            <br />
                            Lorence!{' '}
                            <span className='inline-block align-middle'>
                                👋
                            </span>
                        </h1>
                        <p className='text-base md:text-xl text-[#e6e6e6] text-center md:text-left'>
                            Natuto ka na ng 70% ng iyong layunin ngayong linggo!
                            <br />
                            Ipagpatuloy mo lang at pagbutihin pa ang iyong
                            progreso.
                        </p>
                    </div>
                    <div className='hidden md:flex z-20'>
                        <img
                            src='/images/welcome-image.png'
                            alt='Welcome'
                            className='hidden lg:block h-65 w-auto object-contain drop-shadow-lg mb-[-40px]'
                        />
                    </div>
                </section>
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
                        <div className='flex flex-wrap gap-8 justify-center items-center'>
                            {/* Pangngalan Card */}
                            <div className='flex-1 min-w-[220px] md:min-w-[320px] max-w-[400px] h-[220px] md:h-[260px] bg-[#ffbe85] rounded-2xl flex flex-col items-center justify-between p-8 relative shadow-md'>
                                <div className='w-full flex justify-between items-start mb-4'>
                                    <div className='font-bold text-xl md:text-2xl text-white text-left'>
                                        Pangngalan
                                        <br />
                                        (noun)
                                    </div>
                                    <span className='text-3xl ml-2'>
                                        🪃
                                    </span>{' '}
                                    {/* Replace with your illustration */}
                                </div>
                                <button
                                    className='mt-8 bg-white text-xs font-semibold rounded-md px-8 py-2 shadow-md transition hover:bg-gray-100 cursor-pointer'
                                    style={{ color: '#ffbe85' }}
                                >
                                    Mag simula
                                </button>
                            </div>
                            {/* Pandiwa Card */}
                            <div className='flex-1 min-w-[220px] md:min-w-[320px] max-w-[400px] h-[220px] md:h-[260px] bg-[#d46cf7] rounded-2xl flex flex-col items-center justify-between p-8 relative shadow-md'>
                                <div className='w-full flex justify-between items-start mb-4'>
                                    <div className='font-bold text-xl md:text-2xl text-white text-left'>
                                        Pandiwa
                                        <br />
                                        (verb)
                                    </div>
                                    <span className='text-3xl ml-2'>
                                        💻
                                    </span>{' '}
                                    {/* Replace with your illustration */}
                                </div>
                                <button
                                    className='mt-8 bg-white text-xs font-semibold rounded-md px-8 py-2 shadow-md transition hover:bg-gray-100 cursor-pointer'
                                    style={{ color: '#d46cf7' }}
                                >
                                    Mag simula
                                </button>
                            </div>
                            {/* Pang-uri Card */}
                            <div className='flex-1 min-w-[220px] md:min-w-[320px] max-w-[400px] h-[220px] md:h-[260px] bg-[#6ed6fb] rounded-2xl flex flex-col items-center justify-between p-8 relative shadow-md'>
                                <div className='w-full flex justify-between items-start mb-4'>
                                    <div className='font-bold text-xl md:text-2xl text-white text-left'>
                                        Pang-uri
                                        <br />
                                        (adjective)
                                    </div>
                                    <span className='text-3xl ml-2'>
                                        🎨
                                    </span>{' '}
                                    {/* Replace with your illustration */}
                                </div>
                                <button
                                    className='mt-8 bg-white text-xs font-semibold rounded-md px-8 py-2 shadow-md transition hover:bg-gray-100 cursor-pointer'
                                    style={{ color: '#6ed6fb' }}
                                >
                                    Mag simula
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
