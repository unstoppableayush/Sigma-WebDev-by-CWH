import Image from "next/image";

export default function Home() {
  return (
   <div className="size-80  bg-rose-300">
    I am Home

    <Image className="object-contain " height={500} width={500}  src="https://www.simplilearn.com/ice9/free_resources_article_thumb/html_image_slider.jpg" alt="" />
   </div>
  );
}
