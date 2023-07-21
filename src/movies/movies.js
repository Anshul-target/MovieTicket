import { useEffect, useState } from "react"
import { db } from "../config/firebase"
import { getDocs, collection, doc } from "firebase/firestore"
export const Movies = () => {

    const [data1, setData1] = useState([])
    useEffect(() => {

        const movieCollection = collection(db, "Movies") //Reference of collection
        const getMovieList = async () => {
            try {

                const data = await getDocs(movieCollection)
                const filteredData = data.docs.map((doc) => {

                    return (
                        {
                            ...doc.data(),
                            id: doc.id
                        }
                    )
                })
                console.log(filteredData)
                setData1(filteredData)
                console.log(data1)
            }
            catch (err) {
                console.log(err)

            }

        }
        getMovieList()
    }, [])
    console.log(data1);
    return (
        <div>

            <h1 style={{ textAlign: "center" }}>Welcome to movies</h1>
            <div className="toMoveMiddle>">

                <div className="elementContainer">
                    {data1.map((obj) => {
                        const { duration, id, img, year, languages } = obj
                        return (
                            <div className="img-container" key={id}>
                                <div>
                                    <img src={img}>
                                    </img>
                                    <button></button>
                                    <button><span></span> Watch now</button>
                                </div>
                                <div className="dates">
                                    <h4> The movie: {duration}</h4>

                                    <h4>{year}</h4>
                                    <h4>Available in {languages}</h4>


                                </div>

                            </div>


                        )
                    })
                    }



                </div>





            </div>


        </div>

    )
}















//  <h1 style={{ textAlign: "center" }}>Welcome to movies</h1>
//             <div className="container1" >
//                 <h1 style={{
//                     fontSize: "1.2rem",
//                     fontWeight: "700",
//                     color: "white"
//                 }}>Oscar Movies</h1>
//                 <div className="container2" >


//                     <div className="elementContainer">
<div>
//                         <img src="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg">
//                         </img>
//                             <button></button>
//                             <button><span></span> Watch now</button>
</div>
//                         <div className="dates">


//                         </div>


//                     </div>
