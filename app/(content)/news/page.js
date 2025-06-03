'use client';
import { NewsList } from "@/components/news-list";
import { useEffect, useState } from "react";

const NewsPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [news, setNews] = useState();

    useEffect(() => {
        const fetchNews = async () => {
            setIsLoading(true);
            const response = await fetch('/api/news');

            if(!response.ok){
                setError('Failed to fetch news !');
                setIsLoading(false);
            }

            const news = await response.json();
            setIsLoading(false);
            setNews(news);
        }

        fetchNews();
    }, []);

    if(isLoading) return <p>Loading...</p>;
    if(error) return <p>{error}</p>;

    let newsContent;
    if(news) newsContent = <NewsList news={news} />;

    return <>
        <h1>News Page</h1>
        {newsContent}
    </>;
}
export default NewsPage;