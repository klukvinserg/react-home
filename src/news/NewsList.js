import React from 'react';
import './NewsList.css';
import NewsItem from './NewsItem'


export default function NewsList(props) {

    return (
        <ul>
            {props.news.map(item => {
               return <NewsItem news={item} key={item.id} readChange={props.changeRead}/>
            })}
        </ul>
    )
}