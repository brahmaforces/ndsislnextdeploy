import {API_URL} from '@/config/index'

import { useState } from 'react';

import Navbar from "../components/Navbar";
import Dashboard from '../components/Dashboard';

export default function Home({categories, words}) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Dashboard categories={categories} words={words} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    </>
  );
} 

export async function getServerSideProps() {
  const resCategories = await fetch(`${API_URL}/api/categories`);
  const categoriesData = await resCategories.json();
  
  const resWords = await fetch(`${API_URL}/api/words?populate=*`);
  const wordsData = await resWords.json();


  //console.log('Categories on the server side are ' + JSON.stringify(categoriesData));
  //console.log('Words on the server side are ' + JSON.stringify(wordsData));
  return {
      props: {
        categories: categoriesData, 
        words: wordsData
      }
    }
}
