'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { H2 } from './ui/h2';
import { P } from './ui/p';
import { H3 } from './ui/h3';
import { Button } from './ui/button';
import { IMessage } from '@/types/message';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Tilt } from './ui/tilt';
import { DepthMedia } from './ui/depth-media';
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogDescription,
  MorphingDialogTitle,
  MorphingDialogTrigger,
} from './ui/morphing-dialog';

type Props = IMessage['homepage']['clients'];
type ClientItem = Props['items'][number];

const dialogTransition = {
  type: 'spring' as const,
  bounce: 0.05,
  duration: 0.35,
};

const fadeVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 12 },
};

const getHost = (url: string): string => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
};

const ClientCard = ({
  item,
  cta,
}: {
  item: ClientItem;
  cta: string;
}): React.ReactNode => (
  <MorphingDialog transition={dialogTransition}>
    <MorphingDialogTrigger
      className='block w-full text-left'
      label={item.title}
    >
      <Tilt rotationFactor={8}>
        <Card className='overflow-hidden border-none shadow-lg bg-card pt-0! gap-4 h-fit'>
          <CardContent className='flex h-full flex-col p-0'>
            <DepthMedia
              src={item.image}
              alt={item.title}
              className='h-72 lg:h-82'
              quality={92}
              sizes='(max-width: 639px) 92vw, (max-width: 767px) 69vw, (max-width: 1023px) 46vw, (max-width: 1535px) 32vw, 29vw'
            />
          </CardContent>
          <CardFooter className='flex flex-col gap-1.5 md:gap-3 items-start'>
            <MorphingDialogTitle>
              <H3 className='md:text-lg lg:text-xl'>{item.title}</H3>
            </MorphingDialogTitle>
            <P className='line-clamp-3'>{item.description}</P>
          </CardFooter>
        </Card>
      </Tilt>
    </MorphingDialogTrigger>

    <MorphingDialogContainer>
      <MorphingDialogContent className='relative w-full max-w-3xl max-h-[90dvh] overflow-y-auto rounded-2xl bg-card shadow-2xl'>
        <div className='relative aspect-[1861/912] w-full'>
          <Image
            src={item.image}
            alt={item.title}
            fill
            quality={92}
            sizes='(max-width: 768px) 100vw, 768px'
            className='object-cover'
          />
        </div>
        <div className='flex flex-col items-start gap-3 p-6'>
          <MorphingDialogTitle>
            <H3 className='text-xl md:text-2xl lg:text-3xl'>{item.title}</H3>
          </MorphingDialogTitle>
          <MorphingDialogDescription
            variants={fadeVariants}
            disableLayoutAnimation
            className='space-y-4'
          >
            <P>{item.longDescription}</P>
            <Button
              asChild
              variant='link'
              size='lg'
              effect='hoverUnderline'
              className='px-0'
            >
              <a href={item.url} target='_blank' rel='noopener noreferrer'>
                {cta} {getHost(item.url)}
                <ArrowUpRight />
              </a>
            </Button>
          </MorphingDialogDescription>
        </div>
        <MorphingDialogClose
          className='absolute top-4 right-4 z-10 grid size-9 place-items-center rounded-full bg-card/80 text-foreground backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground'
          variants={fadeVariants}
        />
      </MorphingDialogContent>
    </MorphingDialogContainer>
  </MorphingDialog>
);

const Clients = ({ title, text, items, cta }: Props): React.ReactNode => {
  useGSAP(() => {
    if (!items || !text) return;
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#clientsHomepage',
        start: 'top 70%',
      },
    });

    tl.from(
      '.clients-animation',
      {
        opacity: 0,
        y: 100,
        ease: 'power3.out',
        stagger: 0.08,
        duration: 0.9,
      },
      0,
    );
  }, [text, items]);

  return (
    <section className='overflow-hidden py-6 lg:py-12'>
      <div className='container space-y-6 md:space-y-12'>
        <div className='space-y-1.5 md:space-y-3'>
          <H2>{title}</H2>
          <P className='max-w-md'>{text}</P>
        </div>
        <div className='relative -mr-[max(3rem,calc((100vw-80rem)/2+3rem))]'>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
              skipSnaps: true,
            }}
            id='clientsHomepage'
            className='w-full'
          >
            <CarouselContent>
              {items.map((item, index) => (
                <CarouselItem
                  key={index}
                  className='basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%] xl:basis-[28%] 2xl:basis-1/4 p-3 lg:p-6 pt-0 clients-animation'
                >
                  <ClientCard item={item} cta={cta} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className='flex gap-3'>
              <CarouselPrevious className='static size-10 translate-x-0 translate-y-0 bg-card transition-colors hover:text-card hover:bg-primary/80 [&>svg]:size-6 lg:[&>svg]:size-8 border-t shadow-md' />
              <CarouselNext className='static size-10 translate-x-0 translate-y-0 bg-card transition-colors hover:text-card hover:bg-primary/80 [&>svg]:size-6 lg:[&>svg]:size-8 border-t shadow-md' />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Clients;
