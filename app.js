const express = require("express");
const qrCode = require("qrcode");

const app = express();
const PORT = 3000;

app.get("/qrcode", (req, res) => {
  // change to any url
  const url = "https://www.fiverr.com/s/o4QLQ8";
  // convert url > dataURL
  qrCode.toDataURL(url, (err, qr) => {
    if (err) {
      // if there is an error
      res.status(500).send("Internal server error");
    } else {
      // if there is no error
      res.send(
        `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>My Service</title>
            </head>
            <body>
                <h2>ERC20/BEP20 Token Creation and Add Liquidity</h2>

                <h2>Contact me for custom token build</h2>
                <h3>Telegram: @autoboyt </h3>
                
                <img src="${qr}" alt="CryptoCurrency" />
                <p>Scan the QR Code to buy the service</p>
            </body>
            </html>
                `
      );
    }
  });
});

// start the server and listen the request
app.listen(PORT, () => {
  console.log("Server is running !!");
});
