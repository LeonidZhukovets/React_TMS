import React, { FC } from "react";

type ImageProps = {
  src: string;
  alt: string;
};

const Image: FC<ImageProps> = (props) => {
  const { src, alt } = props;

  return <img src={src} alt={alt} />;
};

export default Image;
