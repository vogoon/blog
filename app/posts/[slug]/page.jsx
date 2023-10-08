import GhostContentAPI from "@tryghost/content-api"

const api = new GhostContentAPI({

    url: `${process.env.HOST}`,
  
    key: process.env.API_AUTH_KEY,
  
    version: "v5.0"
  
  });
  

export async function getPost(slug){

    return await api.posts.read({

        slug: slug

    })


}


const  postPage = async ({params : {slug}}) => {

const post = await getPost(slug);

  return (
    <div>
        
        <h1 className="text-4xl">{post.title}</h1>
        
        <div className="mt-5" dangerouslySetInnerHTML={{__html : post.html}}>

        </div>
        
        
        
        </div>
  )
}

export default postPage