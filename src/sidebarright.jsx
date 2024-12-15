

const SideBarRight = () => {
  return (
    <div
      className="fixed right-0 top-0 bottom-0 w-26 bg-[#1E90FF] z-10 
      flex flex-col items-center pt-4 overflow-hidden"
      style={{
        backgroundImage: 'repeating-linear-gradient(45deg, #0000CD 0 5px, #1E90FF 5px 10px)',
      }}
    >
      {/* Rotated Header */}
      <div className="transform rotate-90 whitespace-nowrap text-white font-bold text-sm mb-4">
        🚀 WIZARD NETWORK 🚀
      </div>

      {/* Scrolling Marquee */}
      <div className="bg-white w-full py-2 text-center overflow-hidden">
        <div
          className="text-xs text-black leading-5 animate-scroll"
          style={{ display: 'inline-block' }}
        >
          <p>🌐 WWW STATUS:</p>
          <p>TOTALLY AWESOME!</p>
        </div>
      </div>

      {/* Center Section */}
      <div className="mt-4 text-center">
        <p className="text-white text-xs transform rotate-6">
          🔮 MAGIC ONLINE 🔮
        </p>
        <div className="bg-black text-yellow-300 p-2 m-2 text-xs">
          CONNECT NOW!
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 text-xs text-white transform rotate-6">
        <p>💾 SAVE WIZARD DATA</p>
      </div>

      {/* CSS Keyframes */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateY(100%); }
            100% { transform: translateY(-100%); }
          }
          .animate-scroll {
            animation: scroll 5s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default SideBarRight;
