const Heading = ({action, change, searchValue}) => {
    return(
        <>
            <h1>Pure Veg</h1>
            <p>A vegetarian paradise loaded with options to satisfy your cravings.</p>
            <div className="section flex">
                <button className="btn" onClick={action}>Most rated</button>
                <input type="text" className="searchInput" value={searchValue} placeholder="Search" onChange={change}/>
            </div>
        </>

    )
}

export default Heading;