import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className=" h-screen flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-white text-5xl font-extrabold mb-4 animate-pulse">
            Welcome to Galgotias Tech Conclave Launch
          </h1>
          <p className="text-white text-lg mb-8 opacity-90">
            Think you know about GTC? 🤔
          </p>
          <Link href="/quiz">
            <button className="px-6 py-3 text-black bg-white font-semibold rounded-lg shadow-lg hover:bg-orange-500 hover:text-white transition duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-orange-300">
              Enter the Game
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
