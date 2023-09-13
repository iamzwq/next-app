"use client";

const AddToCart = () => {
  return (
    <>
      <button
        onClick={() => console.log("click")}
        className={`
        text-gray-700 border border-gray-700 px-4 py-2 rounded
        hover:text-white hover:bg-indigo-700 hover:border-indigo-700
      `}
      >
        Add to Cart
      </button>
    </>
  );
};

export default AddToCart;
