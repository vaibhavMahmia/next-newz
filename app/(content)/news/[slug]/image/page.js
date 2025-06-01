const { DUMMY_NEWS } = require("@/dummy-news");
const { notFound } = require("next/navigation");

const ImagePage = async ({ params }) => {
    const { slug } = await params;
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === slug);
    if (!newsItem) notFound();
    return <div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>;
}

export default ImagePage;