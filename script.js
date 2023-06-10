function shortenUrl() {
  var originalUrl = document.getElementById("originalUrl").value;
  var shortUrl = "";

  // Generate a random string for the short URL
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 6; i++) {
    shortUrl += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  // Create a shortened URL using the random string
  var domain = "https://example.com/";
  var shortenedUrl = domain + shortUrl;

  // Display the shortened URL
  document.getElementById("shortUrl").innerHTML =
    "Shortened URL: <a href='" + shortenedUrl + "' target='_blank'>" + shortenedUrl + "</a>";
}
