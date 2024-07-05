import React, { useState,useEffect } from 'react';
import { useParams,useLocation } from 'react-router-dom';
import './index.css';
import ProductList from '../../components/productList/productList';
import Footer from '../../layouts/footer';
import SearchBar from '../../components/searchBar/SearchBar';


function ProductsFetch() {
  const [search, setSearch] = useState('');
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const cat = searchParams.get('cat');
  const allProducts = searchParams.get('allProducts');

  //const { cat } = useParams();


  return (
     <div>
      <SearchBar setSearch1={setSearch} search1={search} />
      <ProductList  type={'productFetch'} categ={cat} allProds={allProducts} />
      <Footer />
    </div>
  )
}

export default ProductsFetch