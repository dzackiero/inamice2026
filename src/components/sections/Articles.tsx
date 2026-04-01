import React from 'react';
import { ARTICLES } from '../../constants';

const Articles = () => {
    return (
        <section id="articles" className="bg-white pb-20 md:pb-32">
            <div className="section-container">

                {/* Section Header */}
                <div className="flex flex-col items-center mb-10 md:mb-16">
                    <div className="flex items-center mb-2">
                        <img src="/img/acc-fusion.png" alt="ornament" className="w-20 md:w-28 h-auto object-contain" />
                    </div>
                    <div className="bg-inamice-orange text-white px-10 py-2 w-full max-w-sm text-center">
                        <h2 className="text-xl font-bold uppercase tracking-widest">ARTICLES</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-10">
                    {ARTICLES.map((article, idx) => (
                        <div key={idx} className="group cursor-pointer flex flex-col h-full">
                            {/* Card Wrapper with Gradient Stroke */}
                            <div className="p-[3px] md:p-[4px] bg-gradient-to-b from-inamice-blue-1 to-inamice-orange rounded-tr-[2.5rem] rounded-bl-[2.5rem] md:rounded-tr-[4rem] md:rounded-bl-[4rem] rounded-tl-none rounded-br-none overflow-hidden flex flex-col shadow-md hover:shadow-xl transition-all duration-300 h-full">

                                <div className="bg-white rounded-tr-[calc(2.5rem-3px)] rounded-bl-[calc(2.5rem-3px)] md:rounded-tr-[calc(4rem-4px)] md:rounded-bl-[calc(4rem-4px)] rounded-tl-none rounded-br-none overflow-hidden flex flex-col h-full">
                                    {/* Image Area with its own Gradient Stroke */}
                                    <div className="shrink-0 p-[3px] md:p-[4px] bg-gradient-to-b from-inamice-blue-1 to-inamice-orange rounded-tr-[calc(2.5rem-3px)] rounded-bl-[calc(2.5rem-3px)] md:rounded-tr-[calc(4rem-4px)] md:rounded-bl-[calc(4rem-4px)] rounded-tl-none rounded-br-none z-10 relative">
                                        <div className="relative h-40 sm:h-44 md:h-56 w-full overflow-hidden rounded-tr-[calc(2.5rem-6px)] rounded-bl-[calc(2.5rem-6px)] md:rounded-tr-[calc(4rem-8px)] md:rounded-bl-[calc(4rem-8px)] rounded-tl-none rounded-br-none bg-white">
                                            <img
                                                src={article.image}
                                                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                                alt={article.title}
                                                referrerPolicy="no-referrer"
                                            />
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow relative bg-white">
                                        {/* Date Badge */}
                                        <div className="bg-inamice-orange text-white text-[11px] md:text-xs font-bold px-3 py-1.5 rounded-sm w-fit mb-4">
                                            {article.date}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-[14px] sm:text-[15px] md:text-[1.1rem] font-bold text-inamice-blue-3 leading-snug mb-4 md:mb-6 group-hover:text-inamice-orange transition-colors">
                                            {article.title}
                                        </h3>

                                        {/* Source */}
                                        <span className="text-inamice-blue-3 font-semibold text-[11px] md:text-xs mt-auto text-right w-full block">
                                            {article.source}
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Articles;
