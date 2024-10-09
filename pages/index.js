import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Store</h1>
          <p className="text-gray-600 mb-6">
            Explore our wide range of products. Click below to view all products.
          </p>
          <Link href="/products" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-500 transition duration-300 ease-in-out">
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
}
