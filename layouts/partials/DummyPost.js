import React, { useEffect, useState } from 'react';
import ImageFallback from '@layouts/components/ImageFallback';
import Link from 'next/link';
import carRentalIcon from '../../public/images/rental-car.svg';
import star from '../../public/images/star.svg';
import love from '../../public/images/love.svg';
import config from '@config/config.json';
import { IconButton, Typography } from '@material-tailwind/react';

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
  const blog_folder = 'posts'; // Dummy value for blog folder
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
  const phoneNumber = '+201095559522'; // Ensure this is the correct phone number format
  const message = `Iam Interested In Your Services: https://alhazm-car-rental.vercel.app/${props.Link?.slug}`;
  // const waLink = `https://wa.me/${phoneNumber}?text=${message}`;
  // console.log(`https://wa.me/${phoneNumber}?text=${message1.message}`);
  const x = {
    nav_button: {
      phoneNumber: '1234567890',
      message:
        "Hello, I'm interested in your services. Please see the attached image. Attach the image here: [Your image URL or instructions]",
      label: 'Contact Us',
    },
  };
  const message1 = {
    message: `Hello, I'm interested in your services. `,
  };
  const imageUrl1 = 'props.Link.frontmatter.image';

  // let url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURI(message1.message)}&app_absent=0`;
  // const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const handleWhatsappClick = () => {
    const url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURI(message1.message)}`;
    window.open(url ,"_blank" )
    // const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  }

  // Appending the message to the URL by encoding it
  // url += ``;
  const url = `/${blog_folder}/${props.Link.slug}` ;
  const title = props.Link.frontmatter?.title;
  const description = 'AlHazam premium car rental services';

  return (
    <div onClick={()=> window.location.href = url} className='shadows-[0_10px_35px_rgba(0,0,0,.05)] relative overflow-hidden  rounded-2xl'>
      {props.Link.frontmatter?.image && (
        // <Link href={`/${blog_folder}/${props.Link.slug}`}>
        <Link href={`/${blog_folder}/${props.Link.slug}`} onClick={() => console.log(url)}>
          <div className='relative'>
            <ImageFallback
              className='  h-80 w-full object-cover object-fill object-center '
              src={props.Link.frontmatter.image}
              alt={props.Link.frontmatter?.title}
              width={770}
              height={335}
            />

            <div
              style={{ zIndex: 1 }}
              className=' absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-black via-black to-transparent opacity-30'
            ></div>
          </div>
        </Link>
      )}
      <div className='bg-gradient-to-b from-[#fdb6013a]  via-[#fdb6013f] to-transparent px-8 py-4  '>
        <h2 className='h4'>
          <Link href={`/${blog_folder}/${props.Link.slug}`} className='block w-full hover:text-primary hover:underline'>
            {props.Link.frontmatter?.title}
          </Link>
        </h2>
        {/* <p className='mt-2'>{props.Link.content?.slice(0, summary_length)}...</p> */}
        <div className='mt-4 flex items-center justify-between'>
          <div className='overflow-hidden rounded-full border-2 border-white shadow-[0_0_0_2px] shadow-primary'>
            <ImageFallback src={props.Link.frontmatter?.author?.avatar} width={50} height={50} alt='author' />
          </div>
          <Typography color='blue-gray' className=' font-medium'>
            From 200$
          </Typography>
          <div className='pl-5'>
            {/* <p className='font-medium text-dark'>{props.Link.frontmatter?.author?.name}</p> */}
            <p className='flex items-center justify-evenly'>
              <Typography color='blue-gray' className='flex items-center gap-1.5 font-normal'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='-mt-0.5 h-5 w-5 text-yellow-700'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                    clipRule='evenodd'
                  />
                </svg>
                5.0
              </Typography>
            </p>
          </div>
        </div>
      </div>
      <div
        onClick={handleWhatsappClick}
        className='btn btn-primary flex items-center justify-center rounded-md px-5 py-2.5 text-center text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-blue-300'
      >
        <ImageFallback src={carRentalIcon} width={25} height={25} alt='author' className='mr-2 ' />

        {config.nav_button.label}

      </div>
      {/* <SocialShare url={url} title={title} description={description} imageUrl={imageUrl1} /> */}

      <span
        style={{ zIndex: 2 }}
        className='absolute left-0 top-0 m-2 rounded-full bg-primary px-2 text-center text-sm font-medium text-white'
      >
        39% OFF
      </span>
      <IconButton
        style={{ zIndex: 2 }}
        size='sm'
        color={loveClicked ? 'red' : 'white'}
        onClick={() => setloveClicked(true)}
        variant='text'
        className='absolute right-4 top-4 rounded-full'
      >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='h-6 w-6'>
          <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
        </svg>
        1k
      </IconButton>
    </div>
  );
};

export default DummyPost;
