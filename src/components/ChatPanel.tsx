const ChatPanel = () => {
  return (
    <div className="flex flex-col h-full p-6">
      {/* Chat bubbles and suggestions will go here */}
      <div className="flex-1 flex flex-col justify-end items-start space-y-2">
        <div className="bg-[#f3f4f6] rounded-xl px-4 py-2 text-gray-800 max-w-xs shadow">Hi, I'm your property co-pilot. Looking for a home or investment? I'll help you shortlist the best ones and book visits too.</div>
      </div>
    </div>
  );
};

export default ChatPanel; 