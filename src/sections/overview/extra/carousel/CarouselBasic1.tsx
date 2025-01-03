import Slider from 'react-slick';
import { useState, useRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Card } from '@mui/material';
// _mock_
import { _carouselsExample } from '../../../../_mock';
// components
import Image from '../../../../components/Image';
import { CarouselArrowIndex } from '../../../../components/carousel';

// ----------------------------------------------------------------------

export default function CarouselBasic1() {
  const theme = useTheme();
  const carouselRef = useRef<Slider | null>(null);
  const [currentIndex, setCurrentIndex] = useState(
    theme.direction === 'rtl' ? _carouselsExample.length - 1 : 0
  );

  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Card>
      {/* @ts-ignore */}
      <Slider ref={carouselRef} {...settings}>
        {_carouselsExample.map((item) => (
          <CarouselItem key={item.id} item={item} />
        ))}
      </Slider>

      <CarouselArrowIndex
        index={currentIndex}
        total={_carouselsExample.length}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </Card>
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
  title: string | undefined;
  description: string | undefined;
  image: string;
};

function CarouselItem({ item }: { item: CarouselItemProps }) {
  const { image, title } = item;

  return <Image alt={title} src={image} ratio="1/1" />;
}
