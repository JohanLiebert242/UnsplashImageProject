import { useGlobalContext } from "./GlobalContext";

function SearchForm() {
    const {setSearchTerm} = useGlobalContext();


    const handleSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target.search.value; // search là name của input
        setSearchTerm(searchValue);
    };

    return (
        <>
            <h1 className="title">Unsplash Image</h1>
            <form onSubmit={handleSubmit} className="search-form">
                <input
                    className="form-input search-input"
                    type="text"
                    placeholder="cat"
                    name="search"
                />
                <button className="btn ">Search</button>
            </form>
        </>
    );
}

export default SearchForm;
