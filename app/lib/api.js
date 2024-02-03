export const sendContactForm = async (data) => {
  try {
    const response = await fetch('/api/contact/send/', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
