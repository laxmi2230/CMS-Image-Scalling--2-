import React, {useState,useEffect} from 'react'


const query = `
{
    recipes(id: "GN5KX05Q7zVHZWwPK3Qu7"){
      names
      featuredImage{
        title
        url(transform: {cornerRadius: 250
            
        })
        
      }
      images{
        title
        url(transform: {cornerRadius: 250
            height: 250
        })
      }
      images1{
        title
        url(transform: {cornerRadius: 250
            height: 350
        })
      }
      images2{
        title
        url(transform: {cornerRadius: 50
            height: 250
        })
      }
      images3{
        title
        url(transform: {cornerRadius: 250 
            height: 300
        })
      }
      description
    }
  }
`
    


function Post(){
    

    const[data,setData]= useState(null);

    useEffect(() => {
        window.fetch(`https://graphql.contentful.com/content/v1/spaces/s87v1z2gp7ms/?access_token=YtKcSbZw8EQ87WVdJHqM_b4tzRAtSmKAN5f1NRLWh9A`,{
            headers: {
                'Content-Type': 'application/json',
            },
            method:'POST',
            body: JSON.stringify({query}),
            })
            .then((response) => response.json())
           .then(json => setData(json.data));
        },[]);

        if(!data) {
            return <div>
                Loading
            </div>;
        }

        return (
            <div className='post'>
            <h2 className='title'>{data.recipes.names}</h2>
            <img className='featuredImage' src = {data.recipes.featuredImage.url}  alt={data.recipes.featuredImage.url} />
            <br/>
            <img className='featuredImage'  src = {data.recipes.images.url}  alt={data.recipes.images.url} />
            <br />
            <img className='featuredImage' src = {data.recipes.images1.url}  alt={data.recipes.images1.url} />
            <br />
            <img className='featuredImage'  src = {data.recipes.images2.url}  alt={data.recipes.images2.url} />
            <br />
            <img className='featuredImage' src = {data.recipes.images3.url}  alt={data.recipes.images3.url} />
            <br /> 
            <h1>{data.recipes.description}</h1>
         </div>
    )
}



export default Post
