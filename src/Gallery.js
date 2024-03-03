import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./GlobalContext";

const url = `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_API_KEY}`;

function Gallery() {
    const { searchTerm } = useGlobalContext();

    const response = useQuery({
        queryKey: ["images", searchTerm],
        queryFn: async () => {
            const result = await axios.get(`${url}&query=${searchTerm}`);

            return result.data;
        },
    });

    if (response.isPending) {
        return (
            <section className="image-container">
                <h4>Loading...</h4>
            </section>
        );
    }

    if (response.isError) {
        return (
            <section className="image-container">
                <h4>There was an error...</h4>
            </section>
        );
    }

    const results = response.data.results;
    if (results.length < 1) {
        return (
            <section className="image-container">
                <h4>No images found</h4>
            </section>
        );
    }

    return (
        <section className="image-container">
            {results.map((item) => (
                <img
                    className="img"
                    key={item.id}
                    src={item?.urls?.regular}
                    alt={item.alt_description}
                />
            ))}
        </section>
    );
}

export default Gallery;
