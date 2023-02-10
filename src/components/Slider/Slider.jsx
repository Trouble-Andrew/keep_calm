import Image from 'next/image';
import styles from './Slider.module.scss';

const Slider = ({images}) => {
  return (
    <swiper-container
      class={styles.swiperContainer}
      space-between="30"
      slides-per-view="auto"
    >
      {images.map((image, index) => {
        return (
          <swiper-slide key={index} class={styles.swiperItem}>
            <Image
              src={image.src}
              alt={image.alt}
              fill={true}
              priority={true}
              sizes="(max-width: 768px) 100vw,
      (max-width: 1200px) 50vw,
      33vw"
            />
          </swiper-slide>
        );
      })}
    </swiper-container>
  );
};

export default Slider;
