const Footer = (props) => {
  return (
    <div className="footer flex flex-col bg-gray-800 text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 pt-4 md:px-8 md:pt-8">
        <div className="item-footer flex flex-col max-sm:items-center">
          <span className="text-sm font-medium">Use eventbright</span>
          <ul className="text-xs py-4">
            <li className="hover:underline cursor-pointer hover:text-gray-400">Create Events</li>
            <li className="hover:underline cursor-pointer hover:text-gray-400">Pricing</li>
            <li className="hover:underline cursor-pointer hover:text-gray-400">
              Event Marketing Platform
            </li>
            <li className="hover:underline cursor-pointer hover:text-gray-400">
              Eventbright Mobile Ticket APP
            </li>
            <li className="hover:underline cursor-pointer hover:text-gray-400">
              Eventbright Check-In App
            </li>
            <li className="hover:underline cursor-pointer hover:text-gray-400">
              Eventbright App Marketplace
            </li>
            <li className="hover:underline cursor-pointer hover:text-gray-400">
              Content Standards
            </li>
            <li className="hover:underline cursor-pointer hover:text-gray-400">FAQs</li>
          </ul>
        </div>
        <div className="item-footer flex flex-col max-sm:items-center">
          <span className="text-sm font-medium">Plan Events</span>
          <ul className="text-xs py-4">
            <li className="hover:underline cursor-pointer hover:text-gray-400">
              Sell Tickets Online
            </li>
            <li className="hover:underline cursor-pointer hover:text-gray-400">Event Planning</li>
            <li className="hover:underline cursor-pointer hover:text-gray-400">
              Sell Concert Tickets Online
            </li>
            <li className="hover:underline cursor-pointer hover:text-gray-400">
              Event Payment System
            </li>
            <li className="hover:underline cursor-pointer hover:text-gray-400">
              Solutions for Proffesional
            </li>
            <li className="hover:underline cursor-pointer hover:text-gray-400">Services</li>
            <li className="hover:underline cursor-pointer hover:text-gray-400">
              Event Management Software
            </li>
          </ul>
        </div>
        <div className="item-footer flex flex-col max-sm:items-center">
          <span className="text-sm font-medium">Find Events</span>
          <ul className="text-xs py-4">
            <li className="hover:underline cursor-pointer hover:text-gray-400">
              Browse Online Events
            </li>
            <li className="hover:underline cursor-pointer hover:text-gray-400">
              Get the Eventbright App
            </li>
          </ul>
        </div>
        <div className="item-footer flex flex-col max-sm:items-center">
          <span className="text-sm font-medium">Connect With Us</span>
          <ul className="text-xs py-4">
            <li className="hover:underline cursor-pointer hover:text-gray-400">Contact Support</li>
            <li className="hover:underline cursor-pointer hover:text-gray-400">Contact Sales</li>
            <li className="hover:underline cursor-pointer hover:text-gray-400">Twitter</li>
            <li className="hover:underline cursor-pointer hover:text-gray-400">Facebook</li>
            <li className="hover:underline cursor-pointer hover:text-gray-400">Instagram</li>
          </ul>
        </div>
      </div>
      <div className="flex text-xs flex-col items-center gap-4 md:flex-row justify-between px-4 py-4 md:px-8 md:py-4">
        <span className="">@eventbright 2023</span>
        <div className="flex list-disc max-sm:flex-wrap justify-center gap-2">
          <span className="hover:underline cursor-pointer hover:text-gray-400">How it Works</span>
          <span className="hover:underline cursor-pointer hover:text-gray-400">Pricing</span>
          <span className="hover:underline cursor-pointer hover:text-gray-400">
            Contact Support
          </span>
          <span className="hover:underline cursor-pointer hover:text-gray-400">Contact Sales</span>
          <span className="hover:underline cursor-pointer hover:text-gray-400">About</span>
          <span className="hover:underline cursor-pointer hover:text-gray-400">Blog</span>
          <span className="hover:underline cursor-pointer hover:text-gray-400">Help</span>
          <span className="hover:underline cursor-pointer hover:text-gray-400">Careers</span>
          <span className="hover:underline cursor-pointer hover:text-gray-400">Press</span>
          <span className="hover:underline cursor-pointer hover:text-gray-400">Impact</span>
          <span className="hover:underline cursor-pointer hover:text-gray-400">Terms</span>
          <span className="hover:underline cursor-pointer hover:text-gray-400">Privacy</span>
          <span className="hover:underline cursor-pointer hover:text-gray-400">
            Do Not Sell or Share My Personal Information
          </span>
        </div>
        <span className="text-sm font-medium">Indonesia</span>
      </div>
    </div>
  );
};

export default Footer;
