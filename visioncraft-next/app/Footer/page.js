const Footer = () => (
    <footer className="bg-yellow-100 text-gray py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold">Join our newsletter</h3>
            <p className="mt-2 text-sm">
              Get the latest tips, tutorials, and exclusive deals straight to your inbox.
            </p>
            <form className="mt-4 flex flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gray-900 hover:bg-blue-800 rounded-md text-white"
              >
                SUBSCRIBE
              </button>
              <p className="text-xs mt-2">
                Read our <a href="#" className="text-gray-900">privacy policy</a>.
              </p>
            </form>
          </div>
          <div>
            <h3 className="text-lg font-bold">Connect with us</h3>
            <div className="mt-4 flex space-x-4">
              {/* Add your social media icons here */}
              <a href="#" className="text-gray hover:text-blue-600">LinkedIn</a>
              <a href="#" className="text-gray hover:text-blue-600">Twitter</a>
              <a href="#" className="text-gray hover:text-blue-600">Instagram</a>
              <a href="#" className="text-gray hover:text-blue-600">Facebook</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray hover:text-blue-600">Services</a></li>
              <li><a href="#" className="text-gray hover:text-blue-600">About</a></li>
              <li><a href="#" className="text-gray hover:text-blue-600">Blog</a></li>
              <li><a href="#" className="text-gray hover:text-blue-600">Contact</a></li>
              <li><a href="#" className="text-gray hover:text-blue-600">Sign up</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; 2024 Dileepa Rukshan. All rights reserved.
          <div className="text-xs mt-2">
            Made in Next js & Tailwind css
          </div>
        </div>
      </div>
    </footer>
  );
  
  export default Footer;
  