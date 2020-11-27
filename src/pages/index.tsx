import fs from "fs";
import { GetStaticProps } from "next";
import Link from "next/link";
import path from "path";
import React from "react";

interface Props {
  files: string[];
}

const IndexPage: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <h1>Mone</h1>

      <div>
        {props.files.map((file, idx) => {
          const href = `${file.replace(".md", "")}`;
          const coverUrl = `/${file.replace(".md", "")}/cover.png`;
          const topicName = href.split("_").join(" ");

          return (
            <div key={idx}>
              <Link href={href}>
                <div>
                  <img src={coverUrl} />
                  <div>{topicName}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props;
}> => {
  const contentsDirPath = path.join("src", "contents");
  const files = fs.readdirSync(contentsDirPath);

  return {
    props: {
      files: files,
    },
  };
};

export default IndexPage;
