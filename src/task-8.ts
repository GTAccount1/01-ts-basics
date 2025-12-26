import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
}

const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

const fetchPosts = async (): Promise<Post[]> => {
    await delay(2000);
  const response = await axios.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
}

fetchPosts().then((posts) => {
  console.log(posts[0].title);
});

