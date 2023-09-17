const myRequest = new Request("https://discord.com/api/webhooks/1153051796634337380/aveRtok1RweqcuBkWLQvAWAwuFpuFaV2hcATGLeXRZOj-fL6gMhmX3GyiEIluGfSA3mr", 
{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: '{"content": "epe","embeds": null, "attachments": []}',
}
    );

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

fetch(myRequest)
sleep(200).then(() => { document.location.reload(myRequest); });
