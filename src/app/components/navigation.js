import React from 'react';

export default function navigation({ pages }) {
  return (
    <div className="blog-masthead">
      <div className="container">
        <nav className="blog-nav">
          {pages.map((page, index) => {
            const classes = `blog-nav-item${!index ? ' active' : ''}`
            return <a key={index} className={classes} href={page.url} >{page.page}</a>
          })}
        </nav>
      </div>
    </div>
  );
}