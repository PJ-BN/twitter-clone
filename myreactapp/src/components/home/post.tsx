import axios from "axios";
import Cookies from "js-cookie";

// Define the shape of a tweet object
interface Tweet {
  date: Date | null;
  content: string | null;
  user: string | undefined;
}

// Define the Post component that sends a tweet to the server
const Post = (tweet: any) => {
  // Convert the tweet id to a Date object
  const date = new Date(tweet['id']);

  // Create a tweet object with the necessary data
  const data: Tweet = {
    date: date,
    content: tweet['content'],
    user: Cookies.get("username") // Get the username from the cookies
  };

  // Log the tweet data for debugging purposes
  console.log(data);

  // Send a POST request to the server with the tweet data
  try {
    axios.post('/api/tweet/', data)
      .then(response => {
        // Log the server response for debugging purposes
        console.log(response.data);
      });

  } catch (error) {
    // Log an error message if the request fails
    console.log('Error!');
  }
}

// Export the Post component as the default export
export default Post;