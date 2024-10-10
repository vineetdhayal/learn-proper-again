import React from 'react';

const CategoryList = ({ categories }) => {
    console.log('Category list');
  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
