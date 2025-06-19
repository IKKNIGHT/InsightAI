// api/generate-feedback.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { essay } = req.body;
    if (!essay) {
        return res.status(400).json({ error: 'Essay content is required' });
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        },
        body: JSON.stringify({
            model: 'deepseek/deepseek-chat-v3-0324:free',
            messages: [{ role: 'user', content: `Grade and give feedback on this essay (BE SURE TO PUT THE GRADE PERCENTAGE FIRST FOR EXAMPLE: 43%  {the essay}) :\n\n${essay}` }]
        }),
    });

    const data = await response.json();
    res.status(200).json({ feedback: data.choices?.[0]?.message?.content ?? 'No feedback received.' });
}
