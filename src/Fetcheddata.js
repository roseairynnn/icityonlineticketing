import React from 'react';

function Fetcheddata(props) {
    const {data} = props;
    return (
        <>
        <div className='container'>
            <h1>All Services</h1>
            {data.services.map((d) => {
                return (
                    <>
                    <div className='TrxID' key={d.TrxID}>
                        <div className='PackageName'>
                            <h2>{d.TrxID}</h2>
                            <p>{d.PackageName}</p>
                        </div>
                        <div className='ImgUrl'>
                            <img src={d.ImgUrl}/>
                        </div>
                    </div>
                    </>
                );
            })}
        </div>
        </>
    );
}
export default Fetcheddata;