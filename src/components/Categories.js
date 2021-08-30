import React, { useState, useEffect } from 'react';
import { Box, Select } from '@chakra-ui/react';
import axios from 'axios';
import Facts from './Facts';

const Categories = () => {
  const [categories, setCategories] = useState(null);
  console.log(categories);

  let [category, setCategory] = useState(null);
  console.log(category);

  let handleCategoryChange = e => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://api.chucknorris.io/jokes/categories');

      setCategories(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Box mb="2em">
        <Select
          onChange={handleCategoryChange}
          w={['xs', 'xs', 'sm', 'sm']}
          placeholder="Select category"
        >
          {categories !== null
            ? categories.map(category => (
                <option key={category} value={category}>
                  {category.toUpperCase()}
                </option>
              ))
            : null}
        </Select>
      </Box>
      <Facts category={category} />
    </>
  );
};

export default Categories;
