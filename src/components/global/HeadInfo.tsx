import { headInfoType } from "@/types/public";
import Head from "next/head";
import React from "react";

const HeadInfo = ({ title, description }: headInfoType) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="author" content="taeh" />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: "Taeh | 김태현",
  description: "KimTaeHyun's Diary",
};

export default HeadInfo;
