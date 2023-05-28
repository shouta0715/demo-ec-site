import React from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  defaultImage?: string;
};

export const Image = ({ src, alt, className = "", defaultImage }: Props) => {
  return (
    <picture>
      <source srcSet={src} />
      <img
        alt={alt}
        className={className}
        loading="lazy"
        src={src ?? defaultImage}
      />
    </picture>
  );
};
