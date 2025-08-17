// A useful component when your product is challenging the status quo.
// Highlight the current pain points (left) and how your product is solving them (right)

import { CheckIcon, XIcon } from "lucide-react";

// Try to match the lines from left to right, so the user can easily compare the two columns
const Compare = () => {
    return (
      <section className="bg-base-100">
        <div className="max-w-5xl mx-auto px-8 py-16 md:py-32 ">
          <h2 className="text-center font-chillax text-3xl md:text-5xl tracking-tight mb-12 md:mb-20">
            Tired of guessing at push notification copy?
          </h2>
  
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-12 font-synonym">
            <div className="bg-error/20 text-error p-8 md:p-12 rounded-lg w-full ">
              <h3 className="font-bold text-lg mb-4">
                Without Bello
              </h3>
  
              <ul className="list-disc list-inside space-y-1.5 ">
                {/* Pains the user is experiencing by not using your product */}
                {[
                  "Spend hours guessing at push notification copy",
                  "Recreate similar campaigns over and over",
                  "Waste time and money on campaigns that don't perform",
                 
                ].map((item, index) => (
                  <li key={index} className="flex gap-2 items-center">
                    <div className="flex items-center justify-center bg-error/30 rounded-full p-2">
                   <XIcon className="w-4 h-4 shrink-0"/>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
  
            <div className="bg-success/20 text-success p-8 md:p-12 rounded-lg w-full font-synonym">
              <h3 className="font-bold text-lg mb-4">
                With Bello
              </h3>
  
              <ul className="list-disc list-inside space-y-1.5 ">
                {/* Features of your product fixing the pain (try to match each with/withot lines) */}
                {[
                  "Spend less time guessing at push notification copy",
                  "Generate on-brand campaign copy fast",
                  "Run A/B testing to pick the best performing copy",
                 
                  
                ].map((item, index) => (
                  <li key={index} className="flex gap-2 items-center">
                    <div className="flex items-center justify-center bg-success/30 rounded-full p-2">
                   <CheckIcon className="w-4 h-4 shrink-0"/>
                    </div>
  
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Compare;