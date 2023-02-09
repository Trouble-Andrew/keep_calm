import React from 'react';
import styles from './Paragraph.module.scss';
import cn from 'classnames';

const Paragraph = ({ children, className }) => {
  return (
    <p
      className={cn(`${styles.paragraph}`, {
        [`${className}`]: className,
      })}
    >
      {children}
    </p>
  );
};

export default Paragraph;
