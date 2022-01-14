# Stop YouTube's idiotic scroll wheel volume control

When using YouTube and your mouse hovers over a video, the stupid volume goes up or down even if you're just scrolling down the page to see comments.
If you donate, I will look into making a Chrome Plugin for this.


[Click Here To Donate](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=WXQKYYKPHWXHS)


Step 1: 
Create new bookmark
- For URL, use:

`javascript:(function()%7Bfunction%20freshNode(oldElement)%20%7B%0Avar%20newElement%20%3D%20oldElement.cloneNode(true)%3B%0AoldElement.parentNode.replaceChild(newElement%2C%20oldElement)%3B%0A%7D%0A%0Adocument.querySelectorAll('video').forEach(element%20%3D%3E%20%7B%0A%20%20freshNode(element)%3B%0A%7D)%3B%7D)()%3B`

 - When going to YouTube, you can just click the bookmark.
 - Voila!


# If this was helpful to you, please buy me a beer on PayPal: [Click Here](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=WXQKYYKPHWXHS)
