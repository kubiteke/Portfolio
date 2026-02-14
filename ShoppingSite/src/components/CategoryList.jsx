import Category from "./Category.jsx";

export default function CategoryList({ categories }) {
  return (
    <>
      {categories.map((item, index) => (
        <Category category={item} key={index} />
      ))}
    </>
  );
}
