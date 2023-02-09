import React from 'react';
import styles from './Title.module.scss';
import cn from 'classnames';
import localFont from '@next/font/local';

const orchideaPro = localFont({
  src: [
    {
      path: '../../../public/fonts/OrchideaPro-Regular.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/OrchideaPro-Regular.woff',
      weight: '500',
      style: 'normal',
    },
  ],
});

const headings = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
};

const Title = ({ variant = 'h1', children, className }) => {
  const Tag = `${headings[variant]}`;

  return (
    <Tag
      className={cn(`${styles.title} ${styles[variant]} ${orchideaPro.className}`, {
        [`${className}`]: className,
      })}
    >
      {children}
    </Tag>
  );
};

export default Title;
