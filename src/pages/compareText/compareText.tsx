export default function CompareText() {
  return (
    <div className="p-4">
      {/* Top controls */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 mb-6">
        <select className="border rounded p-2">
          <option>ქართული</option>
          <option>English</option>
        </select>
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          <span>ფლაგმატის შემოწმება</span>
        </label>
        <button className="bg-gray-400 text-white px-4 py-2 rounded">
          + ახალი ტექსტი
        </button>
      </div>

      {/* Textareas */}
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <textarea
          placeholder="დაწერე ტექსტი..."
          className="w-full lg:w-1/2 h-40 p-3 border rounded bg-blue-50 resize-none"
        />
        <div className="text-gray-600">↔</div>
        <textarea
          placeholder="დაწერე ტექსტი..."
          className="w-full lg:w-1/2 h-40 p-3 border rounded bg-blue-50 resize-none"
        />
      </div>

      {/* Submit button */}
      <div className="flex justify-center mt-6">
        <button className="bg-gray-500 text-white px-6 py-2 rounded">
          შედარება
        </button>
      </div>
    </div>
  );
}
