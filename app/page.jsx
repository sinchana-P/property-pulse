// Any component that's a Page, its better to have a Page at the end.
// Each page is a component, these r actually rendered on the server by default.

const HomePage = () => {
    return ( 
        <div className="text-2xl">
            Home Page
        </div>
    );
}
 
export default HomePage;