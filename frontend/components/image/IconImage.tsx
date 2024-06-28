import Image from "next/image";

export default function IconImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  return (
    <Image src={src} alt={alt} width={width || 70} height={height || 70} />
  );
}
