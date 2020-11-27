import fs from "fs";
import matter from "gray-matter";
import marked from "marked";
import Head from "next/Head";
import path from "path";
import React from "react";

interface Props {
  htmlString: string;
  data: {
    [key: string]: any;
  };
  title: string;
  description: string;
  tags: string[];
}

const Content: React.FC<Props> = ({
  htmlString,
  title,
  description,
  tags,
}: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        {tags.map((tag, idx) => (
          <span key={idx}>#{tag} </span>
        ))}
      </div>
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    </div>
  );
};

export const getStaticPaths = () => {
  const contentsDirPath = path.join("src", "contents");
  const files = fs.readdirSync(contentsDirPath);
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = ({ params }: Params) => {
  const markdownWithMetaData = fs
    .readFileSync(path.join("src", "contents", params.slug + ".md"))
    .toString();

  const parsedMarkdown = matter(markdownWithMetaData);
  const title = parsedMarkdown.data.title;
  const description = parsedMarkdown.data.description;
  const tags = parsedMarkdown.data.tags;
  const htmlString = marked(parsedMarkdown.content);

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data,
      title,
      description,
      tags,
    },
  };
};

export default Content;
