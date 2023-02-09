import React from 'react';
import Image from 'next/image';
import Title from '../Title/Title';
import styles from './Card.module.scss';
import Paragraph from '../Paragraph/Paragraph';
import cn from 'classnames';

const imgSize = {
  width: 599,
  height: 411,
};

const bigImgSize = {
  width: 860,
  height: 480,
};

const Card = ({ bigImg = false, className, title, img, paragraphs }) => {
  const cardBigImg = bigImg && 'cardBigImg';

  return (
    <div
      className={cn(
        `${styles.card} ${bigImg === true ? styles[cardBigImg] : ''}`,
        {
          [`${className}`]: className,
        },
      )}
    >
      <div className={styles.content}>
        <Title variant="h3" className={styles.title}>
          {title}
        </Title>
        {paragraphs.map((paragraph, index) => (
          <Paragraph key={index} className={styles.text}>
            {paragraph}
          </Paragraph>
        ))}
      </div>
      <div className={styles.imgWrapper}>
        <Image
          src={img.src}
          width={bigImg ? bigImgSize.width : imgSize.width}
          height={bigImg ? bigImgSize.height : imgSize.height}
          alt={img.alt}
          quality={85}
        />
      </div>
    </div>
  );
};

export default Card;
