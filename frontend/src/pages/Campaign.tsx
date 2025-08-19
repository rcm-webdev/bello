import { useState, type FormEvent } from "react";

// TypeScript interfaces
interface CampaignVariant {
  id?: string;
  content: string;
  title?: string;
}

interface CampaignResponse {
  campaign: {
    variants: CampaignVariant[];
  };
}

const Campaign = () => {
    const [goal, setGoal] = useState<string>("");
    const [variants, setVariants] = useState<CampaignVariant[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
  
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      if (!goal.trim()) {
        setError("Please enter a campaign goal");
        return;
      }

      setIsLoading(true);
      setError("");
      
      try {
        const res = await fetch("http://localhost:2121/campaigns", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ goal: goal.trim() })
        });
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const data: CampaignResponse = await res.json();
        setVariants(data.campaign.variants);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to generate campaign variants");
      } finally {
        setIsLoading(false);
      }
    };

    return (
        <div className="min-h-screen w-screen top-0 bg-[#6C87C2]/30 bg-[radial-gradient(#ffffff33_1px,#ffff_1px)] bg-[size:20px_20px]">
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl font-chillax mb-8 text-gray-800 font-bold">
                            Create Your Campaign
                        </h1>
                        <p className="text-lg mb-8 text-gray-600 font-synonym">
                        Describe what you want to promote — a sale, new product, or announcement.
                        </p>
                        
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="form-control flex flex-col items-center space-y-4">
                                        <label className="label">
                                            <span className="label-text text-lg font-chillax">Campaign Goal</span>
                                        </label>
                                        <textarea
                                            className="textarea textarea-bordered textarea-lg"
                                            value={goal}
                                            onChange={(e) => setGoal(e.target.value)}
                                            placeholder="Promote summer sandals, 20% off."
                                            rows={4}
                                            disabled={isLoading}
                                        />
                                    </div>
                                    
                                    {error && (
                                        <div className="alert alert-error">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>{error}</span>
                                        </div>
                                    )}
                                    
                                    <div className="form-control">
                                        <button 
                                            type="submit" 
                                            className={`btn btn-primary btn-lg ${isLoading ? 'loading' : ''}`}
                                            disabled={isLoading || !goal.trim()}
                                        >
                                            {isLoading ? 'Generating...' : 'Generate Campaign Variants'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {variants.length > 0 && (
                            <div className="mt-8">
                                <div className="card bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title text-2xl mb-6 justify-center">
                                            Generated Campaign Variants
                                        </h2>
                                        <div className="grid gap-4">
                                            {variants.map((variant: CampaignVariant, index: number) => (
                                                <div key={index} className="card bg-base-200 shadow-sm">
                                                    <div className="card-body p-4">
                                                        <div className="flex items-start gap-3">
                                                            <div className="badge badge-primary badge-lg">
                                                                {index + 1}
                                                            </div>
                                                            <div className="flex-1">
                                                                {variant.title && (
                                                                    <h3 className="font-semibold text-lg mb-2">
                                                                        {variant.title}
                                                                    </h3>
                                                                )}
                                                                <p className="text-base-content/80">
                                                                    {typeof variant === 'string' ? variant : variant.content}
                                                                </p>
                                                            </div>
                                                            <button className="btn btn-sm btn-ghost btn-square">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Campaign;