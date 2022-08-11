// my-domain.com/news/something

import { useRouter } from 'next/router';

function DetailPage() {
    const router = useRouter();

    const newsId = router.query.newsId;

    // send request to backend API
    // to fetch the news item with newsId

    return <hi>The Detail Page</hi>
}

export default DetailPage;