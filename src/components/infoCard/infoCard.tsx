import React from 'react';
import { Pin } from 'lucide-react';

interface InfoCardProps {
  color: string;
  rotation: string;
  children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ color, rotation, children }) => {
  return (
    <div 
      className={`relative ${color} p-6 rounded-lg shadow-xl transform hover:scale-[1.02] transition-all duration-300 h-full ${rotation} md:${rotation}`}
    >
      {/* Pin */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-blue-400">
        <Pin className="h-6 w-6" />
      </div>
      
      {/* Content */}
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};

export default InfoCard;