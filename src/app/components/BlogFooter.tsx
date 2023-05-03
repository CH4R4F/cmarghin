import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

type BlogFooterProps = {
  url: string;
  title: string;
  quote: string;
};

const BlogFooter = ({ url, title, quote }: BlogFooterProps) => {
  return (
    <footer className="flex items-center space-x-4 mt-16">
      <span className="text-slate-900 dark:text-slate-100 text-3xl">
        Share:
      </span>

      <div className="flex items-center">
        <FacebookShareButton url={url} quote={quote}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
      </div>
      <div className="flex items-center">
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
      </div>
      <div className="flex items-center">
        <LinkedinShareButton
          url={url}
          title={title}
          summary={quote}
          source={url}
        >
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
      </div>
    </footer>
  );
};

export default BlogFooter;
