'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, Menu } from 'lucide-react';

const Sidebar = () => {
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            {/* Hamburger button for mobile */}
            <button
                className='fixed top-6 left-4 z-30 md:hidden bg-sidebar border border-sidebar-border rounded-lg p-2 shadow'
                onClick={() => setSidebarOpen((open) => !open)}
                aria-label='Open sidebar'
            >
                <Menu size={28} />
            </button>
            {/* Overlay for mobile sidebar */}
            {sidebarOpen && (
                <div
                    className='fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden'
                    onClick={() => setSidebarOpen(false)}
                />
            )}
            {/* Sidebar */}
            <aside
                className={`
                    w-64 h-screen bg-sidebar border-r border-sidebar-border flex flex-col items-center py-8 justify-between
                    fixed top-0 left-0 z-30 transition-transform duration-300
                    md:static md:translate-x-0
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                    md:flex
                `}
            >
                <div className='w-full flex flex-col items-center'>
                    {/* Logo image */}
                    <div className='mb-8 flex flex-col items-center'>
                        <div className='w-40 h-32 flex items-center justify-center mb-2'>
                            <Image
                                src='/images/balik-wika.webp'
                                alt='Balik Wika Logo'
                                width={160}
                                height={128}
                                className='object-contain'
                                priority
                            />
                        </div>
                    </div>
                    {/* Navigation Buttons */}
                    <nav className='flex flex-col gap-4 w-full px-6 relative'>
                        <a
                            href='#'
                            className='bg-red-400 text-white font-medium py-2 rounded-lg shadow text-center transition-colors hover:bg-red-500 cursor-pointer'
                        >
                            Dashboard
                        </a>
                        <a
                            href='#'
                            className='bg-yellow-400 text-white font-medium py-2 rounded-lg shadow text-center transition-colors hover:bg-yellow-500 cursor-pointer'
                        >
                            Mga aralin
                        </a>
                        <a
                            href='#'
                            className='bg-green-400 text-white font-medium py-2 rounded-lg shadow text-center transition-colors hover:bg-green-500 cursor-pointer'
                        >
                            Pagsusulit
                        </a>
                        <a
                            href='#'
                            className='bg-blue-400 text-white font-medium py-2 rounded-lg shadow text-center transition-colors hover:bg-blue-500 cursor-pointer'
                        >
                            Aking profile
                        </a>
                        <div className='relative'>
                            <button
                                className='bg-purple-400 text-white font-medium py-2 rounded-lg shadow text-center flex items-center justify-between px-4 hover:bg-purple-500 cursor-pointer w-full'
                                onClick={() => setSettingsOpen((open) => !open)}
                                aria-haspopup='true'
                                aria-expanded={settingsOpen}
                            >
                                <span>Settings</span>
                                <ChevronDown
                                    size={18}
                                    className={`ml-2 transition-transform ${
                                        settingsOpen ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            {settingsOpen && (
                                <div className='absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 flex flex-col overflow-hidden animate-fade-in'>
                                    <a
                                        href='#'
                                        className='px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer text-left'
                                    >
                                        Account Settings
                                    </a>
                                </div>
                            )}
                        </div>
                    </nav>
                </div>
                {/* Logout Button */}
                <div className='w-full flex flex-col items-center mb-4'>
                    <button className='bg-orange-400 text-white font-medium py-2 rounded-lg shadow text-center w-11/12 hover:bg-orange-500 cursor-pointer'>
                        Mag log-out
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
