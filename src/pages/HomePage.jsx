import React from "react";
import Header from "../components/Header";
import PostList from "../components/PostList";

function HomePage() {
  const testPosts = [
    {
      id: "123",
      title: "Bienvenidos",
      author: "Samir",
      publish_date: Date.now().toString(),
    },
    {
      id: "14",
      title: "Ultimo post",
      author: "Samir",
      publish_date: Date.now().toString(),
    },
  ];
  return (
    <>
      <Header />
      <main>
        <PostList posts={testPosts} />
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </>
  );
}

export default HomePage;
