import Link from "next/link";

export const Header = () => {
  return (
    <>
      <div className="container mx-auto p-5 h-20 flex justify-center items-center border-b ">
        <Link href={"/"}>
          <h1 className="text-2xl font-medium">Pet Health 🐶🐕</h1>
        </Link>
      </div>
    </>
  );
};
