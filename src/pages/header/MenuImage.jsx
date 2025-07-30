import Image from "next/image";

export default function MenuImage({ image,width,height }) {
  if (!image) return null;

  console.log("image",image)
  return (
      <div className="flex flex-col" style={{ maxWidth: `${width}px` }}>
      <div className="relative w-full rounded-md" style={{height:`${height}px`}}>
        <Image
          src={image}
          alt="SubLink Image"
          fill
          className="object-cover object-center rounded-md"
        />
      </div>
    </div>
  );
}
