import { ArrowRight, Sparkles } from "lucide-react";
import React, { useMemo } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useGetAllCollectionQuery } from "../../redux/services/collectionSlice";

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
  const navigate = useNavigate();

  const { data: collections } = useGetAllCollectionQuery({});

  const colorsForCollections = useMemo(() => {
    if (!collections) return [];
    return collections.map((_: any, i: number) => ({
      index: i % categories.length,
      color: categories[i % categories.length],
    }));
  }, [collections]);


  const handleNavigation = () => {
    if (memberBtn) {
      navigate("/shop");
    } else {
      Swal.fire({
        icon: "warning",
        title: "Please become a member",
        text: "Only members can shop",
      });
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {collections?.map((item: any, i: number) => {
          const colorClass = colorsForCollections[i]?.color || "text-[#C97873]";
          return (
            <div
              key={item._id || i}
              onClick={handleNavigation}
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
                {memberBtn ?
                  <span>Explore Details</span>
                  :
                  <span>Login to Explore</span>
                }

                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseSection;