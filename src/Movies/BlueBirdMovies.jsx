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
            tokken: "tredding",
            name : "hanuman"
        },
        {
            img: '../img/kgf.jpeg',
            category: "Action",
            name : "kgf"
        },
        {
            img: '../img/animal.jpeg',
            category: "Action",
            name : "animal"
        },
        {
            img: '../img/lift.jpeg',
            category: "Action",
            name : "lift"
        },
        {
            img: '../img/rastan.jpeg',
            category: "Action",
            name : "rastsasan"
        },
        {
            img: '../img/napoleon.jpeg',
            category: "Action",
            tokken: "upcoming",
            name : "napoleon"
        },
        {
            img: '../img/eli.jpeg',
            category: "Adventure",
            tokken: "tredding",
            name : "alienoid"
        },
        {
            img: '../img/bahu.jpeg',
            category: "Adventure",
            name : "bahubali"
        },
        {
            img: '../img/rec.jpeg',
            category: "Adventure",
            name : "reacher"
        },
        {
            img: '../img/rol.jpeg',
            category: "Adventure",
            tokken: "upcoming",
            name : "role"
        },
        {
            img: '../img/mafia.jpeg',
            category: "Adventure",
            name : "mafia"
        },
        {
            img: '../img/v.jpeg',
            category: "Adventure",
            name : "v"
        },
        {
            img: '../img/scoob.jpeg',
            category: "Animation",
            tokken: "tredding",
            name : "scoob"
        },
        {
            img: '../img/dd.jpeg',
            category: "Animation",
            name : "dark"
        },
        {
            img: '../img/ded.jpeg',
            category: "Comedy",
            name : "deadpool"
        },
        {
            img: '../img/khiladi.jpeg',
            category: "Comedy",
            name : "khiladi786"
        },
        {
            img: '../img/tom.jpeg',
            category: "Comedy",
            tokken: "tredding",
            name : "aomobon"
        },
        {
            img: '../img/diry.jpeg',
            category: "Comedy",
            name : "diary"
        },
        {
            img: '../img/nana.jpeg',
            category: "Comedy",
            name : "nanna"
        },
        {
            img: '../img/crm1.jpeg',
            category: "Crime",
            tokken: "upcoming",
            name : "label"
        },
        {
            img: '../img/echo.jpeg',
            category: "Crime",
            name : "echo",
        },
        {
            img: '../img/soup.jpeg',
            category: "Crime",
            tokken: "tredding",
            name : "killer"
        },
        {
            img: '../img/talash.jpeg',
            category: "Crime",
            name : "talash"
        },
        {
            img: '../img/bed.jpeg',
            category: "Crime",
            name : "tamil"
        },
        {
            img: '../img/wed.jpeg',
            category: "Documentary",
            tokken: "letest",
            name : "wedding"
        },
        {
            img: '../img/cu.jpeg',
            category: "Documentary",
            tokken: "upcoming",
            name : "curry"
        },
        {
            img: '../img/cli.jpeg',
            category: "Documentary",
            name : "climbers"
        },
        {
            img: '../img/hat.jpeg',
            category: "Drama",
            tokken: "letest",
            name : "hate story"
        },
        {
            img: '../img/hat2.jpeg',
            category: "Drama",
            name : "hate story"
        },
        {
            img: '../img/hat3.jpeg',
            category: "Drama",
            tokken: "upcoming",
            name : "hate story3"
        },
        {
            img: '../img/hat4.jpeg',
            category: "Drama",
            name : "hate story4"
        },
        {
            img: '../img/bur.jpeg',
            category: "Drama",
            name : "burning"
        },
        {
            img: '../img/12.jpeg',
            category: "Family",
            tokken: "letest",
            name : "12 fail"
        },
        {
            img: '../img/ff.jpeg',
            category: "Family",
            name : "express"
        },
        {
            img: '../img/fff.jpeg',
            category: "Family",
            name : "undekhi"
        },
        {
            img: '../img/ney.jpeg',
            category: "Family",
            name : "neymar"
        },
        {
            img: '../img/lgm.jpeg',
            category: "Family",
            name : "lgm"
        },
        {
            img: '../img/upl.jpeg',
            category: "Fantasty",
            tokken: "letest",
            name : "upload"
        },
        {
            img: '../img/bahu2.jpeg',
            category: "Fantasty",
            name : "bahubali2"
        },
        {
            img: '../img/barb.jpeg',
            category: "Fantasty",
            name : "barbie"
        },
        {
            img: '../img/12s.jpeg',
            category: "History",
            tokken: "letest",
            tokken: "favorites",
            name : "12 strong"
        },
        {
            img: '../img/bil.jpeg',
            category: "History",
            name : "bilal"
        },
        {
            img: '../img/me.jpeg',
            category: "History",
            name : "md"
        },
        {
            img: '../img/hop.jpeg',
            category: "History",
            name : "napoleon"
        },
        {
            img: '../img/tal.jpeg',
            category: "History",
            name : "tamil"
        },
        {
            img: '../img/savana.jpeg',
            category: "Horror",
            tokken: "favorites",
            name : "savannah"
        },
        {
            img: '../img/slp.jpeg',
            category: "Horror",
            name : "slapface"
        },
        {
            img: '../img/smt.jpeg',
            category: "Horror",
            name : "samaritans"
        },
        {
            img: '../img/co.jpeg',
            category: "Horror",
            name : "coven"
        },
        {
            img: '../img/win.jpeg',
            category: "Horror",
            name : "wintertide"
        },
        {
            img: '../img/mus.jpeg',
            category: "Music",
            name : "music"
        },
        {
            img: '../img/dee.jpeg',
            category: "Mystery",
            name : "deep"
        },
        {
            img: '../img/toby.jpeg',
            category: "Mystery",
            name : "toby"
        },
        {
            img: '../img/dono.jpeg',
            category: "Romance",
            name : "dono"
        },
        {
            img: '../img/im.jpeg',
            category: "Romance",
            tokken: "favorites",
            name : "immature"
        },
        {
            img: '../img/hell.jpeg',
            category: "Romance",
            name : "takdir hello"
        },
        {
            img: '../img/sf.jpeg',
            category: "Science Fiction",
            name : "gyeongseong"
        },
        {
            img: '../img/sh.jpeg',
            category: "Science Fiction",
            name : "sweet home"
        },
        {
            img: '../img/moon.jpeg',
            category: "Science Fiction",
            tokken: "favorites",
            name : "the moon"
        },
        {
            img: '../img/kill.jpeg',
            category: "Science Fiction",
            name : "kill mode"
        },
        {
            img: '../img/tm.jpeg',
            category: "Science Fiction",
            name : "tomiris"
        },
        {
            img: '../img/lok.jpeg',
            category: "TV Movie",
            name : "lok"
        },
        {
            img: '../img/got.jpeg',
            category: "TV Movie",
            name : "got"
        },
        {
            img: '../img/ob.jpeg',
            category: "TV Movie",
            name : "obliterated"
        },
        {
            img: '../img/dark.jpeg',
            category: "Thriller",
            name : "dark"
        },
        {
            img: '../img/5.jpeg',
            category: "Thriller",
            name : "mafia"
        },
        {
            img: '../img/faa.jpeg',
            category: "War",
            name : "fauda"
        },
        {
            img: '../img/thh.jpeg',
            category: "War",
            tokken: "favorites",
            name : "the covenant"
        },
        {
            img: '../img/pippa.jpeg',
            category: "War",
            name : "pippa"
        },
        {
            img: '../img/7.jpeg',
            category: "Western",
            tokken: "favorites",
            name : "saven kings"
        },
        {
            img: '../img/vvv.jpeg',
            category: "Western",
            name : "vi kings vikings"
        },


    ]

    const [movieList, setMovieList] = useState(allMovieData);
    const [searchName, setSearchName] = useState('')

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

    const logInBtn=()=>{
        alert("Have to take premium my dear")
    }

    const downloadBtn=()=>{
        alert("Please login")
    }

    // searchName start 

    useEffect(()=>{
        if(searchName != '' ) {
            const searchData = allMovieData.filter((val)=>{
                return val.name.toLowerCase().includes(searchName.toLowerCase())
            })
            setMovieList(searchData)
        }
        else {
            setMovieList(allMovieData)
        }
    },[searchName])

    // searchName end
   

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
                            <li><a href="#" className='allmovie' onClick={() => statusAllMovie()}>All Movie's</a></li>
                            <li><a href="#" onClick={() => statusTredding()}>Trending</a></li>
                            <li><a href="#" onClick={() => statusLetest()}>Letest</a></li>
                            <li><a href="#" onClick={() => statusUpcoming()}>Upcoming</a></li>
                            <li><a href="#" onClick={() => statusFavorites()}>Favorites</a></li>
                        </ul>
                    </div>
                    <div className="login">
                        <div className="loginbtn">
                            <a href="" onClick={()=>logInBtn()}>Log In</a>
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className="nav">
                        <div className="input">
                            <input type="text" placeholder='Search Movie' onChange={(e)=>setSearchName(e.target.value)} value={searchName}/>
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
                                                                <a href="#" onClick={()=>downloadBtn()}>Download</a>
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