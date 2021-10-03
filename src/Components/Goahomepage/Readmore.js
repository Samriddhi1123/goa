import React from 'react';
import Link from '@material-ui/core/Link';

export default function ReadMore() {
    return (
        <Link
            component="button"
            variant="body2"
            onClick={() => {
                console.info("Read More");
            }}
        >
            Read More
        </Link>
    );
}
