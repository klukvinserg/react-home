import React from 'react';



export default function NewsItem( {news, readChange}) {



    return (
        <div className={news.read ? 'card read' : 'card'}>
            <img src="https://miro.medium.com/max/1050/1*i3hzpSEiEEMTuWIYviYweQ.png" alt="Pic123"/>
            <div className="text">
                <h4><b>{news.title}</b></h4>
                <button>Close</button>
                <input id={"is reded" + news.id} type="checkbox" onChange={() => (readChange(news.id))} checked={news.read}/>
                <label htmlFor={"is reded" + news.id}>Прочитано</label>
            </div>
        </div>
        )
}