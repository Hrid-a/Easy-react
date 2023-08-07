const Heading = ({action}) => {
    return(
        <>
            <h1>Pure Veg</h1>
            <p>A vegetarian paradise loaded with options to satisfy your cravings.</p>
            <div className="section">
                <button className="btn" onClick={action}>Most rated</button>
            </div>
        </>

    )
}

export default Heading;