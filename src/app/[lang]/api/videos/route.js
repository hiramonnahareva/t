
import videos from "@/app/data/videos";

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query"); 

    if (query) {
        const filteredvideos = videos.filter((video) =>
            video.text.toLocaleLowerCase().includes(query)
        );
        return Response.json(filteredvideos);
    } 

    return Response.json(videos);
}    

export async function POST(request) { 

    const video = await request.json(); 
    const newvideo = {
       id: videos.length + 1,
       title: video.title,
       description: video.description,
       thumbnail: video.thumbnail,
       channelTitle: video.channelTitle,
       publishTime: video.publishTime,
       videoId: video.videoId
    };   
    videos.push(newvideo);

    return new Response(JSON.stringify(newvideo), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    });
}