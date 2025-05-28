import { DUMMY_NEWS } from '@/dummy-news';

export const getAllNews = () => DUMMY_NEWS;

export const getLatestNews = () => DUMMY_NEWS.slice(0, 3);

export const getAvailableNewsYears = () => DUMMY_NEWS.reduce((years, news) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) years.push(year);
    return years;
}, []).sort((a, b) => b - a);

export const getAvailableNewsMonths = (year) => DUMMY_NEWS.reduce((months, news) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === +year) {
        const month = new Date(news.date).getMonth();
        if (!months.includes(month)) {
            months.push(month + 1);
        }
    }
    return months;
}, []).sort((a, b) => b - a);

export const getNewsForYear = (year) => DUMMY_NEWS.filter(
    (news) => new Date(news.date).getFullYear() === +year
);

export const getNewsForYearAndMonth = (year, month) => DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
});