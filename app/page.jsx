import GhostContentAPI from "@tryghost/content-api";
import Link from "next/link";
import Image from 'next/image'

const api = new GhostContentAPI({

  url: `${process.env.HOST}`,

  key: process.env.API_AUTH_KEY,

  version: "v5.0"

});


export async function getPosts() {

  return await api.posts

    .browse({

      limit: "all"

    })
    .catch(err => {

      console.error(err);
      
    });
}

export default async function Home() {

  const posts = await getPosts()

  return (
    <>

      <h1>Home</h1>

      <ul>

        {posts.map((post, index) => ( 
        
          <li key={index}>
          
          <h2>{post.title}</h2>

          <div>

          <Image
          src={post.feature_image}
          width={640}
          height={400}
          alt="Picture of the author"
          placeholder="blur"
          blurDataURL={post.feature_image}
        />


          </div>
          
          <div className="mt-5" dangerouslySetInnerHTML={{__html: post.html }}></div>

          <Link href={`/posts/${post.slug}`}>Read More</Link>

          </li> 
          
          
          ))}

      </ul>


    </>
  )
}
