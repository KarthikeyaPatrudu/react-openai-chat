import fetch from "node-fetch";

export const chatCompletion = async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct", 
        messages: [
          { role: "user", content: prompt }
        ],
        temperature: 0.7,       
        max_tokens: 500         
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({
        message: errorData.message || "OpenRouter API error"
      });
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || "No response from model.";

    res.status(200).json({ text });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
