import { useEffect, useState } from "react"
import { db } from "../config/firebase"
import { getDocs, collection, doc } from "firebase/firestore"
export const Movies = () => {
    const [data1, setData1] = useState([])
    const [movieList, setMovieList] = useState(null)
    const movieCollection = collection(db, "Movies") //Reference of collection
    useEffect(() => {

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
        <>

            <h1 style={{ textAlign: "center" }}>Welcome to movies</h1>
            <div className="toMoveMiddle>">
                <div className="container1">
                    <div className="elementContainer">

                        <div>

                            <img src="">
                            </img>
                            <button> <span></span> Watch Now</button>
                            <button> </button>
                        </div>


                        <div className="dates">
                            <h3>2023</h3>
                            <h3>2:25:56</h3>
                            <h3>180 Languages</h3>
                        </div>

                    </div>
                    <div className="elementContainer">

                        <div>
                            <img src="">
                            </img>
                            <button> <span></span> Watch Now</button>
                            <button> </button>
                        </div>


                        <div className="dates">
                            <h3>2023</h3>
                            <h3>2:25:56</h3>
                            <h3>180 Languages</h3>
                        </div>

                    </div>
                    <div className="elementContainer">

                        <div>
                            <img src="">
                            </img>
                            <button> <span></span> Watch Now</button>
                            <button> </button>
                        </div>


                        <div className="dates">
                            <h3>2023</h3>
                            <h3>2:25:56</h3>
                            <h3>180 Languages</h3>
                        </div>

                    </div>

                    <div className="elementContainer">

                        <div>
                            <img src="">
                            </img>
                            <button> <span></span> Watch Now</button>
                            <button> </button>
                        </div>


                        <div className="dates">
                            <h3>2023</h3>
                            <h3>2:25:56</h3>
                            <h3>180 Languages</h3>
                        </div>

                    </div>

                </div>


            </div>


        </>

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

//                         <img src="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg">
//                             <button><span></span> Watch now</button>
//                             <button></button>
//                         </img>
//                         <div className="dates">


//                         </div>


//                     </div>
