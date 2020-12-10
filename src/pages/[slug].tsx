import fs from "fs";
import matter from "gray-matter";
import marked from "marked";
import Head from "next/Head";
import Link from "next/link";
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
  const colors = [
    "#fa8142",
    "#09c372",
    "#498afb",
    "#ff4088",
    "hsl(265, 50%, 60%)",
    "hsl(48, 100%, 67%)",
    " #7000ff",
  ];

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <main className="content">
        <div>
          <Link href="/">
            <a className="go-back">Go Back</a>
          </Link>
        </div>
        <h1 className="title">{title}</h1>
        <hr />
        <p className="description">{description}</p>
        {/* <div>
          Created at {publishdate}
          <br />
          Last updated at {lastmod}
        </div> */}
        <div className="tag-grp">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="tag"
              style={{
                backgroundColor:
                  colors[Math.floor(Math.random() * colors.length)],
                color: "black",
              }}
            >
              #{tag}{" "}
            </span>
          ))}
        </div>
        <div
          className="content-article"
          dangerouslySetInnerHTML={{ __html: htmlString }}
        />
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
