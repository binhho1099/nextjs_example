import Image from 'next/image';
import React from 'react';

export interface IMonopolyCard {
  imageSrc: string;
  imageSeoTag: string;
  title: string;
  content: string;
  authorImage: string;
  authorName: string;
}

const MonopolyCard: React.FC<IMonopolyCard> = ({
  imageSrc,
  imageSeoTag,
  title,
  content,
  authorImage,
  authorName,
}) => {
  return (
    <React.Fragment>
      <div className="monopoly-card">
        <div className="monopoly-card-header">
          <Image
            src={imageSrc}
            alt={imageSeoTag}
            className="monopoly-card-image"
            width="600"
            height="400"
          />
        </div>
        <div className="monopoly-card-body">
          <h4 className="monopoly-card-title">{title}</h4>
          <p className="monopoly-card-content">{content}</p>
        </div>
        <div className="monopoly-card-footer">
          <div className="monopoly-card-author">
            <Image
              src={authorImage}
              alt={`author` + authorName}
              className="monopoly-card-author__image"
              width="40"
              height="40"
            />
            <p className="monopoly-card-author__name">{authorName}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export { MonopolyCard };
