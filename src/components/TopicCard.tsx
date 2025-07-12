import React from 'react';

interface TopicCardProps {
    title: string;
    icon: string;
}

// Helper to determine card color based on title
const getCardColor = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('pangngalan pantangi')) return '#C0392B'; // dark red
    if (t.includes('pangngalan pambalana')) return '#B9770E'; // dark orange
    if (t.includes('pangngalan')) return '#884D0E'; // brown
    if (t.includes('pandiwang palipat')) return '#2471A3'; // strong blue
    if (t.includes('pandiwang katawanin')) return '#148F77'; // teal
    if (t.includes('pandiwa')) return '#6C3483'; // purple
    if (t.includes('pang-uri panlarawan')) return '#1A5276'; // navy
    if (t.includes('pang-uri pamilang')) return '#7D6608'; // olive
    if (t.includes('pang-uri pantangi')) return '#512E5F'; // deep violet
    if (t.includes('pang-uri')) return '#2874A6'; // blue
    if (t.includes('panghalip panao')) return '#196F3D'; // dark green
    if (t.includes('panghalip panaklaw')) return '#4A235A'; // dark purple
    if (t.includes('panghalip pamatlig')) return '#7B241C'; // brick red
    if (t.includes('panghalip pananong')) return '#633974'; // eggplant
    if (t.includes('panghalip')) return '#145A32'; // forest green
    if (t.includes('pangatnig')) return '#922B21'; // wine red
    if (t.includes('pang-abay')) return '#117864'; // deep teal
    if (t.includes('pang-angkop')) return '#1B2631'; // dark slate
    if (t.includes('pang-ukol')) return '#154360'; // dark blue
    return '#283747'; // default: dark gray-blue
};

const TopicCard: React.FC<TopicCardProps> = ({ title, icon }) => {
    const cardColor = getCardColor(title);
    return (
        <div
            className='w-[360px] h-[260px] md:w-[400px] md:h-[320px] min-w-0 rounded-2xl flex flex-col items-center justify-between p-8 relative shadow-md'
            style={{ backgroundColor: cardColor }}
        >
            <div className='w-full flex justify-between items-start mb-4'>
                <div className='font-bold text-xl md:text-2xl text-white text-left'>
                    {title.split('(')[0]}
                    <br />
                    {title.includes('(') && <span>({title.split('(')[1]}</span>}
                </div>
                <span className='text-3xl ml-2'>{icon}</span>
            </div>
            <button
                className='mt-8 bg-white text-xs font-semibold rounded-md px-8 py-2 shadow-md transition hover:bg-gray-100 cursor-pointer'
                style={{ color: cardColor }}
            >
                Mag simula
            </button>
        </div>
    );
};

export default TopicCard;
