import styles from '../styles/Dashboard.module.scss'
import { useState } from 'react';

export default function Dashboard ({categories, words, searchTerm, setSearchTerm}) {
    const [selectedCategoryId, setSelectedCategoryId] = useState();
    const [videoLink, setVideoLink] =useState('https://www.youtube.com/embed/XwqBwI9XmdE')
    const [selectedWordId, setSelectedWordId] = useState();

    let filteredWords=[];

    if (searchTerm){
        filteredWords = words.data.filter((word)  => {
            return word.attributes.name.includes(searchTerm);
        })
        
    } else {
        filteredWords = words.data.filter((word) =>{
                return word.attributes.category.data.id === selectedCategoryId;
            })
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.video}>
                <iframe
                    src={videoLink}
                    width="560"
                    height="315" 
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                />
            </div>
            <div className={styles.categories}>
                <h2>CATEGORIES</h2>

                 {categories.data.map((category) =>(
                     <div 
                        
                        key={category.id}
                        onClick={()=>{
                            setSelectedCategoryId(category.id)
                            setSearchTerm('');
                        }}><a className={(category.id === selectedCategoryId && !searchTerm) ? styles.selected : ''}>{category.attributes.name}</a>
                    </div>
                 ))}                                                     
            </div>
            <div className={styles.words}>        
            <h2>WORDS</h2>
                {filteredWords.map((word) =>(
                    <div 
                        key={word.id}
                        onClick={()=>{
                            setVideoLink(word.attributes.youtubelink)
                            setSelectedWordId(word.id)
                            }}><a className={(word.id === selectedWordId) ? styles.selected : ''}>{word.attributes.name}</a>     
                    </div>
                ))}           
            </div>
        </div>
      );    
}


