const SuggestionBar = () => {
  return (
    <div className="flex items-center bg-white rounded-full shadow px-4 py-2 gap-2">
      {/* Suggestion prompt */}
      <span className="text-gray-400">Need help? Try “Find a 3BHK under ₹1Cr in Delhi”</span>
      {/* Mic button placeholder */}
      <button className="ml-auto bg-[#f3f4f6] rounded-full p-2 hover:bg-gray-200 transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75v1.5m0 0h3.75m-3.75 0H8.25m7.5-6a3.75 3.75 0 01-7.5 0V7.5a3.75 3.75 0 017.5 0v6z" />
        </svg>
      </button>
    </div>
  );
};

export default SuggestionBar; 