import {useState,useEffect} from "react"
import ReactPaginate from 'react-paginate';

const Repositories =()=>{

    const [repos, setRepos] = useState([]); 

    const [loading, setLoading]= useState(false);



 const fetchRepo= ()=> {

    setLoading(true);
     fetch ("https://api.github.com/users/CollinXon/repos").then((res)=>res.json()).then((data)=>setRepos(data
 )).finally(()=>{setLoading(false)})} ;


 useEffect(() => fetchRepo(), [])


 

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage= 1;
    
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = repos.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(repos.length / itemsPerPage);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % repos.length;
      setItemOffset(newOffset);
    };

    
    
    
    return ( 

        
        
    <div>


        {loading && <h1 className="loader"></h1>}      

        <h2 >
            
        {currentItems.map((repo)=>{
        return <div className="Repos-css" key = {repo.id}>
                    
                    <a href={repo.html_url}>{repo.html_url}</a>
                </div> 
                })} 

        </h2>
        
        <ReactPaginate className="Paginate-css"
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="Previous"
                renderOnZeroPageCount={null}
            />

</div>
    ) 
};

export default Repositories