// DuaPage.jsx
import React, { useState } from 'react';
import NavBar from './Navbar';
import SearchBar from './SearchBar';

const CommonDuasPage = () => {
    const commonDuas = [
        {
            id: 1,
            title: 'Dua before meal',
            arabicVerse: 'بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ',
            englishTranslation: 'Al’laah’s Name we begin with, The Compassionate, Most Merciful.',
        },
        {
            id: 2,
            title: 'Dua after meal',
            arabicVerse: 'اَ لْحَمْدُ للهِ الَّذِىْ اَطْعَمَنَا وَسَقَاناَ وَجَعَلَناَ مِنَ الْمُسْلِمِيْنَ',
            englishTranslation: 'All Praise is due to Al’laah, who has blessed us with food and drink and made us from amongst the Believers (Muslims).',
        },
        {
            id: 3,
            title: 'Dua when in anger',
            arabicVerse: 'اَعُوْذُ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيْمِ',
            englishTranslation: 'I seek refuge in Al’laah from Shaitaan the cursed.',
        },
        {
            id: 4,
            title: 'Dua for traveling',
            instructor: 'Instructor 3',
            arabicVerse: 'سُبْحَنَ الَّذِىْ سَخَّرَلَنَا هَذَا وَ مَا كُنَّا لَهُ مُقْرِنِيْنْ وَ اِنَّا اِلَى رَبِّنَا لَمُنْقَلِبُوْنْ',
            englishTranslation: 'Glory be to Al’laah who has given us control over this (mode of transport) and without his Grace we would not have been able to control it and undoubtedly we are to return towards our Lord.'
        },
        // Add more duas as needed
    ];

    const [duaToSearch, setDuaToSearch] = useState('');
    const [duasToShow, setDuaToShow] = useState(commonDuas);

    const handleQueryChange = (duaToSearch) => {
        setDuaToSearch(duaToSearch);
        if (duaToSearch === '') {
            setDuaToShow(commonDuas);
        }
    };

    const handleSearch = () => {
        if (duaToSearch === '') {
            setDuaToShow(commonDuas);
            return;
        }
        const filteredDuas = commonDuas.filter((dua) => {
            return dua.title.toLowerCase() === duaToSearch.toLowerCase();
        });
        setDuaToShow(filteredDuas);
    };

    return (
        <>
            <NavBar />
            <div className='p-5 bg-cover'>
                <div className='grid lg:mb-5 md:mb-5 mb-10 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
                    <h2 className='dua-page-heading font-bold text-4xl text-white m-5 lg:text-left md:text-left sm:text-center'>Common Duas</h2>
                    <div className='lg:mt-0 md:mt-0 sm:mt-5 flex lg:justify-end md:justify-end sm:justify-center items-center'>
                        <SearchBar
                            query={duaToSearch}
                            onQueryChange={handleQueryChange}
                            onSubmit={handleSearch}
                        />
                    </div>
                </div>
                <div className='common-duas grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                    {duasToShow.map((dua) => (
                        <div key={dua.id} className='dua-card'>
                            <div className='dua-wrapper'>
                                <div className='font-black text-3xl p-5 text-right h-2/5'>{dua.arabicVerse}</div>
                                <div className='english italic text-lg p-5 text-left h-3/5'>"{dua.englishTranslation}"</div>
                            </div>
                            <div className='dua-details bg-green-600 font-bold text-white text-xl'>
                                <h3>{dua.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CommonDuasPage;