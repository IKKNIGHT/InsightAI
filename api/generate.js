export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { essayText } = req.body;

    if (!essayText) {
        return res.status(400).json({ error: 'Essay text is required' });
    }

    try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`
            },
            body: JSON.stringify({
                model: 'deepseek/deepseek-chat-v3-0324:free',
                messages: [
                    {
                        role: 'system',
                        content: 'You are an essay grader. Grade the essay and return feedback and a percentage grade out of 100%.'
                    },
                    {
                        role: 'user',
                        content: essayText
                    }
                ]
            })
        });

        const data = await response.json();

        const message = data.choices?.[0]?.message?.content;
        res.status(200).json({ feedback: message });
    } catch (error) {
        console.error('API error:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}
