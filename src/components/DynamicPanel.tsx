const DynamicPanel = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Trending and property cards will go here */}
      <div className="bg-white rounded-2xl shadow p-6">
        <div className="text-lg font-semibold mb-2">Explore What's Trending Now</div>
        <div className="text-gray-500">Trending projects and recommendations will appear here.</div>
      </div>
    </div>
  );
};

export default DynamicPanel; 