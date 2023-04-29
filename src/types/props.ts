export interface homeWrapperPropsType {
  isView: boolean;
}

export interface listTitlePropsType {
  title: string;
  isStack: boolean;
  stack: string;
  href: boolean;
  link: string;
  desc: string;
  lists: string[];
  project: string;
}

export interface fileData {
  data: {
    title: string;
    date: string;
    tag: string[];
    desc: string;
  };
}

export interface fileProps extends fileData {
  content: string;
}

export interface blogProps {
  files: fileProps[];
}

export interface blogProp {
  file: fileProps;
}

export interface markdownDetailSSGType {
  params: { id: string };
  locales: undefined;
  locale: undefined;
  defaultLocale: undefined;
}

export interface fileDetailProps extends fileProps {
  contentHtml: string;
}
