type Paths = "" | "about" | "contact" | "projects" | "blog";

type Media = {
  data: {
    id: number;
    attributes: {
      formats: {
        small: {
          url: string;
          name: string;
        };
        thumbnail: {
          url: string;
          name: string;
        };
      };
      url: string;
      name: string;
    };
  };
};

type Article = {
  id: number;
  attributes: {
    title: string;
    description: string;
    content: string;
    date: string;
    featured: boolean;
    slug: string;
    tags?: {
      data: {
        id: number;
        attributes: {
          name: string;
        };
      }[];
    };
    cover: {
      data: Media;
    };
  };
};

type fetchAPIProps = {
  path: string;
  urlParams?: Record<any, any>;
  options?: Record<any, any>;
};
