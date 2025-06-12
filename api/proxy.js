export default async function handler(req, res) {
  const apiUrl = "http://shiftswift.tryasp.net" + req.url;

  try {
    const response = await fetch(apiUrl, {
      method: req.method,
      headers: {
        ...req.headers,
        host: "shiftswift.tryasp.net", // مهم
      },
      body: req.method !== "GET" ? req.body : undefined,
    });

    const data = await response.text(); // ممكن يكون JSON أو نص
    res.status(response.status).send(data);
  } catch (error) {
    console.error("Proxy Error:", error);
    res.status(500).json({ error: "Proxy request failed" });
  }
}
