import React, { useEffect, useState } from 'react';
import ImageFallback from '@layouts/components/ImageFallback';
import Link from 'next/link';
import Link333 from '../../public/images/rental-car.svg';
import star from '../../public/images/star.svg';
import love from '../../public/images/love.svg';
import config from '@config/config.json';
import { IconButton } from '@material-tailwind/react';

const DummyPost = props => {
  // const props.Link = {
  //   frontmatter: {
  //     image: props.Link.Link,
  //     title: "Car For Rent",
  //     author: {
  //       avatar: Link333,
  //       name: "Al-Hazm Group",
  //     },
  //     date: "2024-05-23",
  //   },
  //   content: "This is a dummy post content for demonstrating the component.",
  //   slug: "dummy-post",
  // };

  const summary_length = 100; // Dummy value for summary length
  const blog_folder = 'blog'; // Dummy value for blog folder
  const [imageUrl, setImageUrl] = useState(null);
  const [loveUrl, setloveUrl] = useState(null);
  const [loveClicked, setloveClicked] = useState(false);

  useEffect(() => {
    // Fetch or compute the image URL dynamically
    const fetchedImageUrl = star; // Example URL
    setImageUrl(fetchedImageUrl);
    const fetchedLoveUrl = love; // Example URL
    setloveUrl(fetchedLoveUrl);
  }, []);
  if (!imageUrl) {
    return null; // Or a loading spinner
  }
  if (!loveUrl) {
    return null; // Or a loading spinner
  }

  return (
    <div className='shadows-[0_10px_35px_rgba(0,0,0,.05)] relative overflow-hidden  rounded-2xl'>
      {props.Link.frontmatter?.image && (
        <Link href={`/${blog_folder}/${props.Link.slug}`}>
          <ImageFallback
            className='  h-80 w-full object-cover object-fill object-center'
            src={props.Link.frontmatter.image}
            alt={props.Link.frontmatter?.title}
            width={770}
            height={335}
          />
        </Link>
      )}
      <div className='p-8'>
        <h2 className='h4'>
          <Link href={`/${blog_folder}/${props.Link.slug}`} className='block hover:text-primary hover:underline'>
            {props.Link.frontmatter?.title}
          </Link>
        </h2>
        <p className='mt-4'>{props.Link.content?.slice(0, summary_length)}...</p>
        <div className='mt-6 flex items-center'>
          <div className='overflow-hidden rounded-full border-2 border-white shadow-[0_0_0_2px] shadow-primary'>
            <ImageFallback src={props.Link.frontmatter?.author?.avatar} width={50} height={50} alt='author' />
          </div>
          <div className='pl-5'>
            {/* <p className='font-medium text-dark'>{props.Link.frontmatter?.author?.name}</p> */}
            <p>
              <div class='mb-5 mt-2.5 flex items-center'>
                <span class='mr-2 rounded bg-primary px-2.5 py-0.5 text-xs font-semibold'>5.0</span>

                <ImageFallback src={imageUrl} width={25} height={25} alt='star' />
                <ImageFallback src={imageUrl} width={25} height={25} alt='star' />
                <ImageFallback src={imageUrl} width={25} height={25} alt='star' />
                <ImageFallback src={imageUrl} width={25} height={25} alt='star' />
                <ImageFallback src={imageUrl} width={25} height={25} alt='star' />

                <IconButton variant='text'
                onClick={() => setloveClicked(true)}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill={loveClicked ? '#D9AF62' : 'none'}
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='#D9AF62'
                    class='size-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                    />

                  </svg>
                  1k
                </IconButton>
              </div>
            </p>
          </div>
        </div>
      </div>
      <Link
        href={config.nav_button.link}
        className='btn btn-primary flex items-center justify-center rounded-md px-5 py-2.5 text-center text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-blue-300'
      >
        <ImageFallback src={Link333} width={25} height={25} alt='author' className='mr-2 ' />

        {config.nav_button.label}
      </Link>

      <span className='absolute left-0 top-0 m-2 rounded-full bg-primary px-2 text-center text-sm font-medium text-white'>
        39% OFF
      </span>
    </div>
  );
};

export default DummyPost;
