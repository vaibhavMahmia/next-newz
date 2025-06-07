import Link from "next/link";
import { Suspense } from "react";

const { NewsList } = require("@/components/news-list");
const { getNewsForYear, getAvailableNewsYears, getAvailableNewsMonths, getNewsForYearAndMonth } = require("@/lib/news");

const FilterHeader = async ({ year, month }) => {
    let links = await getAvailableNewsYears();
    if (year && !month) links = getAvailableNewsMonths(year);
    if (year && month) links = [];

    return <header id='archive-header'>
        <nav>
            <ul>
                {links.map(link => {
                    const href = year ? `/archive/${year}/${link}` : `/archive/${link}`
                    return <li key={link}><Link href={href}>{link}</Link></li>
                })}
            </ul>
        </nav>
    </header>
}

const FilteredNews = async ({ year, month }) => {
    let news;
    if (year && !month) news = await getNewsForYear(year);
    else if (year && month) news = await getNewsForYearAndMonth(year, month);

    let newsContent = <p>No news found for the selected period !</p>;
    if (news && news.length > 0) newsContent = <NewsList news={news} />;
    return newsContent;
}

const FilteredNewsPage = async ({ params }) => {
    const { filter } = await params;
    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];

    if ((selectedYear && !(await getAvailableNewsYears()).includes(selectedYear)) || (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(selectedMonth))) throw new Error('Invalid filter.');

    return <>
        <Suspense fallback={<p>Loading Header...</p>}>
            <FilterHeader year={selectedYear} month={selectedMonth} />
        </Suspense>
        <Suspense fallback={<p>Loading News...</p>}>
            <FilteredNews year={selectedYear} month={selectedMonth} />
        </Suspense>
    </>;
}

export default FilteredNewsPage;