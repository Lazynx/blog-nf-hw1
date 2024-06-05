import Link from "next/link";
import data from "../../../../public/data.json";
import Card from "@/components/ui/Card";

export default function Page({ params }) {
  const blogId = parseInt(params.blogId); 
  const blogData = data[blogId - 1];

  return (
    <div className="flex justify-center py-10 extra-height">
      <div className="max-w-lg w-full">
        <Card key={blogId} card={blogData} showLink={false} />
      </div>
    </div>
  )
}
