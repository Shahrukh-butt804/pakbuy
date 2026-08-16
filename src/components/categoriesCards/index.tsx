import { Modal } from "antd";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectUser } from "../../redux/reducers/userSlice";
import { useGetAllCollectionQuery } from "../../redux/services/collectionSlice";
import { Sparkles, ArrowRight, X } from "lucide-react";

const categories = [
  "text-pink-400",
  "text-rose-400",
  "text-fuchsia-400",
  "text-purple-400",
  "text-violet-400",
  "text-indigo-400",
  "text-sky-400",
  "text-teal-400",
  "text-[#C97873]",
  "text-amber-400",
];

type ChooseSectionProps = {
  memberBtn?: boolean;
};

const ChooseSection: React.FC<ChooseSectionProps> = ({ memberBtn = true }) => {
  const [selected, setSelected] = useState<any>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [index, setIndex] = useState(0);

  const { data: collections } = useGetAllCollectionQuery({});
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const colorsForCollections = useMemo(() => {
    if (!collections) return [];
    return collections.map((_: any, i: number) => ({
      index: i % categories.length,
      color: categories[i % categories.length],
    }));
  }, [collections]);

  const openModal = (item: any, idx: number) => {
    const packageItem = collections?.find(
      (p: any) => p.name.toLowerCase() === item.name.toLowerCase()
    );

    if (packageItem) {
      setSelectedPackage(packageItem);
      setIndex(idx);
    }
    setSelected(item);
    setIsModalVisible(true);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {collections?.map((item: any, i: number) => {
          const colorClass = colorsForCollections[i]?.color || "text-[#C97873]";
          return (
            <div
              key={item._id || i}
              onClick={() => openModal(item, colorsForCollections[i]?.index || 0)}
              className="group relative bg-[#121215]/80 border border-[#C97873]/20 hover:border-[#C97873]/60 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl hover:shadow-[#C97873]/15 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between hover:-translate-y-1"
            >
              {/* Top ambient highlight */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#C97873]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#C97873]/15 transition-colors duration-500" />

              <div className="relative z-10 space-y-2 py-3">
                <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-widest">
                  {item?.title || "Pak Buy Collection"}
                </p>
                <div className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-[#C97873] px-2.5 py-0.5 rounded-full bg-[#C97873]/10 border border-[#C97873]/20">
                  <Sparkles className="w-3 h-3" />
                  <span>Pak Buy</span>
                </div>
                <h3
                  className={`text-2xl sm:text-3xl font-extrabold italic font-serif tracking-wide group-hover:scale-105 transition-transform duration-300 mt-2 ${colorClass}`}
                >
                  {item?.name || "Collection"}
                </h3>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-center text-xs text-gray-400 group-hover:text-white transition-colors duration-200 gap-1 font-medium">
                <span>Explore Details</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          );
        })}
      </div>

      <Modal
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        centered
        width={650}
        closeIcon={null}
        modalRender={(modal) => (
          <div className="custom-dark-modal-wrapper">{modal}</div>
        )}
      >
        {selected && (
          <div className="bg-gradient-to-b from-[#1c1c20] via-[#141417] to-[#0f0f11] border border-[#C97873]/30 p-6 sm:p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden">
            {/* Modal Close Button */}
            <button
              onClick={() => setIsModalVisible(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-[#C97873] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 z-20"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="absolute top-0 right-0 w-60 h-60 bg-[#C97873]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-left">
              {!memberBtn ? (
                <div className="inline-block px-3 py-1 rounded-full bg-[#C97873]/15 border border-[#C97873]/30 text-[#C97873] text-xs font-bold uppercase tracking-widest mb-4">
                  NON-MEMBER PREVIEW
                </div>
              ) : (
                <div className="flex justify-between items-center mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C97873]/15 border border-[#C97873]/30 text-[#C97873] text-xs font-bold uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Pak Buy Collection</span>
                  </div>
                  {user && user?._id && (
                    <button
                      className="bg-[#C97873] hover:bg-[#b86762] text-white px-5 py-2 rounded-full font-bold text-xs tracking-wider uppercase shadow-lg shadow-[#C97873]/25 hover:shadow-[#C97873]/40 transition-all duration-300 flex items-center gap-2 active:scale-95"
                      onClick={() => {
                        setIsModalVisible(false);
                        navigate(`/shop/${selectedPackage?._id}`);
                      }}
                    >
                      <span>See Collection</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              )}

              <h2 className="text-xl sm:text-2xl font-black mb-4 text-white">
                Pak Buy{" "}
                <span
                  className={`italic font-serif ml-1 ${categories[index]}`}
                >
                  {selected?.name}
                </span>
              </h2>

              <div className="space-y-3 my-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {selected?.description?.map((data: any, idx: number) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 leading-relaxed"
                  >
                    <span
                      className={`font-bold block text-sm mb-1 ${categories[index]}`}
                    >
                      {data.heading}
                    </span>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      {data.text}
                    </p>
                  </div>
                ))}
              </div>

              {selected?.slogan && (
                <div className="pt-4 border-t border-white/10 text-center">
                  <p
                    className={`text-sm sm:text-base font-bold italic tracking-wide ${categories[index]}`}
                  >
                    "{selected.slogan}"
                  </p>
                </div>
              )}
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
