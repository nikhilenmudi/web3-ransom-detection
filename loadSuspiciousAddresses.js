const fs = require("fs");

function loadSuspiciousAddresses() {
    const data = fs.readFileSync("suspiciousAddresses.json", "utf8");
    const parsedData = JSON.parse(data);
    return parsedData.addresses;
}

const suspiciousAddresses = loadSuspiciousAddresses();
console.log("Loaded Suspicious Addresses:", suspiciousAddresses);

module.exports = suspiciousAddresses;
