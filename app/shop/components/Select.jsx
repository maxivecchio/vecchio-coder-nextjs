export default function Select() {
  return (
    <div className="flex  items-center mb-4">
      <select
        name="sort"
        id="sort"
        className="w-44 text-sm shadow-[0_35px_60px_15px_rgba(0,0,0,0.1)] text-gray-600 py-3 px-4 border-gray-300 rounded focus:ring-primary focus:border-primary"
      >
        <option value="">Default sorting</option>
        <option value="price-low-to-high">Price low to high</option>
        <option value="price-high-to-low">Price high to low</option>
        <option value="latest">Latest product</option>
      </select>
    </div>
  );
}
