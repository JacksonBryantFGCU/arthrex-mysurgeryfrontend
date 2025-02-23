const Home = () => {
    return (
        <div className="relative bg-cover bg-center h-screen z-0 bg-black-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
                <button 
                className="mt-8 px-8 py-4 bg-[#0575d6] hover:bg-[#0463b6] text-lg font-semibold rounded-md">
                    <a href="/login">Login</a>
                </button>
            </div>
        </div>
    );
};

export default Home;
