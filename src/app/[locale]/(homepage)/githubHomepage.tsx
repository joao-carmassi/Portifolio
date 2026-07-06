'use client';

import { useGSAP } from '@gsap/react';
import { Button } from '@/components/ui/button';
import { BookOpen, Code, Github, Laptop, Layers } from 'lucide-react';
import { H2 } from '../../../components/ui/h2';
import { P } from '@/components/ui/p';
import { H3 } from '@/components/ui/h3';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MagicCard } from '@/components/magicui/magic-card';
import { IMessage } from '@/types/message';
import Image from 'next/image';

type Props = IMessage['homepage']['github'];

const GithubHomepage = ({ title, text, cards }: Props) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animations = [
      { selector: '.github-card-top-animation', x: 0, y: -150 },
      { selector: '.github-media-right-animation', x: 150, y: 0 },
      { selector: '.github-media-left-animation', x: -150, y: 0 },
      { selector: '.github-card-bottom-animation', x: 0, y: 150 },
    ];

    animations.forEach(({ selector, x, y }) => {
      const element = document.querySelector(selector);

      if (!element) return;

      gsap.from(element, {
        opacity: 0,
        x,
        y,
        scale: 0.95,
        duration: 0.9,
        delay: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          once: true,
        },
      });
    });
  }, [cards]);

  return (
    <section id='githubHomepage' className='shadow-md'>
      <div className='mx-auto max-w-7xl p-6 md:p-12 space-y-6 md:space-y-12'>
        <div className='space-y-1.5 md:space-y-3'>
          <H2 className='text-center md:text-start'>{title}</H2>
          <P className='text-center md:text-start'>{text}</P>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-6'>
          {/* Card 1 */}
          <div
            className='github-card-top-animation col-span-1 md:col-span-2 lg:col-span-1'
          >
            <MagicCard className='rounded-xl' gradientColor='bg-card'>
              {/* Media 1 Mobile */}
              <div className='rounded-xl shadow-lg flex flex-col gap-3 md:gap-6'>
                <div className='md:hidden aspect-video w-full bg-background rounded-xl mb-3'>
                  <Image
                    className='object-cover h-full w-full rounded-xl rounded-b-none'
                    src='/github/github-profile-img.png'
                    alt='github profile picture'
                    width={552}
                    height={310}
                  />
                </div>
                <div className='p-5 pt-0 md:pt-5 flex flex-col gap-3 md:gap-6'>
                  <H3>{cards[0].title}</H3>
                  <ul className='space-y-4'>
                    <li>
                      <div className='flex items-start gap-3'>
                        <Laptop className='shrink-0 text-muted-foreground' />
                        <p className='-mt-0.5 text-muted-foreground font-medium'>
                          {cards[0].text1}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='flex items-start gap-3'>
                        <Code className='shrink-0 text-muted-foreground' />
                        <p className='-mt-0.5 text-muted-foreground font-medium'>
                          {cards[0].text2}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='flex items-start gap-3'>
                        <Layers className='shrink-0 text-muted-foreground' />
                        <p className='-mt-0.5 text-muted-foreground font-medium'>
                          {cards[0].text3}
                        </p>
                      </div>
                    </li>
                  </ul>
                  <Button
                    effect={'expandIcon'}
                    icon={Github}
                    iconPlacement='right'
                    className='w-full mt-auto'
                    asChild
                  >
                    <a target='_blank' href='https://github.com/joao-carmassi'>
                      {cards[0].button}
                    </a>
                  </Button>
                </div>
              </div>
            </MagicCard>
          </div>
          {/* Media 1 Desktop */}
          <div
            className='github-media-right-animation hidden md:block bg-muted rounded-xl col-span-1 md:col-span-3 lg:col-span-2'
          >
            <Image
              className='object-cover h-full w-full rounded-xl'
              src='/github/github-profile-img.png'
              alt='github profile picture'
              width={781}
              height={410}
            />
          </div>
          {/* Media 2 Desktop */}
          <div
            className='github-media-left-animation hidden md:block bg-muted rounded-xl col-span-1 md:col-span-3 lg:col-span-2 '
          >
            <Image
              className='object-cover h-full w-full rounded-xl'
              src='/github/github-organization-img.png'
              alt='github organization picture'
              width={781}
              height={410}
            />
          </div>
          {/* Card 2 */}
          <div
            className='github-card-bottom-animation col-span-1 md:col-span-2 lg:col-span-1'
          >
            <MagicCard className='rounded-xl' gradientColor='bg-card'>
              {/* Media 1 Mobile */}
              <div className='rounded-xl shadow-lg flex flex-col gap-3 md:gap-6'>
                <div className='md:hidden aspect-video w-full bg-background rounded-xl mb-3'>
                  <Image
                    className='object-cover h-full w-full rounded-xl rounded-b-none'
                    src='/github/github-organization-img.png'
                    alt='github organization picture'
                    width={552}
                    height={310}
                  />
                </div>
                <div className='p-5 pt-0 md:pt-5 flex flex-col gap-3 md:gap-6'>
                  <H3>{cards[1].title}</H3>
                  <ul className='space-y-4'>
                    <li>
                      <div className='flex items-start gap-3'>
                        <BookOpen className='shrink-0 text-muted-foreground' />
                        <p className='-mt-0.5 text-muted-foreground font-medium'>
                          {cards[1].text1}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='flex items-start gap-3'>
                        <Layers className='shrink-0 text-muted-foreground' />
                        <p className='-mt-0.5 text-muted-foreground font-medium'>
                          {cards[1].text2}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='flex items-start gap-3'>
                        <Code className='shrink-0 text-muted-foreground' />
                        <p className='-mt-0.5 text-muted-foreground font-medium'>
                          {cards[1].text3}
                        </p>
                      </div>
                    </li>
                  </ul>
                  <Button
                    effect={'expandIcon'}
                    icon={Github}
                    iconPlacement='right'
                    className='w-full mt-auto'
                    asChild
                  >
                    <a
                      target='_blank'
                      href='https://github.com/joao-carmassi-studies'
                    >
                      {cards[1].button}
                    </a>
                  </Button>
                </div>
              </div>
            </MagicCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubHomepage;
