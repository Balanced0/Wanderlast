import DestinationCard from "@/components/DestinationCard";


const DestinationPage = async () => {
    const result = await fetch("http://localhost:5000/destination");
    const destinations = await result.json();
    console.log(destinations);
    return (
        <div className="max-w-7xl mx-auto">
            <h1>All destinations</h1>


            <div className="grid grid-cols-4 gap-5">
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination={destination}/>)
                }

            </div>

        </div>
    );
};

export default DestinationPage;