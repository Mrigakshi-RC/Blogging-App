import axios from "axios";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../config";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
}

const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <div className="flex items-center">
      <Link to={`/blog/${id}`}>
        <div className="p-4 border-b border-slate-200 pb-4 w-[90vw] max-w-screen-md ">
          <div className="flex">
            <div className="flex justify-center flex-col">
              <Avatar name={authorName} />
            </div>
            <div className="font-extralight pl-2 text-sm">{authorName}</div>
            <div className="flex justify-center flex-col pl-2">
              <Circle />
            </div>
            <div className="pl-2 font-thin text-slate-500 text-sm">
              {publishedDate}
            </div>
            <div className="text-xs"></div>
          </div>
          <div>
            {authorName} . {publishedDate}
          </div>
          <div className="text-xl font-bold pt-2">{title}</div>
          <div className="text-md font-thin">
            {content.slice(0, 100) + "..."}
          </div>
          <div className="text-slate-400 text-sm font-thin pt-2">{`${Math.ceil(
            content.length / 100
          )} minute(s) read`}</div>
        </div>
      </Link>
      <div
        className="w-[1.2rem] cursor-pointer"
        onClick={async () => {
          await axios.delete(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: { Authorization: localStorage.getItem("token") },
          });
          window.location.reload();
        }}
      >
        <img className="w-full" src="/delete-icon.svg" />
      </div>
    </div>
  );
};

export default BlogCard;

export const Avatar = ({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "big";
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        size === "small" ? "w-6 h-6" : "w-10 h-10"
      } overflow-hidden bg-gray-600 rounded-full`}
    >
      <span
        className={`${
          size === "small" ? "text-xs" : "text-md"
        } font-extralight text-gray-600 dark:text-gray-300`}
      >
        {name[0]}
      </span>
    </div>
  );
};

export const Circle = () => {
  return <div className="h-1 w-1 rounded-full bg-slate-500"></div>;
};
