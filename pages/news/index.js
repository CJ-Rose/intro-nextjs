// my-domain.com/news

// special component from next to build links (w/o fetching new page)
import Link from 'next/link';
import { Fragment } from 'react';

function NewsPage() {
    return (
        <Fragment>
            <hi>The News Page</hi>
            <ul>
                <li>
                    <Link href='/news/great-news'>
                        Great News
                    </Link>
                </li>
                <li>
                    <Link href='/news/special-report'>
                        Special Report
                    </Link>
                </li>
                <li>
                    <Link href='/news/new-info'>
                        New Info
                    </Link>
                </li>
            </ul>
        </Fragment>
    );
}

export default NewsPage;