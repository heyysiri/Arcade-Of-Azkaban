const SidebarLeft = () => {
    return (
      <div
        className="fixed left-0 top-0 bottom-0 w-26 z-10 flex flex-col items-center pt-4 overflow-hidden"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #1E3A8A 0 5px, #3B82F6 5px 10px)", // Blue gradient
        }}
      >
        {/* Title Section */}
        <div className="transform -rotate-90 whitespace-nowrap text-white font-bold text-sm mb-4">
          🌈 CYBER ZONE 🌈
        </div>
  
        {/* Hotline Section */}
        <div className="bg-white w-full py-2 text-center">
          <marquee
            direction="up"
            scrollamount="2"
            className="text-xs text-black leading-5"
          >
            <p>📞 SUPPORT HOTLINE:</p>
            <p>1-800-WIZARD-90</p>
          </marquee>
        </div>
  
        {/* Updates Section */}
        <div className="mt-4 text-center">
          <p className="text-white text-xs transform -rotate-6">
            🌟 RADICAL UPDATES 🌟
          </p>
          <div className="bg-black text-blue-300 p-2 m-2 text-xs rounded-lg">
            v1.337 BETA
          </div>
        </div>
  
        {/* Footer Section */}
        <div className="absolute bottom-4 text-xs text-white transform -rotate-6">
          <p>☎️ DIAL-UP READY!</p>
        </div>
      </div>
    );
  };
  
  export default SidebarLeft;
  