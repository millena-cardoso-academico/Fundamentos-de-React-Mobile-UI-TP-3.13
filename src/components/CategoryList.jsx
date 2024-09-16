import PropTypes from 'prop-types';
import '../styles/CategoryList.css';

const CategoryList = ({ categories, selectCategory }) => {
  return (
    <div className="category-list">
      {categories.map(category => (
        <button key={category} onClick={() => selectCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  selectCategory: PropTypes.func.isRequired,
};

export default CategoryList;