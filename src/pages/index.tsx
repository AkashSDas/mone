import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import React from "react";

interface ContentMetaData {
  title: string;
  description: string;
  tags: string[];
}

interface Props {
  files: string[];
  contentMetaDataArr: ContentMetaData[];
}

const IndexPage: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Mone</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className="home">
        <div className="brand-info">
          <h1 className="brand">Mone</h1>

          <div className="brand-tag">
            <h2 className="tag-line-head">SURVIVAL OF THE FITTEST</h2>
            <div className="tag-line-content">
              Mone is platform for practical resources needed to understand the
              world of finance and business
            </div>
          </div>
        </div>

        <hr />

        <div className="content-grid">
          {props.files.map((file, idx) => {
            const href = `${file.replace(".md", "")}`;
            const coverUrl = `/${file.replace(".md", "")}/cover.png`;

            return (
              <div key={idx} className="content-card">
                <Link href={href}>
                  <div>
                    <img src={coverUrl} />

                    <div className="content">
                      <div className="heading">
                        {props.contentMetaDataArr[idx].title}
                      </div>
                      <div className="description">
                        {props.contentMetaDataArr[idx].description}
                      </div>
                      {/* <div>
                      {props.contentMetaDataArr[idx].tags.map((tag, i) => (
                        <span key={i}>#{tag} </span>
                      ))}
                    </div> */}
                    </div>

                    <button className="read-more-btn">READ MORE</button>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props;
}> => {
  const contentsDirPath = path.join("src", "contents");
  const files = fs.readdirSync(contentsDirPath);
  let contentMetaDataArr: ContentMetaData[] = [];

  files.forEach((file) => {
    const markdownWithMetaData = fs
      .readFileSync(path.join("src", "contents", file)) // file will have .md
      .toString();

    const parsedMarkdown = matter(markdownWithMetaData);
    const title = parsedMarkdown.data.title;
    const description = parsedMarkdown.data.description;
    const tags = parsedMarkdown.data.tags;

    contentMetaDataArr.push({ title, description, tags });
  });

  // Order of file name in files arr and contentMetaDataArr will be same
  // So metadata will be of the right file when the index is same

  return {
    props: {
      files: files,
      contentMetaDataArr,
    },
  };
};

export default IndexPage;
