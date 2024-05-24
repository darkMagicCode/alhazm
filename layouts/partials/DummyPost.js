import React from "react";
import ImageFallback from "@layouts/components/ImageFallback";
import Link from "next/link";
import Link333 from "../../public/images/logo.jpg";

const DummyPost = (props) => {
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
  const blog_folder = "blog"; // Dummy value for blog folder

  return (
    <div className="overflow-hidden rounded-2xl  shadows-[0_10px_35px_rgba(0,0,0,.05)]">
      {props.Link.frontmatter?.image && (
        <Link href={`/${blog_folder}/${props.Link.slug}`}>
          <ImageFallback
            className="  object-cover object-center object-fill h-80 w-full"
            src={props.Link.frontmatter.image}
            alt={props.Link.frontmatter?.title}
            width={770}
            height={335}
          />
        </Link>
      )}
      <div className="p-8">
        <h2 className="h4">
          <Link
            href={`/${blog_folder}/${props.Link.slug}`}
            className="block hover:text-primary hover:underline"
          >
            {props.Link.frontmatter?.title}
          </Link>
        </h2>
        <p className="mt-4">
          {props.Link.content?.slice(0, summary_length)}...
        </p>
        <div className="mt-6 flex items-center">
          <div className="overflow-hidden rounded-full border-2 border-white shadow-[0_0_0_2px] shadow-primary">
            <ImageFallback
              src={props.Link.frontmatter?.author?.avatar}
              width={50}
              height={50}
              alt="author"
            />
          </div>
          <div className="pl-5">
            <p className="font-medium text-dark">
              {props.Link.frontmatter?.author?.name}
            </p>
            <p>
              {/* {props.Link.frontmatter.date} - 5 min read */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DummyPost;
