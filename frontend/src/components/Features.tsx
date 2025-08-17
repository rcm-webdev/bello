import Collaborate from '../assets/images/Affiliate-Program.svg';
import PlanTogether from '../assets/images/Summer-Collection n.3.svg';
import CreateTogether from '../assets/images/Painting.svg';

const Features = () => {
    return(
        <div className="py-20 bg-base-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-chillax mb-4">
                    How it works
                    </h2>
                    <p className="text-xl text-base-content/70 max-w-3xl mx-auto font-synonym">
                    Bello helps merchants generate, evaluate, and optimize in app marketing campaigns
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Feature 1 - Ice Cream Delights */}
                    <div className="text-center">
                        <div className="relative flex justify-center mb-8 overflow-hidden">
                            {/* Background compositional elements */}
                            <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-pink-200 rounded-full opacity-30 translate-x-12 md:-translate-x-4 lg:-translate-x-6 translate-y-1 z-0"></div>
                            
                            
                            <img 
                                src={CreateTogether} 
                                alt="Generate" 
                                className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain relative z-10"
                            />
                        </div>
                        <div className="bg-base-200 rounded-2xl p-8 relative z-20">
                            <h3 className="text-2xl font-chillax mb-4">Generate</h3>
                            <p className="text-base-content/70 leading-relaxed font-synonym">
                            Set a goal and watch Bello write on-brand campaign copy fast.
                            </p>
                        </div>
                    </div>
                    
                    {/* Feature 2 - Loving Atmosphere */}
                    <div className="text-center">
                        <div className="relative flex justify-center mb-8 overflow-hidden">
                            {/* Background compositional elements */}
                            <div className="absolute inset-0 w-60 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[28rem] bg-red-200 opacity-30 rotate-12 rounded-3xl translate-y-10 translate-x-14 md:translate-x-24 z-0"></div>
                          
                            
                            <img 
                                src={PlanTogether} 
                                alt="Evaluate" 
                                className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain relative z-10"
                            />
                        </div>
                        <div className="bg-base-200 rounded-2xl p-8 relative z-20">
                            <h3 className="text-2xl font-chillax mb-4">Evaluate</h3>
                            <p className="text-base-content/70 leading-relaxed font-synonym">
                            Run A/B testing to pick the best performing copy.
                            </p>
                        </div>
                    </div>
                    
                    {/* Feature 3 - Reading Corner */}
                    <div className="text-center">
                        <div className="relative flex justify-center mb-8 overflow-hidden">
                            {/* Background compositional elements */}
                            <div className="absolute inset-0 w-72 h-64 md:w-96 md:h-72 lg:w-[28rem] lg:h-80 bg-indigo-200 opacity-30 transform rotate-45 rounded-xl translate-y-32 translate-x-12 md:translate-y-48 md:-translate-x-12 z-0"></div>
                           
                            
                            <img 
                                src={Collaborate} 
                                alt="Optimize" 
                                className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain relative z-10"
                            />
                        </div>
                        <div className="bg-base-200 rounded-2xl p-8 relative z-20">
                            <h3 className="text-2xl font-chillax mb-4">Optimize</h3>
                            <p className="text-base-content/70 leading-relaxed font-synonym">
                            Optimize your campaign for maximum ROI.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;