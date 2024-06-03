import Base from '@layouts/Baseof';
import Circle from '@layouts/components/Circle';
import ImageFallback from '@layouts/components/ImageFallback';
import { getListPage } from '@lib/contentParser';
import { gsap } from '@lib/gsap';
import { markdownify } from '@lib/utils/textConverter';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import { useEffect, useRef, useState } from 'react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import VideoPopupV from '@layouts/components/VideoPopupV';
import DummyPost from '@layouts/partials/DummyPost';
import Link1 from '../public/images/car1/1.jpg';
import Link3 from '../public/images/car1/3.jpg';
import logo1 from '../public/images/file.png';
import logo from '../public/images/logo.jpg';

const Home = ({ banner, brands, features, intro, speciality, testimonial, response }) => {
  const paginationRef = useRef(null);
  const testimonialPaginationRef = useRef(null);
  const testimonialPaginationRef1 = useRef(null);
  const testimonialPaginationRef2 = useRef(null);
  const brandRef = useRef(null);
  const [data, setData] = useState(response);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/cars', {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      // setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const banner = document.querySelector('.banner');
      const bannerBg = document.querySelector('.banner-bg');
      const bannerContent = document.querySelector('.banner-content');
      const header = document.querySelector('.header');
      const tl = gsap.timeline();

      tl.fromTo('.banner-title', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.5 })
        .fromTo('.banner-btn', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '>-0.4')
        .fromTo(
          '.banner-img',
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          },
          '>-.5',
        );
      // .fromTo(
      //   '.animateCars',
      //   {
      //     y: 100,
      //     opacity: 0,
      //   },
      //   {
      //     y: 0,
      //     opacity: 1,
      //     duration: 2,
      //   },
      // );

      //parallax banner
      const parallaxTl = gsap.timeline({
        ease: 'none',
        scrollTrigger: {
          trigger: banner,
          start: () => `top ${header.clientHeight}`,
          scrub: true,
        },
      });

      const position = (banner.offsetHeight - bannerBg.offsetHeight) * 0.4;
      parallaxTl
        .fromTo(
          bannerBg,
          {
            y: 0,
          },
          {
            y: -position,
          },
        )
        .fromTo(
          bannerContent,
          {
            y: 0,
          },
          {
            y: position,
          },
          '<',
        )
        .fromTo(
          '.banner-bg .circle',
          {
            y: 0,
          },
          {
            y: position,
          },
          '<',
        );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ['animateCars', 'animateCars1', 'animateCars2'].forEach((item, index) => {
        gsap.fromTo(
          `.${item}`,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: `.${item}`,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          },
        );
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
  console.log(data);
  return (
    <Base imgUrl={'logo'}>
      <section className='section banner pt-0'>
        <div className='container-xl'>
          <div className='relative'>
            <div
              style={{ zIndex: -999999 }}
              className='bg-theme banner-bg  absolute bottom-0 left-0 right-0 top-0 opacity-15 '
            >
              <Circle className='circle left-[10%] top-12' width={32} height={32} fill={false} />
              <Circle className='circle left-[2.5%] top-[29%]' width={85} height={85} />
              <Circle className='circle bottom-[48%] left-[22%]' width={20} height={20} />
              <Circle className='circle bottom-[37%] left-[15%]' width={47} height={47} fill={false} />
              <Circle className='circle bottom-[13%] left-[6%]' width={62} height={62} fill={false} />
              <Circle className='circle right-[12%] top-[15%]' width={20} height={20} />
              <Circle className='circle right-[2%] top-[30%]' width={73} height={73} fill={false} />
              <Circle className='circle right-[19%] top-[48%]' width={37} height={37} fill={false} />
              <Circle className='circle right-[33%] top-[54%]' width={20} height={20} />
              <Circle className='circle bottom-[20%] right-[3%]' width={65} height={65} />
            </div>

            <div className='row relative h-[95vh] items-center justify-center overflow-hidden rounded-2xl opacity-100'>
              <div
                class='image-div absolute bottom-[0px] left-[0px] right-[0px] top-[0px] rounded-2xl'
                style={{ zIndex: -100 }}
              ></div>

              <div className='col-12 h-[600px] '>
                <div className='row relative justify-center pb-10'>
                  <div className='banner-content col-10 items-center pb-10 pt-0 text-center'>
                    <ImageFallback src={logo1} width={'w-full'} height={'w-full'} className='banner-title' />
                    {markdownify(
                      'Al-Hazm Co. offers the latest and most luxurious cars for rent. We are committed to ensuring the comfort of our customers',
                      'h1',
                      'mb-8 banner-title opacity-0 text-2xl lg:text-5xl text-white ',
                    )}
                  </div>
                </div>
              </div>
              <div
                style={{ zIndex: -99 }}
                className=' absolute bottom-0 left-0 right-0 top-0 bg-black opacity-80 '
              ></div>
            </div>
            <div className='row mt-10 border-y border-border py-5'>
              <div className='animate from-right col-12'>
                <Swiper
                  modules={[Pagination, Autoplay]}
                  // slidesPerView={1}
                  loop
                  pagination={{
                    el: brandRef.current,
                    type: 'bullets',
                    dynamicBullets: true,
                    clickable: true,
                  }}
                  autoplay={{ delay: 3000 }}
                  onBeforeInit={swiper => {
                    swiper.params.pagination.el = brandRef.current;
                  }}
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {brands.map((brand, index) => (
                    <SwiperSlide
                      className=' h-60 cursor-pointer px-6 py-6 grayscale  transition hover:grayscale-0 lg:px-10'
                      key={'brand-' + index}
                    >
                      <div className='relative h-full'>
                        <ImageFallback
                          className='h-full w-full object-contain'
                          src={brand}
                          sizes='100vw'
                          alt=''
                          fill={true}
                          priority={true}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Features */}

      {/* Testimonial */}
      <section className='section pt-0'>
        <div className='container'>
          <div className='animate text-center'>
            <p>{testimonial.subtitle}</p>
            {markdownify(testimonial.title, 'h2', 'mt-4 section-title')}
            {markdownify(testimonial.description, 'p', 'mt-10')}
          </div>
          <div className=' row mt-10 items-center justify-center'>
            <div className='xl:col-11'>
              {data?.map((d, i) => <>

                <div className='animateCars row items-center justify-center'>
                  <div className='hidden lg:col-3 xl:col-4 lg:block'>
                    <ImageFallback src='/images/testimonials-01.png' width={455} height={522} alt='testimonials' />
                  </div>
                  <div className='rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,.05)] md:col-7 lg:col-6 xl:col-4'>

                              <DummyPost Link={d} />


                    <div className='relative h-8'>
                      <div
                        className='pagination absolute left-1/2 -translate-x-1/2'
                        ref={testimonialPaginationRef1}
                      ></div>
                    </div>
                  </div>
                  <div className='hidden lg:col-3 xl:col-4 lg:block'>
                    <ImageFallback src='/images/testimonials-02.png' width={455} height={522} alt='testimonials' />
                  </div>
                </div>
              </>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className='section'>
        <div className='container text-center'>
          <div className='animate'>
            <p className='uppercase'>{features.sub_title}</p>
            {markdownify(features.title, 'h2', 'mt-4 section-title')}
            {markdownify(features.description, 'p', 'mt-10')}
          </div>
          <div className='animate from-right relative mt-10'>
            <Swiper
              slidesPerView={1}
              pagination={{
                type: 'bullets',
                el: paginationRef.current,
                clickable: true,
                dynamicBullets: true,
              }}
              // autoplay={{ delay: 3000 }}
              onBeforeInit={swiper => {
                swiper.params.pagination.el = paginationRef.current;
              }}
              modules={[Pagination]}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {features.list.map((item, index) => (
                <SwiperSlide key={'feature-' + index}>
                  <div className='feature-card m-4 rounded-md border border-transparent px-7 py-16 shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none'>
                    <div className='feature-card-icon inline-flex h-20 w-20 items-center justify-center rounded-md border border-[#fff7f3] text-primary'>
                      <FeatherIcon icon={item.icon} />
                    </div>
                    <h3 className='h4 mb-5 mt-6'>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className='relative mt-9 flex justify-center'>
              <div className='pagination ms-20 ' ref={paginationRef}></div>
            </div>
          </div>
        </div>
      </section>
      {/* Short Into */}
      <section className='section pt-0'>
        <div className='container-xl'>
          <div className='relative px-4 py-[70px]'>
            <div className='text-center'>
              <div className='animate'>
                <p>{intro.subtitle}</p>
                {markdownify(intro.title, 'h2', 'mt-4 section-title')}
                {markdownify(intro.description, 'p', 'mt-10')}
              </div>
              <div className='max-h-2394px] mx-auto mt-10 h-full w-full max-w-[716px]'>
                <VideoPopupV id={intro.video_id} thumbnail={intro.thumbnail} />
              </div>
            </div>
            <div className='bg-theme absolute left-0 top-0 w-full'>
              <Circle className='left-[10%] top-12' width={32} height={32} fill={false} />
              <Circle className='left-[3%] top-[30%]' width={85} height={85} />
              <Circle className='bottom-[52%] left-[22%]' width={20} height={20} />
              <Circle className='bottom-[35%] left-[15%]' width={47} height={47} fill={false} />
              <Circle className='bottom-[6%] left-[6%]' width={62} height={62} fill={false} />
              <Circle className='right-[12%] top-[12%]' width={20} height={20} />
              <Circle className='right-[2%] top-[30%]' width={73} height={73} fill={false} />
              <Circle className='right-[19%] top-[50%]' width={37} height={37} fill={false} />
              <Circle className='right-[33%] top-[52%]' width={20} height={20} />
              <Circle className='bottom-[18%] right-[5%]' width={65} height={65} />
            </div>
          </div>
        </div>
      </section>
      {/* Cta */}
      {/* <Cta /> */}
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {

  const homepage = await getListPage('content/_index.md');
  const { frontmatter } = homepage;
  const { banner, brands, features, intro, speciality, testimonial } = frontmatter;

  return {
    props: {
      banner: banner,
      brands: brands,
      features: features,
      intro: intro,
      speciality: speciality,
      testimonial: testimonial,
    },
  };
};
