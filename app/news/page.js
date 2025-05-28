import { NewsList } from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";

const NewsPage = () => <>
    <h1>News Page</h1>
    <NewsList news={DUMMY_NEWS}/>
</>

export default NewsPage;