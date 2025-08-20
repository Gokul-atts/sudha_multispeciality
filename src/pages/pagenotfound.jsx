import Image from "next/image";
import Link from "next/link";
import NotFoundImage from "../assets/home/pagenotfound.png"; 

export default function NotFoundPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#F4F8FC] text-center px-4">
      {/* Illustration */}
      <div className="relative max-w-md w-full mb-8">
        <Image
          src={NotFoundImage}
          alt="404 Not Found"
          layout="responsive"
          width={700}
          height={500}
          className="mx-auto"
        />
      </div>

      {/* 404 Text */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Oops, Page Not Found
      </h1>
      <p className="text-md text-gray-500 mb-6">
        Whoops.. Looks like something went wrong!
      </p>

      {/* Button */}
      <Link href="/">
        <button className="bg-[#2B3990] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#1f2e6e] transition flex items-center gap-2">
          Back To Home
          <span className="text-lg">↗</span>
        </button>
      </Link>
    </section>
  );
}
