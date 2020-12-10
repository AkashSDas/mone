import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import Head from "next/Head";
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

      <main>
        <h1 className="brand">Mone</h1>

        <div>
          {props.files.map((file, idx) => {
            const href = `${file.replace(".md", "")}`;
            const coverUrl = `/${file.replace(".md", "")}/cover.png`;

            return (
              <div key={idx}>
                <Link href={href}>
                  <div>
                    <img src={coverUrl} />
                    <div>{props.contentMetaDataArr[idx].title}</div>
                    <div>{props.contentMetaDataArr[idx].description}</div>
                    <div>
                      {props.contentMetaDataArr[idx].tags.map((tag, i) => (
                        <span key={i}>#{tag} </span>
                      ))}
                    </div>
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
