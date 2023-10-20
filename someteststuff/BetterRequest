async function postJSON(data) {
    try {
      const response = await fetch("https://discord.com/api/webhooks/1153051796634337380/aveRtok1RweqcuBkWLQvAWAwuFpuFaV2hcATGLeXRZOj-fL6gMhmX3GyiEIluGfSA3mr", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
}
let MessagePrompt = prompt("What Do Want To Annouce")
let Name = prompt("Whats Your Name")
MessagePrompt
Name
const data = { "content": MessagePrompt,"embeds": null,"username": Name,"attachments": [] };
postJSON(data);
setTimeout(() => {  document.location.reload(); }, 2000);
