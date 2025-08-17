import { Link } from "react-router";
import BetterIcon from "./BetterIcon";
import { BellRing } from "lucide-react";

const Footer = () => {
    return (
      <footer className="bg-base-200 border-t border-base-content/10">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <Link
                to="/#"
                aria-current="page"
                className="flex gap-2 justify-center md:justify-start items-center"
              >
               <BetterIcon >
                                <BellRing className="w-6 h-6"/>
                            </BetterIcon>
                <strong className="font-chillax tracking-tight text-base md:text-lg">
                  Bello
                </strong>
              </Link>
  
              <p className="mt-3 text-sm text-base-content/80 font-synonym">
                 Generate, evaluate, and optimize in app marketing campaigns.
              </p>
              <p className="mt-3 text-sm text-base-content/60">
                Copyright © {new Date().getFullYear()} - All rights reserved
              </p>
  
             
            </div>
            <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center">
              <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <div className="footer-title font-chillax text-base-content tracking-widest text-sm md:text-left mb-3">
                  LINKS
                </div>
  
                <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm font-synonym">
                  
                    <a
                      href={`mailto:support@soundex.com`}
                      target="_blank"
                      className="link link-hover"
                      aria-label="Contact Support"
                    >
                      Support
                    </a>
                  
                  <Link to="/#pricing" className="link link-hover">
                    Pricing
                  </Link>
                  <Link to="/blog" className="link link-hover">
                    Blog
                  </Link>
                  <a href="/#" target="_blank" className="link link-hover">
                    Affiliates
                  </a>
                </div>
              </div>
  
              <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <div className="footer-title font-chillax text-base-content tracking-widest text-sm md:text-left mb-3">
                  LEGAL
                </div>
  
                <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm font-synonym">
                  <Link to="/tos" className="link link-hover">
                    Terms of services
                  </Link>
                  <Link to="/privacy-policy" className="link link-hover">
                    Privacy policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;