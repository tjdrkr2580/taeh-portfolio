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

export interface fileProps {
  data: {
    title: string;
    date: string;
    tag: string[];
    desc: string;
  };
  content: string;
}

export interface blogProps {
  files: fileProps[];
}

export interface blogProp {
  file: fileProps;
}
