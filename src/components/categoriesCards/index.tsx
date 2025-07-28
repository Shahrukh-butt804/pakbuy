import React from 'react';

const categories = [
  { title: 'Brain Health', keyword: 'mind', color: 'text-pink-300' },
  { title: 'Elite Fitness', keyword: 'ultra', color: 'text-yellow-300' },
  { title: 'Metabolism', keyword: 'shift', color: 'text-green-400' },
  { title: 'Heart Health', keyword: 'beat', color: 'text-blue-300' },
  { title: 'Sleep Well', keyword: 'snooze', color: 'text-cyan-300' },
];

const ChooseSection: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full">
        {categories.map((item, index) => (
          <div
            key={index}
            className="border border-white/10 bg-[#000000c4] rounded-lg p-4 text-center hover:shadow-md transition relative categories-main-cards"
          >
            <p className="text-sm text-white/70 mb-2 categories-title">{item.title}</p>
            <p className="text-white text-sm categories-choose">CHOOSE</p>
            <p className={`text-2xl font-semibold italic categories-name ${item.color}`}>{item.keyword}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseSection;
