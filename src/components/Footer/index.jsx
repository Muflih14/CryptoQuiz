import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white fixed bottom-0 w-full h-16 flex justify-center items-center">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-gray-500">© 2023 Cryptoquiz. All Rights Reserved.</p>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-gray-500 hover:text-gray-400">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-gray-400">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-gray-400">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

   
 
