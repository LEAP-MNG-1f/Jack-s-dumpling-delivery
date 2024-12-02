type AdminCategoryProps = {
  id: string;
  name: string;
  deleteCategory: (id: string) => void;
};

export default function AdminCategoryButton({
  id,
  name,
  deleteCategory,
}: AdminCategoryProps) {
  return (
    <div className="flex gap-4 bg-green-600 justify-between py-2 text-white px-4 rounded-xl  text-">
      <span className="flex">{name}</span>
      <button
        onClick={() => {
          deleteCategory(id);
        }}
      >
        edit
      </button>
    </div>
  );
}
