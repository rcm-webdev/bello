
// Create Campaign
const createCampaign = async (req, res) => {
    try {
        const {goal} = req.body;
        if(!goal) {
            return res.status(400).json({message: 'Goal is required'});
        }
        //TODO: replace with LLM
        const mockVariants = [
            { text: `🔥 Big news: ${goal}` },
            { text: `✨ Don’t miss out: ${goal}` },
            { text: `📢 Special offer: ${goal}` }
          ];
        
          res.json({
            campaign: {
              id: Date.now(),
              goal,
              variants: mockVariants
            }
          });
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    createCampaign
}