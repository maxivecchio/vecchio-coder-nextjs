import { BsFillHouseFill } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";

const BreadCrumb = ({ children, path }) => {
  return (
    <Link href={path} className="container py-4 flex items-center gap-3">
      <span className="text-sm text-gray-400">
        <AiOutlineArrowLeft />
      </span>
      <p className="text-gray-600 font-medium">{children}</p>
    </Link>
  );
};

export default BreadCrumb;
