import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa6";
import { Button } from "@heroui/react";
import { EditModal } from "@/components/EditModal";
import { DeleteAlert } from "@/components/DeleteAlert";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/destination/${id}`);
  const destination = await res.json();
  const { imageUrl, price, destinationName, duration, country, description } =
    destination;
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-end gap-3 items-center">
        <EditModal destination={destination}></EditModal>
        <DeleteAlert destination={destination}></DeleteAlert>
      </div>
      <Image
        className="w-full h-100 object-cover"
        alt={destinationName}
        src={imageUrl}
        width={500}
        height={800}
      ></Image>
      <div className="p-2">
        <div className="flex items-center gap-1">
          <LuMapPin /> <span>{country}</span>
        </div>
        <div className="flex justify-between">
          <div>
            <div>
              <h2 className="text-xl font-bold">{destinationName}</h2>
            </div>
            <div className="flex gap-1 items-center">
              <FaRegCalendar /> {duration}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold">$ {price}</h3>
          </div>
        </div>
        <h1 className="text-2xl font-bold mt-10">Overview</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
