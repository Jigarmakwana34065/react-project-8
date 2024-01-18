import React, { useEffect, useState } from 'react'
import './BlueBird.css'

const BlueBirdMovies = () => {

    const allBtnData = [
        {
            category: "All Movie",
        },
        {
            category: "Action",
        },
        {
            category: "Adventure",
        },
        {
            category: "Animation",
        },
        {
            category: "Comedy",
        },
        {
            category: "Crime",
        },
        {
            category: "Documentary",
        },
        {
            category: "Drama",
        },
        {
            category: "Family",
        },
        {
            category: "Fantasty",
        },
        {
            category: "History",
        },
        {
            category: "Horror",
        },
        {
            category: "Music",
        },
        {
            category: "Mystery",
        },
        {
            category: "Romance",
        },
        {
            category: "Science Fiction",
        },
        {
            category: "TV Movie",
        },
        {
            category: "Thriller",
        },
        {
            category: "War",
        },
        {
            category: "Western",
        },
    ]

    const allMovieData = [
        {
            img: '../img/hanuman.jpeg',
            category: "Action",
            tokken: "tredding"
        },
        {
            img: '../img/kgf.jpeg',
            category: "Action"
        },
        {
            img: '../img/animal.jpeg',
            category: "Action"
        },
        {
            img: '../img/lift.jpeg',
            category: "Action"
        },
        {
            img: '../img/rastan.jpeg',
            category: "Action"
        },
        {
            img: '../img/napoleon.jpeg',
            category: "Action",
            tokken: "upcoming"
        },
        {
            img: '../img/eli.jpeg',
            category: "Adventure",
            tokken: "tredding"
        },
        {
            img: '../img/bahu.jpeg',
            category: "Adventure"
        },
        {
            img: '../img/rec.jpeg',
            category: "Adventure"
        },
        {
            img: '../img/rol.jpeg',
            category: "Adventure",
            tokken: "upcoming"
        },
        {
            img: '../img/mafia.jpeg',
            category: "Adventure"
        },
        {
            img: '../img/v.jpeg',
            category: "Adventure"
        },
        {
            img: '../img/scoob.jpeg',
            category: "Animation",
            tokken: "tredding"
        },
        {
            img: '../img/dd.jpeg',
            category: "Animation"
        },
        {
            img: '../img/ded.jpeg',
            category: "Comedy"
        },
        {
            img: '../img/khiladi.jpeg',
            category: "Comedy"
        },
        {
            img: '../img/tom.jpeg',
            category: "Comedy",
            tokken: "tredding"
        },
        {
            img: '../img/diry.jpeg',
            category: "Comedy"
        },
        {
            img: '../img/nana.jpeg',
            category: "Comedy"
        },
        {
            img: '../img/crm1.jpeg',
            category: "Crime",
            tokken: "upcoming"
        },
        {
            img: '../img/echo.jpeg',
            category: "Crime"
        },
        {
            img: '../img/soup.jpeg',
            category: "Crime",
            tokken: "tredding"
        },
        {
            img: '../img/talash.jpeg',
            category: "Crime"
        },
        {
            img: '../img/bed.jpeg',
            category: "Crime"
        },
        {
            img: '../img/wed.jpeg',
            category: "Documentary",
            tokken: "letest"
        },
        {
            img: '../img/cu.jpeg',
            category: "Documentary",
            tokken: "upcoming"
        },
        {
            img: '../img/cli.jpeg',
            category: "Documentary"
        },
        {
            img: '../img/cli.jpeg',
            category: "Documentary"
        },
        {
            img: '../img/hat.jpeg',
            category: "Drama",
            tokken: "letest"
        },
        {
            img: '../img/hat2.jpeg',
            category: "Drama"
        },
        {
            img: '../img/hat3.jpeg',
            category: "Drama",
            tokken: "upcoming"
        },
        {
            img: '../img/hat4.jpeg',
            category: "Drama"
        },
        {
            img: '../img/bur.jpeg',
            category: "Drama"
        },
        {
            img: '../img/12.jpeg',
            category: "Family",
            tokken: "letest"
        },
        {
            img: '../img/ff.jpeg',
            category: "Family"
        },
        {
            img: '../img/fff.jpeg',
            category: "Family"
        },
        {
            img: '../img/ney.jpeg',
            category: "Family"
        },
        {
            img: '../img/lgm.jpeg',
            category: "Family"
        },
        {
            img: '../img/upl.jpeg',
            category: "Fantasty",
            tokken: "letest"
        },
        {
            img: '../img/bahu2.jpeg',
            category: "Fantasty"
        },
        {
            img: '../img/barb.jpeg',
            category: "Fantasty"
        },
        {
            img: '../img/12s.jpeg',
            category: "History",
            tokken: "letest",
            tokken: "favorites"
        },
        {
            img: '../img/bil.jpeg',
            category: "History"
        },
        {
            img: '../img/me.jpeg',
            category: "History"
        },
        {
            img: '../img/hop.jpeg',
            category: "History"
        },
        {
            img: '../img/tal.jpeg',
            category: "History"
        },
        {
            img: '../img/savana.jpeg',
            category: "Horror",
            tokken: "favorites"
        },
        {
            img: '../img/slp.jpeg',
            category: "Horror"
        },
        {
            img: '../img/smt.jpeg',
            category: "Horror"
        },
        {
            img: '../img/co.jpeg',
            category: "Horror"
        },
        {
            img: '../img/win.jpeg',
            category: "Horror"
        },
        {
            img: '../img/mus.jpeg',
            category: "Music"
        },
        {
            img: '../img/dee.jpeg',
            category: "Mystery"
        },
        {
            img: '../img/toby.jpeg',
            category: "Mystery"
        },
        {
            img: '../img/dono.jpeg',
            category: "Romance"
        },
        {
            img: '../img/im.jpeg',
            category: "Romance",
            tokken: "favorites"
        },
        {
            img: '../img/hell.jpeg',
            category: "Romance"
        },
        {
            img: '../img/sf.jpeg',
            category: "Science Fiction"
        },
        {
            img: '../img/sh.jpeg',
            category: "Science Fiction"
        },
        {
            img: '../img/moon.jpeg',
            category: "Science Fiction",
            tokken: "favorites"
        },
        {
            img: '../img/kill.jpeg',
            category: "Science Fiction"
        },
        {
            img: '../img/tm.jpeg',
            category: "Science Fiction"
        },
        {
            img: '../img/lok.jpeg',
            category: "TV Movie"
        },
        {
            img: '../img/got.jpeg',
            category: "TV Movie"
        },
        {
            img: '../img/ob.jpeg',
            category: "TV Movie"
        },
        {
            img: '../img/dark.jpeg',
            category: "Thriller"
        },
        {
            img: '../img/5.jpeg',
            category: "Thriller"
        },
        {
            img: '../img/faa.jpeg',
            category: "War"
        },
        {
            img: '../img/thh.jpeg',
            category: "War",
            tokken: "favorites"
        },
        {
            img: '../img/pippa.jpeg',
            category: "War"
        },
        {
            img: '../img/7.jpeg',
            category: "Western",
            tokken: "favorites"
        },
        {
            img: '../img/vvv.jpeg',
            category: "Western"
        },
        {
            img: '../img/vvv.jpeg',
            category: "Western"
        },


    ]

    const [movieList, setMovieList] = useState(allMovieData);

    const btnClick = (item) => {
        if (item == "All Movie") {
            setMovieList(allMovieData)
        }
        else {
            let filterMovie = allMovieData.filter((val) => {
                return val.category == item
            })

            setMovieList(filterMovie)

            console.log(filterMovie);
        }
    }

    const statusAllMovie=()=>{
        setMovieList(allMovieData)
    }

    const statusTredding = () => {
        let tredding = allMovieData.filter((val) => {
            return val.tokken == "tredding"
        })

        setMovieList(tredding)
    }

    const statusLetest = () => {
        let letest = allMovieData.filter((val) => {
            return val.tokken == "letest"
        })

        setMovieList(letest)
    }
    const statusUpcoming = () => {
        let upcoming = allMovieData.filter((val) => {
            return val.tokken == "upcoming"
        })

        setMovieList(upcoming)
    }
    const statusFavorites = () => {
        let favorites = allMovieData.filter((val) => {
            return val.tokken == "favorites"
        })

        setMovieList(favorites)
    }
   

    return (
        <>
            <div className="main-section">
                <div className="header">
                    <div className="logo">
                        <div className="img">
                            <img src="../img/bluebirdlogo.png" alt="" />
                        </div>
                        <div className="title">
                            <span>BlueBirds Movie</span>
                        </div>
                    </div>
                    <div className="status">
                        <ul>
                            <li><a href="#" onClick={() => statusAllMovie()}>All Movie's</a></li>
                            <li><a href="#" onClick={() => statusTredding()}>Trending</a></li>
                            <li><a href="#" onClick={() => statusLetest()}>Letest</a></li>
                            <li><a href="#" onClick={() => statusUpcoming()}>Upcoming</a></li>
                            <li><a href="#" onClick={() => statusFavorites()}>Favorites</a></li>
                        </ul>
                    </div>
                    <div className="login">
                        <div className="loginbtn">
                            <a href="">Log In</a>
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className="nav">
                        <div className="input">
                            <input type="text" placeholder='Search Movie' />
                        </div>
                    </div>
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="category">
                                    <div className="allBtn">
                                        {
                                            allBtnData.map((val) => {
                                                return (
                                                    <a href="#" onClick={() => btnClick(val.category)}>{val.category}</a>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="all-cards">
                                    <div className="main flex">
                                        {
                                            movieList.map((val) => {
                                                return (
                                                    <div className="card">
                                                        <div className="content">
                                                            <div className="img">
                                                                <img src={val.img} alt="" />
                                                            </div>
                                                            <div className="btn">
                                                                <a href="#">Download</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default BlueBirdMovies