import Link from "next/link";

const { NewsList } = require("@/components/news-list");
const { getNewsForYear, getAvailableNewsYears, getAvailableNewsMonths, getNewsForYearAndMonth } = require("@/lib/news");

const FilteredNewsPage = async ({ params }) => {
    const { filter } = await params;
    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];

    let news;
    let links = getAvailableNewsYears();
    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear);
    }
    if (selectedYear && selectedMonth) {
        news = getNewsForYearAndMonth(selectedYear, selectedMonth);
        links = [];
    }

    let newsContent = <p>No news found for the selected period !</p>
    if (news && news.length > 0) newsContent = <NewsList news={news} />

    return <>
        <header id='archive-header'>
            <nav>
                <ul>
                    {links.map(link => {
                        const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`
                        return <li key={link}><Link href={href}>{link}</Link></li>
                    })}
                </ul>
            </nav>
        </header>
        {newsContent}
    </>;
}

export default FilteredNewsPage;