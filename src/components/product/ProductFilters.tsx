interface Props {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
}

const ProductFilters = ({
  categories,
  selectedCategory,
  onCategoryChange,
}: Props) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <button
        onClick={() => onCategoryChange("")}
        className={`px-4 py-2 rounded-full border ${
          selectedCategory === ""
            ? "bg-amber-600 text-white"
            : "bg-white"
        }`}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full border ${
            selectedCategory === category
              ? "bg-amber-600 text-white"
              : "bg-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProductFilters;
