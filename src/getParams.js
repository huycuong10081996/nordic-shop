export const getParamsUrl = filter => {
  return `/category?show=${filter.productPage}?page=${filter.curentPage}?sortBy=${filter.sortBy}?minPrice=${filter.minPrice}?maxPrice=${filter.maxPrice}`;
};
