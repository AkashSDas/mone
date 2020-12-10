import fs from "fs";
import matter from "gray-matter";
import marked from "marked";
import Head from "next/Head";
import path from "path";
import React from "react";

interface Props {
  htmlString: string;
  title: string;
  description: string;
  tags: string[];
  lastmod: string;
  publishdate: string;
}

const Content: React.FC<Props> = ({
  htmlString,
  title,
  description,
  tags,
  lastmod,
  publishdate,
}: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <h1>{title}</h1>
        <p>{description}</p>
        <div>
          Created at {publishdate}
          <br />
          Last updated at {lastmod}
        </div>
        <div>
          {tags.map((tag, idx) => (
            <span key={idx}>#{tag} </span>
          ))}
        </div>
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </main>
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
  const lastmod = new Date(parsedMarkdown.data.lastmod).toISOString();
  const publishdate = new Date(parsedMarkdown.data.publishdate).toISOString();
  const htmlString = marked(parsedMarkdown.content);

  return {
    props: {
      htmlString,
      title,
      description,
      tags,
      lastmod,
      publishdate,
    },
  };
};

export default Content;
