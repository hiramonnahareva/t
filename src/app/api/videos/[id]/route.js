import videos from "@/app/data/videos";
import { redirect } from "next/navigation";

export async function GET(_request, { params }) {
    const videoId = params.id;

    if (parseInt(videoId) > videos.length) {
        redirect("/api/videos");
    } 

    const video = videos.find(
        (video) => video.id === parseInt(videoId)
    ); 

    return Response.json(video);
}

export async function PATCH(request, { params }) {
    const video = await request.json();
    const videoId = params.id;
    const videoIndex = videos.findIndex(
        (video) => video.id === parseInt(videoId)
    );  
    videos[videoIndex].title = video.title;
    videos[videoIndex].description = video.description;

    return Response.json(videos[videoIndex]);
} 

export async function DELETE(request, { params }) {
    const videoId = params.id;
    const videoIndex = videos.findIndex(
        (video) => video.id === parseInt(videoId)
    );
    const videoToDelete = videos[videoIndex];
    videos.splice(videoIndex, 1);

    return Response.json(videoToDelete);
} 