import React, { useState } from 'react';
import { Modal } from 'antd';

const categories = [
  {
    title: 'Brain Health',
    keyword: 'mind',
    color: 'text-pink-300',
    points: [
      { label: 'KNOW', desc: 'Boost mental clarity at home with easy, insightful tech.' },
      { label: 'PREDICT', desc: 'Discover your Alzheimer’s and dementia risk with a simple genetic test.' },
      { label: 'ENGAGE', desc: 'Join thousands using a proven brain tool—easy, effective, anywhere.' },
      { label: 'PREVENT', desc: 'Eat smarter, think sharper—best food for your brain.' },
    ],
    tagline: 'Clear fog. Gain Insight...Peace of Mind.',
  },
  {
    title: 'Elite Fitness',
    keyword: 'ultra',
    color: 'text-yellow-300',
    points: [
      { label: 'KNOW', desc: 'Track your body’s full potential with precision tech.' },
      { label: 'PREDICT', desc: 'Learn injury risks and recovery rates with performance data.' },
      { label: 'ENGAGE', desc: 'Join elite athletes using smart training tools.' },
      { label: 'PREVENT', desc: 'Prevent burnout and optimize your fitness plan.'  },
    ],
    tagline: 'Train smarter. Push limits...Go Ultra.',
  },
  {
    title: 'Metabolism',
    keyword: 'shift',
    color: 'text-green-400',
    subtitle: 'NON-MEMBER PREVIEW',
    points: [
      { label: 'KNOW', desc: 'In just 20 minutes, learn how your body really works.' },
      { label: 'PREDICT', desc: 'Spot future metabolic risks early and take control.' },
      { label: 'ENGAGE', desc: 'Understand your metabolism—and start shifting it.' },
      { label: 'PREVENT', desc: 'Real food, real life—fuel your body well -- naturally.' },
    ],
    tagline: 'Understand. Satisfy...Feel Good.',
  },
  {
    title: 'Heart Health',
    keyword: 'beat',
    color: 'text-blue-300',
    points: [
      { label: 'KNOW', desc: 'Find out where your heart health stands-knowledge is power.' },
      { label: 'PREDICT', desc: '1 in 5 over 45 have hidden heart disease. Are you at risk?' },
      { label: 'ENGAGE', desc: 'Get daily insights that drive real change.' },
      { label: 'PREVENT', desc: 'Protect your heart with food-first strategies that work.' },
    ],
    tagline: 'See. Know...Live with confidence.',
  },
  {
    title: 'Sleep Well',
    keyword: 'snooze',
    color: 'text-cyan-300',
    points: [
      { label: 'KNOW', desc: 'Finally understand why you’re not sleeping-and improve it.' },
      { label: 'PREDICT', desc: 'Wind down with proven tech that sets the stage for rest.' },
      { label: 'ENGAGE', desc: 'Simple tools, real sleep-wake up feeling human again.' },
      { label: 'PREVENT', desc: 'Eat for better sleep and better days ahead.' },
    ],
    tagline: 'Rest. Recover... Robust Living.',
  },
  // Add more categories as needed...
];

const ChooseSection: React.FC = () => {
  const [selected, setSelected] = useState<any>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const isMember = false; // 🔁 Replace with real login state

  const openModal = (item: any) => {
    setSelected(item);
    setIsModalVisible(true);
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div className="flex justify-center items-center gap-5 flex-wrap">
        {categories.map((item, index) => (
          <div
            key={index}
            className="golden_border border-white/10 bg-[#000000c4] rounded-sm p-4 py-10 text-center hover:shadow-md transition relative categories-main-cards w-[280px] cursor-pointer"
            onClick={() => openModal(item)}
            data-aos="zoom-in"
            data-aos-delay={index * 300}
            data-aos-duration="800"
          >
            <p className="text-sm text-white/70 mb-2 categories-title">{item.title}</p>
            <p className="text-white text-sm categories-choose">CHOOSE</p>
            <p className={`text-2xl font-semibold italic categories-name ${item.color}`}>{item.keyword}</p>
          </div>
        ))}
      </div>

      <Modal
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        centered
        width={650}
        className="custom-ant-modal product-modal"
        closeIcon={<span className="text-sm px-4 py-1 rounded-full bg-[#e3cbb3]">CLOSE</span>}
      >
        {selected && (
          <div className="bg-[#0c0d16] p-8 rounded-md text-white">
            <div className="text-left">
                  {/* Conditional: show subtitle OR purchase button */}
              {!isMember ? (
                <p className="text-md font-semibold text-center mb-6 text-white/70 uppercase tracking-wide">
                  NON-MEMBER PREVIEW
                </p>
              ) : (
                <div className="flex justify-center mb-6">
                  <button
                    className="bg-[#e3cbb3] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#d2b89f] transition"
                    style={{color: '#000'}}
                    onClick={() => {
                      console.log("Purchase clicked for:", selected.keyword);
                      // 🔁 Add your purchase logic here
                    }}
                  >
                    Purchase Collection
                  </button>
                </div>
              )}
              <h2 className="text-sm font-semibold mb-4 text-white/60">
                CHOOSE{" "}
                <span className={`italic text-lg ml-1 font-medium ${selected.color}`}>
                  {selected.keyword}
                </span>
              </h2>

          

              {selected.points.map((point: any, idx: number) => (
                <p key={idx} className="mb-2">
                  <span className={`font-bold mr-2 ${selected.color}`}>{point.label}</span>
                  {point.desc}
                </p>
              ))}

              <p className={`mt-6 text-center text-lg font-medium ${selected.color}`}>
                {selected.tagline}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ChooseSection;








// import React from 'react';

// const categories = [
//   { title: 'Brain Health', keyword: 'mind', color: 'text-pink-300' },
//   { title: 'Elite Fitness', keyword: 'ultra', color: 'text-yellow-300' },
//   { title: 'Metabolism', keyword: 'shift', color: 'text-green-400' },
//   { title: 'Heart Health', keyword: 'beat', color: 'text-blue-300' },
//   { title: 'Sleep Well', keyword: 'snooze', color: 'text-cyan-300' },
// ];

// const ChooseSection: React.FC = () => {
//   return (
//     <div className="flex items-center justify-center p-8  ">
//       <div className="flex justify-center items-center gap-5 flex-wrap ">
//         {categories.map((item, index) => (
//           <div
//             key={index}
//             className="golden_border border-white/10 bg-[#000000c4] rounded-sm p-4 py-10 text-center hover:shadow-md transition relative categories-main-cards w-[280px]"
//             data-aos="zoom-in"
//             data-aos-delay={index * 300}
//             data-aos-duration="800"
//           >
//             <p className="text-sm text-white/70 mb-2 categories-title">{item.title}</p>
//             <p className="text-white text-sm categories-choose">CHOOSE</p>
//             <p className={`text-2xl font-semibold italic categories-name ${item.color}`}>{item.keyword}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ChooseSection;
