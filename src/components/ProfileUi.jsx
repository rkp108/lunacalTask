import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, HelpCircle, Plus } from 'lucide-react';
import image1 from "../assets/rec.png";
import grid1 from "../assets/qwe.png";

export default function Component() {
  const [activeTab, setActiveTab] = useState('aboutMe'); // State for active tab
  const [isGalleryOpen, setIsGalleryOpen] = useState(true);
  const [images, setImages] = useState([image1, image1, image1]); // Initial images

  const handleAddImage = () => {
    // Add a new image (for example purposes, using the same image)
    setImages([...images, image1]);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'aboutMe':
        return (
          <div className="text-[#8e8e93] space-y-4 overflow-y-auto max-h-48 pr-4 text-sm">
            <p>Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.</p>
            <p>I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM.This is a...</p>
          </div>
        );
      case 'experiences':
        return (
          <div className="text-[#8e8e93] space-y-4 overflow-y-auto max-h-48 pr-4 text-sm">
            <p>Details about my professional experiences go here.</p>
          </div>
        );
      case 'recommended':
        return (
          <div className="text-[#8e8e93] space-y-4 overflow-y-auto max-h-48 pr-4 text-sm">
            <p>Recommended content or items can be displayed here.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#1c1c1e] p-8">
      {/* Left Empty Half */}
      <div className="hidden lg:flex w-1/2 relative">
        {/* Content for the left side, if any, goes here */}
      </div>

      {/* Right Half for Content */}
      <div className="w-full lg:w-1/2 max-w-3xl bg-[#2c2c2e] rounded-[2rem] p-8 space-y-6 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
        {/* About Me Section */}
        <div className="relative">
          <div className="absolute -left-8 top-6 flex flex-col items-center space-y-2">
            <HelpCircle size={20} className="text-[#8e8e93]" />
            <img src={grid1} alt="Grid Icon" className="w-6 h-6" />
          </div>
          <div className="bg-[#3a3a3c] rounded-[1.5rem] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
            <div className="flex space-x-1 bg-[#2c2c2e] rounded-full p-1 w-max mb-4 shadow-inner">
              <button
                className={`px-4 py-2 rounded-full font-medium ${
                  activeTab === 'aboutMe'
                    ? 'bg-[#1c1c1e] text-white'
                    : 'text-[#8e8e93] hover:text-white'
                }`}
                onClick={() => setActiveTab('aboutMe')}
              >
                About Me
              </button>
              <button
                className={`px-4 py-2 rounded-full ${
                  activeTab === 'experiences'
                    ? 'bg-[#1c1c1e] text-white'
                    : 'text-[#8e8e93] hover:text-white'
                }`}
                onClick={() => setActiveTab('experiences')}
              >
                Experiences
              </button>
              <button
                className={`px-4 py-2 rounded-full ${
                  activeTab === 'recommended'
                    ? 'bg-[#1c1c1e] text-white'
                    : 'text-[#8e8e93] hover:text-white'
                }`}
                onClick={() => setActiveTab('recommended')}
              >
                Recommended
              </button>
            </div>
            {renderTabContent()}
          </div>
          <div className="mt-4 h-px bg-[#4a4a4c]"></div>
        </div>

        {/* Gallery Section */}
        <div className="relative">
          <div className="absolute -left-8 top-4 flex flex-col items-center space-y-2">
            <HelpCircle size={20} className="text-[#8e8e93]" />
            <img src={grid1} alt="Grid Icon" className="w-6 h-6" />
          </div>
          <div className="bg-[#3a3a3c] rounded-[1.5rem] p-6 space-y-4 shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
            {isGalleryOpen ? (
              <>
                <div className="flex justify-between items-center mb-4">
                  <button className="px-4 py-2 bg-[#1c1c1e] rounded-full text-white font-medium shadow">Gallery</button>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={handleAddImage} 
                      className="px-3 py-1 bg-[#4a4a4c] rounded-full text-white flex items-center space-x-1 hover:bg-[#5a5a5c] transition-colors shadow"
                    >
                      <Plus size={16} />
                      <span className="text-sm">ADD IMAGE</span>
                    </button>
                    <button 
                      className="p-2 bg-[#4a4a4c] rounded-full text-[#8e8e93] hover:bg-[#5a5a5c] transition-colors shadow" 
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      className="p-2 bg-[#4a4a4c] rounded-full text-[#8e8e93] hover:bg-[#5a5a5c] transition-colors shadow" 
                      aria-label="Next image"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  {images.map((img, index) => (
                    <div key={index} className="w-48 h-48 bg-[#4a4a4c] rounded-lg overflow-hidden shadow-md">
                      <img
                        src={img}
                        alt={`Gallery image ${index}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex items-center text-[#8e8e93]">
                <HelpCircle size={24} className="mr-2" />
                <span className="mr-2">Gallery</span>
                <div className="flex-grow h-px bg-[#4a4a4c]"></div>
              </div>
            )}
          </div>
          <div className="mt-4 h-px bg-[#4a4a4c]"></div>
        </div>
      </div>
    </div>
  );
}
