# stop-youtube-scroll-wheel-volume
Stop YouTube's idiotic scroll wheel mouse behavior


Step 1: 
Create new bookmark
- For URL, use:

`javascript:(function()%7Bfunction%20freshNode(oldElement)%20%7B%0Avar%20newElement%20%3D%20oldElement.cloneNode(true)%3B%0AoldElement.parentNode.replaceChild(newElement%2C%20oldElement)%3B%0A%7D%0A%0Adocument.querySelectorAll('video').forEach(element%20%3D%3E%20%7B%0A%20%20freshNode(element)%3B%0A%7D)%3B%7D)()%3B`

 - When going to YouTube, you can just click the bookmark.
 - Voila!
