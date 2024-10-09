import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-green-600 text-white shadow-2xl">
      <div className="container mx-auto flex justify-between items-center p-6">
        <div className="text-2xl font-bold">
          <Link href="/">Home</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
