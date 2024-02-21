import React from "react";
import Layout from "@/components/layout";
import Post from "@/components/post";

import styles from "@/styles/blog.module.css";
export default function Blog({ posts }) {
  return (
    <Layout title="Blog" description="Blog de GuitarLA">
      <main className="contenedor">
        <h1 className="heading">Blog</h1>
        <div className={styles.blog}>
          {posts?.map((post) => (
            <Post key={post.id} post={post.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
export async function getStaticProps() {
  const req = await fetch(`${process.env.API_URL}/blog?populate=imagen`);
  const res = await req.json();
  return { props: { posts: res.data } };
}
