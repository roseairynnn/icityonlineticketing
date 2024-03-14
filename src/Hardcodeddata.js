function Hardcodeddata(props) {
    const {data} = props;
    return (
        /* Display Hardcocded data without using map function*/
        <>
        <div className='container'>
            <h1>All Services</h1>
            <div className='TrxID' key={data.services[0].TrxID}>
                <div className='PackageName'>
                    <h2>{data.services[0].TrxID}</h2>
                    <p>{data.services[0].PackageName}</p>
                </div>
                <div className='ImgUrl'>
                    <img src={data.services[0].ImgUrl}/>
                </div>
            </div>
            <div className='TrxID' key={data.services[1].TrxID}>
                <div className='PackageName'>
                    <h2>{data.services[1].TrxID}</h2>
                    <p>{data.services[1].PackageName}</p>
                </div>
                <div className='ImgUrl'>
                    <img src={data.services[1].ImgUrl}/>
                </div>
            </div>
            <div className='TrxID' key={data.services[2].TrxID}>
                <div className='PackageName'>
                    <h2>{data.services[2].TrxID}</h2>
                    <p>{data.services[2].PackageName}</p>
                </div>
                <div className='ImgUrl'>
                    <img src={data.services[2].ImgUrl}/>
                </div>
            </div>
            <div className='TrxID' key={data.services[3].TrxID}>
                <div className='PackageName'>
                    <h2>{data.services[3].TrxID}</h2>
                    <p>{data.services[3].PackageName}</p>
                </div>
                <div className='ImgUrl'>
                    <img src={data.services[3].ImgUrl}/>
                </div>
            </div>
            <div className='TrxID' key={data.services[4].TrxID}>
                <div className='PackageName'>
                    <h2>{data.services[4].TrxID}</h2>
                    <p>{data.services[4].PackageName}</p>
                </div>
                <div className='ImgUrl'>
                    <img src={data.services[4].ImgUrl}/>
                </div>
            </div>
            <div className='TrxID' key={data.services[5].TrxID}>
                <div className='PackageName'>
                    <h2>{data.services[5].TrxID}</h2>
                    <p>{data.services[5].PackageName}</p>
                </div>
                <div className='ImgUrl'>
                    <img src={data.services[5].ImgUrl}/>
                </div>
            </div>
            <div className='TrxID' key={data.services[6].TrxID}>
                <div className='PackageName'>
                    <h2>{data.services[6].TrxID}</h2>
                    <p>{data.services[6].PackageName}</p>
                </div>
                <div className='ImgUrl'>
                    <img src={data.services[6].ImgUrl}/>
                </div>
            </div>
            <div className='TrxID' key={data.services[7].TrxID}>
                <div className='PackageName'>
                    <h2>{data.services[7].TrxID}</h2>
                    <p>{data.services[7].PackageName}</p>
                </div>
                <div className='ImgUrl'>
                    <img src={data.services[7].ImgUrl}/>
                </div>
            </div>  
            <div className='TrxID' key={data.services[8].TrxID}>
                <div className='PackageName'>
                    <h2>{data.services[8].TrxID}</h2>
                    <p>{data.services[8].PackageName}</p>
                </div>
                <div className='ImgUrl'>
                    <img src={data.services[8].ImgUrl}/>
                </div>
            </div>
            <div className='TrxID' key={data.services[9].TrxID}>
                <div className='PackageName'>
                    <h2>{data.services[9].TrxID}</h2>
                    <p>{data.services[9].PackageName}</p>
                </div>
                <div className='ImgUrl'>
                    <img src={data.services[9].ImgUrl}/>
                </div>
            </div>
            <div className='TrxID' key={data.services[10].TrxID}>
                <div className='PackageName'>
                    <h2>{data.services[10].TrxID}</h2>
                    <p>{data.services[10].PackageName}</p>
                </div>
                <div className='ImgUrl'>
                    <img src={data.services[10].ImgUrl}/>
                </div>
            </div> 
        </div>
        </>
    );
}
export default Hardcodeddata;