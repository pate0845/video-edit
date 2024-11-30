import Image from "next/image"; 

const Hero = () => (
    <section
    className="relative bg-yellow-100 min-h-screen flex items-center"
    style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    <div className="absolute inset-0 bg-yellow-100 opacity-90"></div>
    <div className="relative z-10 flex flex-wrap items-center justify-center w-full h-full px-6 max-w-7xl mx-auto">
      {/* Left Side: Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-gray-900">
          YOUR CONTENT OUR CRAFT – LET'S GO VIRAL!
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-gray-900">
          Eye-catching edits tailored for influencers who want to shine on every platform. We help you reach a wider audience while saving precious time—leave the editing to us and focus on creating amazing content!
        </p>
        <a
          href="/Contact"
          className="inline-block px-8 py-3 border border-black text-gray-900 font-semibold rounded-full transition-colors duration-300 hover:bg-gray-900 hover:text-gray"
        >
          EXPLORE SERVICES
        </a>
      </div>

      {/* Right Side: Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Image
          src="/images/g.jpg" // Corrected image path
          alt="Hero Image"
          className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
          width={400} // Reduced width
          height={300} // Reduced height
        />
      </div>
    </div>
  </section>
  
  );
  
  export default Hero;
  