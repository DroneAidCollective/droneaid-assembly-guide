"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const ImageContent = ({ item }) => {
  const [imagePath, setImagePath] = useState(null);

  useEffect(() => {
    if (!item?.image) return;

    const basePath = window.location.pathname.endsWith("/")
      ? window.location.pathname
      : window.location.pathname + "/";

    setImagePath(`${basePath}images/guide/${item.image}`);
  }, [item]);

  if (!imagePath) return null;

  return (
    <div className="flex flex-col gap-2 rounded-md">
      <Image
        src={imagePath}
        alt={item.image}
        width={500}
        height={500}
        className="w-full h-auto rounded-md"
      />
    </div>
  );
};

export default ImageContent;
