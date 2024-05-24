import config from '@config/config.json';
import { gsap } from '@lib/gsap';
import { plainify } from '@lib/utils/textConverter';
import Footer from '@partials/Footer';
import Header from '@partials/Header';
import logo from '../public/images/logo.jpg';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

const Base = ({ title, meta_title, description, image, noindex, canonical, children }) => {
  const { meta_image, meta_author, meta_description } = config.metadata;
  const { base_url } = config.site;
  const router = useRouter();
  const main = useRef();

  //gsap fade animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      //fade
      const fadeElements = document.querySelectorAll('.fade');
      fadeElements.forEach(el => {
        gsap.to(el, {
          opacity: 1,
          scrollTrigger: el,
          duration: 0.3,
        });
      });

      //gsap animation
      const elements = document.querySelectorAll('.animate');
      elements.forEach(el => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            // markers: true,
          },
        });

        if (el.classList.contains('from-left')) {
          tl.from(el, {
            opacity: 0,
            x: -100,
          });
        } else if (el.classList.contains('from-right')) {
          tl.from(el, {
            opacity: 0,
            x: 100,
          });
        } else {
          tl.from(el, {
            opacity: 0,
            y: 100,
          });
        }
      });

      //background animation
      const animatedBgs = document.querySelectorAll('.bg-theme');
      animatedBgs.forEach(bg => {
        gsap.to(bg, {
          scrollTrigger: {
            trigger: bg,
            toggleClass: 'bg-animate',
            once: true,
          },
        });
      });
    }, main);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        {/* title */}
        <title>{plainify(meta_title ? meta_title : title ? title : config.site.title)}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* <meta property="og:image" content="https://domain.tld/image.jpg"/> */}

        <meta name='AlHazam' content='AlHazam-light-nextjs' />

        {/* canonical url */}
        {canonical && <link rel='canonical' href={canonical} itemProp='url' />}

        {/* noindex robots */}
        {noindex && <meta name='robots' content='noindex,nofollow' />}

        {/* meta-description */}
        <meta name='description' content={plainify(description ? description : meta_description)} />

        {/* author from config.json */}
        <meta name='author' content={meta_author} />

        {/* og-title */}
        <meta property='og:title' content={plainify(meta_title ? meta_title : title ? title : config.site.title)} />

        {/* og-description */}
        <meta property='og:description' content={plainify(description ? description : meta_description)} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={`${base_url}/${router.asPath.replace('/', '')}`} />

        {/* twitter-title */}
        <meta name='twitter:title' content={plainify(meta_title ? meta_title : title ? title : config.site.title)} />

        {/* twitter-description */}
        <meta name='twitter:description' content={plainify(description ? description : meta_description)} />

        {/* og-image */}
        {/* <meta property='og:image' content={logo} /> */}

        {/* twitter-image */}
        <meta name='twitter:image' content={`${base_url}${image ? image : meta_image}`} />
        <meta name='twitter:card' content='summary_large_image' />
        {/* WhatsApp meta tags */}
        <meta name='description' content={`${base_url}${image ? image : meta_image}`} />
        {/* <link
          rel="apple-touch-icon"
          href={logo}
        /> */}
        {/* <link rel="icon" href={logo} /> */}
        <meta
          property='og:image'
          // itemprop="image"
          content={
            'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/307486267_478264784323046_501080229019256398_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGyY-5dCdHvw9S34xTiaezM0RkwMFACcyjRGTAwUAJzKEeIPJb6YZbstNbv152yZQdkgWjRRTJC83lGW902b77i&_nc_ohc=GZVYPhrYRuoQ7kNvgGJeI0I&_nc_ht=scontent.fcai19-3.fna&oh=00_AYCqmaEbnWYMVAEd22aiq30h6qR9f0ISVD1752zHTBCK7Q&oe=66567FFA'
          }
        />
        {/* <link rel="canonical" href={logo} /> */}
      </Head>
      <Header />
      {/* main site */}
      <main style={{ overflowX: 'hidden' }} ref={main}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Base;
