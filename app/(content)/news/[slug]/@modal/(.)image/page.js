import { ModalBackdrop } from "@/components/modal-backdrop";

import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

const InterceptedImagePage = async ({ params }) => {
    const { slug } = await params;
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === slug);
    if (!newsItem) notFound();
    return <>
        <ModalBackdrop />
        <dialog className="modal" open>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </dialog>
    </>;
}

export default InterceptedImagePage;