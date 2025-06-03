import { NewsList } from "@/components/news-list";
import { getAllNews } from "@/lib/news";

const NewsPage = () => <>
    <h1>News Page</h1>
    <NewsList news={getAllNews()} />
</>;

export default NewsPage;