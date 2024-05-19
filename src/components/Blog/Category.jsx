import React from "react";
import Link from "next/link";
import { cx } from "../../utils";

const Category = ({ link = "#", name, active, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-2 px-10 rounded-full capitalize font-semibold border border-solid transition-all ease duration-200 m-2",
        active
          ? "bg-dark text-light border-light"
          : "bg-light text-dark border-dark",
        "hover:scale-105",
        props.className
      )}
    >
      #{name}
    </Link>
  );
};

export default Category;
