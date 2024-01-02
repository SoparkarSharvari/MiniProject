import React from 'react';

const RcTile = ({ href, imgSrc, imgAlt, heading, categoryHref, category, description }) => {
  return (
    <div className="rc-tile">
      <div className="rc-img">
        <a href={href}>
          <img src={imgSrc} alt={imgAlt} />
        </a>
      </div>
      <h3>
        <a href={href}>{heading}</a>
      </h3>
      <p>
        <strong>
          <a href={categoryHref}>{category}</a>
        </strong>
      </p>
      <p>{description}</p>
    </div>
  );
};

export default RcTile;
