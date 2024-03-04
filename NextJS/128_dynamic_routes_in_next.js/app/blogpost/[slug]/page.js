export default function Page({ params }){
    //fetch your blog post by its slug

    // throw new error("error hai")
    
    let langugae = ["pyhton" , "javascript" , "java" , "cpp" , "cs"]
    if(langugae.includes(params.slug)){
        return <div>My Post : {params.slug}</div>
    }
    else{
        return <div>Post not found</div>
    }
    return <div>My Post: {params.slug}</div>
}