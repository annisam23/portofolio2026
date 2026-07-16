// content for about section
import { Highlighter } from '@/components/Highlighter';
import { HighlighterRef } from '@/components/sections/AboutSection';
import React from 'react';

export const getTexts = (
  textLeftRef: React.RefObject<HTMLHeadingElement | null>,
  textRightRef: React.RefObject<HTMLHeadingElement | null>
) => [
  { ref: textLeftRef, text: 'Quality', top: 'min-[320px]:top-5 md:top-15' },
  {
    ref: textRightRef,
    text: 'assurance',
    top: 'min-[320px]:top-12 sm:top-20 md:top-35',
  },
];

export const getFlowers = (
  flowerRef1: React.RefObject<HTMLDivElement | null>,
  flowerRef2: React.RefObject<HTMLDivElement | null>,
  flowerRef3: React.RefObject<HTMLDivElement | null>
) =>
  [
    { ref: flowerRef1, variant: 'one', size: 120, position: 'top-0 left-10' },
    {
      ref: flowerRef2,
      variant: 'two',
      size: 140,
      position: '-bottom-20 left-15',
    },
    {
      ref: flowerRef3,
      variant: 'three',
      size: 150,
      position: 'bottom-0 -right-20',
    },
  ] as const;

export const getAboutItems = (
  highlightLocation: React.RefObject<HighlighterRef | null>,
  highlightTech: React.RefObject<HighlighterRef | null>
) => [
  {
    label: 'Name:',
    value: 'Annisa Maulida Rahma',
  },
  {
    label: 'Location:',
    value: (
      <Highlighter ref={highlightLocation} color='#78c2ff' action='box'>
       Bogor, Indonesia
      </Highlighter>
    ),
  },
  {
    label: 'Experience:',
    value: (
      <>
        Quality Assurance Engineer with <span className='font-holtwood'>2+</span> years
        of experience (InsurTech, EduTech,FinTech)
      </>
    ),
  },
  {
    label: 'Core stack:',
    value: (
      <Highlighter ref={highlightTech} color='#f278ff8b' action='highlight'>
        Selenium, Katalon, Postman, Trello, Spreadsheet, Test Case Writing & Execution, Mocha, K6
      </Highlighter>
    ),
  },
];

export const getHobbies = (
  highlightReading: React.RefObject<HighlighterRef | null>,
  highlightMovies: React.RefObject<HighlighterRef | null>
) => [
  {
    label: 'Hobbies:',
    value: (
      <>
        <a
          href=''
          target='_blank'
          rel='noopener noreferrer'
          className='hover:font-bold transition-all duration-300 read'
        >
          <Highlighter ref={highlightReading} color='#369f36bb'>
            Running
          </Highlighter>
        </a>
        ,{' '}
        <a
          href=''
          target='_blank'
          rel='noopener noreferrer'
          className='hover:font-bold transition-all duration-300 watch'
        >
          <Highlighter ref={highlightMovies} color='#ffeb78'>
            watching movies
          </Highlighter>
        </a>
        , and traveling
      </>
    ),
  },
];
