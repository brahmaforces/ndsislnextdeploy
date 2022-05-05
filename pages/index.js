import {API_URL} from '@/config/index'

import { useState } from 'react';

import Navbar from "../components/Navbar";
import Dashboard from '../components/Dashboard';
import Head from 'next/head'

export default function Home({categories, words}) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"
        />
      </Head>
      <Head>
        <title>Indian Sign Language (ISL)  Dictionary</title>
        <meta name="description" content="Indian Sign Language (ISL) Dictionary. This enable to search for keywords or find them by industry and see their videos. It is designed to enable people to learn Indian Sign Language." />
        <meta name="keywords" content="Indian Sign Language Dictionary, ISL, Noida Deaf Society, Learning Sign Language, Videos to learn Sign Language"/>
      </Head>

      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Dashboard categories={categories} words={words} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    </>
  );
} 

export async function getServerSideProps() {
  const resCategories = await fetch(`${API_URL}/api/categories?sort[0]=name`);
  const categoriesData = await resCategories.json();
  
  const resWords = await fetch(`${API_URL}/api/words?sort[0]=name&populate=*`);
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
