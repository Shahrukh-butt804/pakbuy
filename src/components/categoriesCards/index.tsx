import { Modal } from 'antd';
import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { selectUser } from '../../redux/reducers/userSlice';
import { useGetAllCollectionQuery } from '../../redux/services/collectionSlice';

const categories = [
  'text-pink-300',
  'text-rose-300',
  'text-fuchsia-300',
  'text-purple-300',
  'text-violet-300',
  'text-indigo-300',
  'text-blue-300',
  'text-sky-300',
  'text-cyan-300',
  'text-teal-300',
  'text-emerald-300',
  'text-green-300',
  'text-lime-300',
  'text-yellow-300',
  'text-amber-300',
  'text-orange-300',
  'text-red-300',
  'text-pink-400',
  'text-rose-400',
  'text-fuchsia-400',
  'text-purple-400',
  'text-violet-400',
  'text-indigo-400',
  'text-blue-400',
  'text-sky-400',
  'text-cyan-400',
  'text-teal-400',
  'text-emerald-400',
  'text-green-400',
  'text-lime-400'
];

type ChooseSectionProps = {
  memberBtn?: boolean;
};

const ChooseSection: React.FC<ChooseSectionProps> = ({ memberBtn = true }) => {

  const [selected, setSelected] = useState<any>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [index, setIndex] = useState(0)

  const { data: collections } = useGetAllCollectionQuery({})

  const user = useSelector(selectUser);


  const colorsForCollections = useMemo(() => {
    if (!collections) return [];
    return collections.map(() => {
      const randomIndex = Math.floor(Math.random() * categories.length);
      return { index: randomIndex, color: categories[randomIndex] };
    });
  }, [collections]);

  const openModal = (item: any, index: number) => {
    const packageItem = collections?.find((p: any) => p.name.toLowerCase() === item.name.toLowerCase());

    if (packageItem) {
      setSelectedPackage(packageItem)
      setIndex(index)
    }
    setSelected(item);
    setIsModalVisible(true);
  };

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center p-8">
      <div className="flex justify-center items-center gap-5 flex-wrap">
        {collections?.map((item: any, index: number) => (
          <div
            key={index}
            className="border border-[#C97873]/20 bg-gradient-to-b from-[#18181b] to-[#101012] hover:border-[#C97873]/50 rounded-2xl p-6 py-10 text-center shadow-lg hover:shadow-2xl hover:shadow-[#C97873]/10 transition-all duration-300 relative categories-main-cards w-[280px] cursor-pointer group"
            onClick={() => openModal(item, colorsForCollections[index].index)}
            data-aos="zoom-in"
            data-aos-delay={index * 300}
            data-aos-duration="800"
          >
            <p className="text-xs text-gray-400 mb-2 categories-title uppercase tracking-wider">{item?.title || 'Pak Buy Collection'}</p>
            <p className="text-white text-xs font-semibold categories-choose tracking-widest uppercase">Pak Buy</p>
            <p className={`text-2xl font-extrabold italic categories-name group-hover:scale-105 transition-transform duration-300 ${colorsForCollections[index].color}`}>{item?.name || 'Collection'}</p>
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
              {!memberBtn ? (
                <p className="text-md font-semibold text-center mb-6 text-white/70 uppercase tracking-wide">
                  NON-MEMBER PREVIEW
                </p>
              ) : (
                <div className="flex justify-center mb-6">
                  {user && user?._id && (
                    <button
                      className="bg-[#02d05b] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#02d05b] transition"
                      style={{ borderRadius: '100px' }}
                      onClick={() => {
                        // console.log("Purchase clicked for:", selected.keyword);
                        navigate(`/shop/${selectedPackage?._id}`);
                      }}
                    >
                      <span className='!text-white'>
                        {/* See Collection  ${selectedPackage?.CollectionPrice} */}
                        See Collection  
                      </span>
                    </button>
                  )}
                </div>
              )}
              <h2 className="text-sm font-semibold mb-4 text-white/60">
                Pak Buy{" "}
                <span className={`italic italic-font text-lg ml-1 font-medium ${categories[index]}`}>
                  {selected?.name}
                </span>
              </h2>



              {selected.description.map((data: any, idx: number) => (
                <p key={idx} className="mb-2 abc">
                  <span className={`font-bold mr-2 ${categories[index]}`}>{data.heading}</span>
                  {data.text}
                </p>
              ))}

              <p className={`mt-6 text-center text-lg font-medium ${categories[index]}`}>
                {selected.slogan}
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
