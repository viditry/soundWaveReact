import React from 'react';
import {GoArrowLeft} from 'react-icons/go';
import {GoPrimitiveDot} from 'react-icons/go';
import {useState,useEffect} from "react";
import axios  from 'axios';
const About = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [anomalies, setListAnomalies] = useState([])
    const [soundWav, setSoundWav] = useState()
    const [anomalyItems, setAnomalyItem] = useState([])
    const [selectedCard, setSelectedCard] = useState({ id: null, lineColor: 'black' });
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const anomaliess = () => {
        axios.get(`http://localhost:8080/api/anomalies`).then(res => {
            console.log(res)
            setListAnomalies(res.data)
        })
    }

    const soundwac = (id) => {
        axios.get(`http://localhost:8080/api/sound-wav/${id}`).then(res => {
            console.log(res)
            setSoundWav(res.data)
        })
    }

    const anomalyItem = (id) => {
        axios.get(`http://localhost:8080/api/anomaly-items/${id}`).then(res => {
            console.log(res)
            setAnomalyItem(res.data)
        })
    }
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = React.createRef();

    const handleTogglePlay = () => {
        const audioElement = audioRef.current;

        if (isPlaying) {
            audioElement.pause();
        } else {
            audioElement.play();
        }

        setIsPlaying(!isPlaying);
    };
    useEffect(() => {
        anomaliess();
    })

    function handleCardClick(id) {

    }

    return (
        <div
            style={{
                backgroundColor: '#F8F8FF',
                height: '100vh',
                padding: '20px' // Add padding of 20 pixels
            }}
        >
            <div style={{backgroundColor: '#ffffff', height: "auto"}}>
                {/* Additional content inside the box */}
                <nav className="navbar border-bottom border-dark">
                    <select
                        className="custom-select"
                        value={selectedOption}
                        onChange={handleSelectChange}
                    >
                        <option value="">CNC Machine</option>
                        <option value="option1">Milling Machine</option>
                    </select>
                </nav>


                <div className="container-fluid">
                    <div className="row col-12">

                        <div className="col-4">
                            <div className="row">
                                <div className="border border-dark"><GoArrowLeft/>
                                    <span>Back</span></div>
                                <div className="border border-dark">
                                    <span> 6 alerts</span> <span className="bg-primary rounded">2 new</span></div>
                                <div className="border border-dark">
                                    {anomalies.map((anomaliesss, i) => {
                                        return (
                                            <div className="card" style={{marginTop : '10px'}} key={anomaliesss.id} onClick={() => handleCardClick(anomaliesss.id)}>
                                                <div className="card-body" >
                                                        {/* Render your card content */}

                                                    <div className="d-flex justify-content-between">
                                                        <div onClick={handleClick}>
                                                            {isClicked && <GoPrimitiveDot style={{color: 'blue'}}/>}  ID # {anomaliesss.id}
                                                        </div>
                                                        <div>{anomaliesss.anomaly}</div>
                                                    </div>
                                                    <h5 className="card-text text-black">UNKNOWN ANOMALY</h5>
                                                    <p className="card-text">detectet goes here. {anomaliesss.createdAt}</p>
                                                </div>
                                            </div>
                                        );
                                    })}


                                </div>
                            </div>


                        </div>
                        <div className="col-8">
                            <h2> Alerts ID 1231231</h2>
                            <p> detectef 12-02-2023 until 14-03-2023</p>
                            <h5 className="card-title">Card Title</h5>
                            <div className="container-fluid">
                                <div className="row col-12 border-top border-black" >
                                    <div className="col-6">
                                        <div>Anomaly Moasda asdas</div>
                                        <audio ref={audioRef} src="../../wav/1.wav" />
                                        <button onClick={handleTogglePlay}>
                                            {isPlaying ? 'Pause' : 'Play'}
                                        </button>
                                    </div>
                                    <div className="col-6">Normal </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
