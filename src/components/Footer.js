import React from 'react';
import Link from './Link';

let Footer = () => (
    <div>
        <Link filter = "SHOW_ALL">All</Link>
        <Link filter = "SHOW_COMPLETED">Completed</Link>
        <Link filter = "SHOW_TODO">Todo</Link>
    </div>
);

export default Footer;
