import { headInfoType } from "@/types/public";
import Head from "next/head";
import React from "react";

const HeadInfo = ({ title, description }: headInfoType) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="author" content="taeh" />
      <meta name="description" content={description} />
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: "Taeh | 김태현",
  description: "KimTaeHyun's Diary",
};

export default HeadInfo;
