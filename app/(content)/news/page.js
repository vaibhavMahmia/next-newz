import { NewsList } from "@/components/news-list";
import { getAllNews } from "@/lib/news";

const NewsPage = async () => <>
    <h1>News Page</h1>
    <NewsList news={await getAllNews()} />
</>;

export default NewsPage;