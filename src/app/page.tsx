import variables from "../app/styles/colors.module.scss";
import HeroBanner from "./components/HeroBanner/hero";

export default async function Home() {
  const data = await fetch("http://localhost:1337/api/homepages");
  const posts = await data.json();

  console.log(posts.data);
  return (
    <>
      <HeroBanner />
      <ul>
        {posts?.data.map((post: any, index: number) => (
          <li style={{ color: variables.primaryColor }} key={index}>
            {post.attributes.Title}
          </li>
        ))}
      </ul>
    </>
  );
}
