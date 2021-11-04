import React, { useState, useEffect, useRef } from "react";
import TextTransition, { presets } from "react-text-transition";
import ReactPlayer from "react-player";
import { useSpring, animated as a } from "react-spring";
import { useMediaQuery } from "@material-ui/core";
function Video() {
  const [playing, setPlaying] = useState(false);
  const matches = useMediaQuery("(min-width:700px )");
  const matchesHeight = useMediaQuery("(min-height:656px)");
  const FirstYesAnswer = [
    "Well,I could not say that it is the earth that you remember. A lot of things have been going on, I mean, in the way you never expected.",
    "“Let me show you the world”",
  ];
  const FirstNoAnswer = [];
  const [volume, setVolume] = useState(0);
  const [startClick, setStartClick] = useState(false);

  const [player, setPlayer] = useState();
  const [videoDuration, setVideoDuration] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [checkName, setCheckName] = useState("");
  const [checkAge, setCheckAge] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [formFalse, setFormFalse] = useState("");
  const [zeroQuestionAppend, setZeroQuestionAppend] = useState(null);
  const [firstQuestionAppend, setFirstQuestionAppend] = useState(null);
  const [questionOneAns, setQuestionOneAns] = useState("");
  const [secondQuestionAppend, setSecondQuestionAppend] = useState(null);
  const [questionTwoAnsYes, setQuestionTwoAnsYes] = useState("");
  const [questionTwoAnsNo, setQuestionTwoAnsNo] = useState(false);
  const [questionTwoPartTwoNo, setQuestionTwoPartTwoNo] = useState(false);
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [isDivVisibleForQ2, setIsDivVisibleforQ2] = useState(false);

  const questionOneSecondProps = useSpring({
    opacity: isDivVisible ? 1 : 0,
    color: "white",
    delay: 100,

    // marginTop: greetingStatus ? 0 : 0
  });
  const questionOneAnsProps = useSpring({
    opacity: !isDivVisible ? 1 : 0,
    color: "white",
    delay: 100,

    // marginTop: greetingStatus ? 0 : 0
  });
  const questionZero = useSpring({
    opacity: zeroQuestionAppend ? 1 : 0,
    background:
      "linear-gradient(137.32deg,rgba(10,8,43,.96) .02%,rgba(39,0,102,.96) 99.96%)",
    padding: "15px",
    borderRadius: "15px",
    // delay:200
    // marginTop: greetingStatus ? 0 : 0
  });
  const firstContentProps = useSpring({
    opacity: firstQuestionAppend ? 1 : 0,
    background:
      "linear-gradient(137.32deg,rgba(10,8,43,.96) .02%,rgba(39,0,102,.96) 99.96%)",
    padding: "15px",
    borderRadius: "15px",
    // delay:200
    // marginTop: greetingStatus ? 0 : 0
  });
  const secondContentProps = useSpring({
    opacity: secondQuestionAppend ? 1 : 0,
    background:
      "linear-gradient(137.32deg,rgba(10,8,43,.96) .02%,rgba(39,0,102,.96) 99.96%)",
    // padding:'15px',
    borderRadius: "15px",
    // delay:200
    // marginTop: greetingStatus ? 0 : 0
  });
  const secondContentPropsTwo = useSpring({
    opacity: isDivVisibleForQ2 ? 1 : 0,
    background:
      "linear-gradient(137.32deg,rgba(10,8,43,.96) .02%,rgba(39,0,102,.96) 99.96%)",
    padding: "15px",
    borderRadius: "15px",
    // delay:200
    // marginTop: greetingStatus ? 0 : 0
  });
  const secondContentPropsTwoNo = useSpring({
    opacity: 1,
    background:
      "linear-gradient(137.32deg,rgba(10,8,43,.96) .02%,rgba(39,0,102,.96) 99.96%)",
    padding: "15px",
    borderRadius: "15px",
    // delay:200
    // marginTop: greetingStatus ? 0 : 0
  });
  // const currentTime = useRef(getCurrentTime());
  // useEffect(()=>{
  //   setPlaying(true)
  //   setVolume(1)
  // },[])

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsDivVisible(true)
  //     console.log('5 seconds later')
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);

  const startGame = () => {
    setPlaying(true);
    setVolume(1);
    setStartClick(true);
    // console.log('start')
  };
  // console.log(playing)

  const ref = (player) => {
    setPlayer(player);
    // console.log(player)
    // const {context} = player
    // console.log(context)
  };
  const onDuration = (duration) => {
    setVideoDuration(duration);
  };
  const onProgress = (progress) => {
    const second = (progress.played * videoDuration).toFixed(3);
    setCurrentTime(second);
    console.log(second);
    // console.log({second})
  };

  const pauseVideo = () => {
    setPlaying(false);
  };
  // while(currentTime >0.05){
  //   // setPlaying(false)
  //   setFirstQappend(true)
  // }
  useEffect(() => {
    // if(currentTime>5 && currentTime<6){
    //   if (firstQuestionAppend==null){
    //     setPlaying(false)
    //     setFirstQuestionAppend(true)
    //   }
    // // console.log(player.getCurrentTime())

    // }
    if (currentTime > 5 && currentTime < 6) {
      if (zeroQuestionAppend == null) {
        setPlaying(false);
        setZeroQuestionAppend(true);
      }
      // console.log(player.getCurrentTime())
    }

    // if(currentTime>1.5 && currentTime<1.6){
    //   if (thirdQuestionAppend==null){
    //     setPlaying(false)
    //     setThirdQuestionAppend(true)
    //   }
    // // console.log(player.getCurrentTime())
    // }
  }, [currentTime]);
  useEffect(() => {
    console.log(currentTime);
    if (currentTime > 60 && currentTime < 61) {
      if (secondQuestionAppend == null) {
        setPlaying(false);
        setSecondQuestionAppend(true);
      }
      // console.log(player.getCurrentTime())
    }
    // if(currentTime>1.5 && currentTime<1.6){
    //   if (thirdQuestionAppend==null){
    //     setPlaying(false)
    //     setThirdQuestionAppend(true)
    //   }
    // // console.log(player.getCurrentTime())
    // }
  }, [currentTime]);

  // Q2
  const questionOne = (answer) => {
    setQuestionOneAns(answer);
    setPlaying(true);
    setFirstQuestionAppend(false);
    const timer = setTimeout(() => {
      setIsDivVisible(true);
      setPlaying(false);

      console.log("15 seconds later");
    }, 15000);
    return () => clearTimeout(timer);
  };
  //  Q3

  const questionTwo = (answer) => {
    if (answer == "Yes") {
      setQuestionTwoAnsYes(
        "You’ve made the right choice, but before that I suggest you prepare yourself for the changes."
      );
      setPlaying(true);
      const timer = setTimeout(() => {
        setIsDivVisibleforQ2(true);
        console.log("10 seconds later");
      }, 10000);
      return () => clearTimeout(timer);
    }

    if (answer == "No") {
      setQuestionTwoAnsNo(true);
      // setPlaying(true)
    }
  };

  const questionTwoPartTwo = (ans) => {
    if (ans == "No") {
      setQuestionTwoPartTwoNo(true);
      setPlaying(true);
      const timer = setTimeout(() => {
        setIsDivVisibleforQ2(true);
        console.log("10 seconds later");
      }, 30000);
      return () => clearTimeout(timer);
    }
  };

  const lastQuestion = () => {};
  const setTheName = (e) => {
    const text = e.target.value;
    setCheckName(text);
  };
  const setTheAge = (e) => {
    const text = e.target.value;
    setCheckAge(text);
  };
  const onSubmitForm = () => {
    if (!checkName || !checkAge) {
      setFormFalse(true);
    }
    if (checkName && checkAge) {
      setFormFalse(false);
      setName(checkName);
      setAge(checkAge);
      setZeroQuestionAppend(false);
      setPlaying(true);
      const timer = setTimeout(() => {
        setPlaying(false);
        setFirstQuestionAppend(true);
        console.log("10 seconds later");
      }, 5000);
      return () => clearTimeout(timer);
    }
  };
  return (
    <div className="game-section">
      <ReactPlayer
        ref={ref}
        playing={playing}
        // onReady={()=>{
        //   setTimeout(()=>{
        //     setPlaying(true)
        //     setVolume(1)
        //   },1000)
        // }}
        url="vid/main.mp4"
        className="player"
        height="100%"
        width="100%"
        volume={volume}
        onProgress={onProgress}
        onDuration={onDuration}
        //  muted
        // controls
      />
      <div className="gameStart-content">
        <div className="gamename-input">
          {/* <h5 style={{color:'red',padding:'0',margin:'0'}}</h5> */}
          <div
            onClick={startGame}
            className={startClick ? "display-none" : "start-btn"}
          >
            PRESS START
          </div>
        </div>
      </div>
      {zeroQuestionAppend && (
        <div className="gameStart-content">
          <a.div className="game-q1 row" style={questionZero}>
            {matches && (
              <div className="col-xs-12 col-xl-6 d-flex align-items-center justify-content-center ">
                <img src="image/angel.png" width="auto" height={400} />
              </div>
            )}
            <div
              className={`col-xs-12 col-xl-6 text-center ${
                matches && `the-text the-text-background`
              } d-flex align-items-center justify-content-center `}
            >
              <div className="d-flex flex-column w-100">
                <div className="d-flex flex-column">
                  <div className={matches ? "text-dark" : "text-white"}>
                    What is your name:
                  </div>
                  <input onChange={setTheName} />
                </div>
                <div className="d-flex flex-column">
                  <div className={matches ? "text-dark" : "text-white"}>
                    Your Age:
                  </div>
                  <input onChange={setTheAge} />
                </div>
                <div
                  className={matches ? "submit-btn" : "submit-btn-mobile"}
                  onClick={onSubmitForm}
                >
                  Submit
                </div>
                {formFalse && (
                  <div
                    className="mt-2 text-danger"
                    style={{ fontSize: "15px" }}
                  >
                    Please commit the form
                  </div>
                )}
              </div>
            </div>
          </a.div>
        </div>
      )}
      {/* Question 1 */}
      {firstQuestionAppend && (
        <>
          <div className="game-content">
            <a.div style={firstContentProps}>
              {matches && matchesHeight && (
                <div className="game-content d-flex image">
                  <div>
                    <img src="image/angel.png" width="auto" height={400} />
                  </div>
                  <div>
                    <img src="image/astronaut.png" width="auto" height={400} />
                  </div>
                </div>
              )}
              <div className="game-q1">
                <div style={{ textAlign: "center", margin: "10px 0px" }}>
                  Are you ready to get back to Earth
                </div>
                <div className="game-group">
                  <div className="game-choice-group">
                    <div
                      className="game-choice-btn"
                      onClick={() => questionOne("Yes")}
                    >
                      Yes,Absolutely
                    </div>

                    <div
                      className="game-choice-btn"
                      onClick={() => questionOne("No")}
                    >
                      No
                    </div>
                  </div>
                </div>
              </div>
            </a.div>
          </div>
        </>
      )}
      {questionOneAns && (
        <div className="gameStart-content" style={{ width: "80%" }}>
          {isDivVisible == false && (
            <a.div className="game-q1 row" style={questionOneAnsProps}>
              {matches && matchesHeight && (
                <div className="col-xs-12 col-xl-6 d-flex align-items-center justify-content-center ">
                  <img src="image/angel.png" width="auto" height={400} />
                </div>
              )}
              <div
                className={`col-xs-12 col-xl-6 text-center ${
                  matches && `the-text the-text-background`
                } d-flex align-items-center`}
              >
                {questionOneAns == "Yes"
                  ? "Well, I could not say that it is the earth that you remember. A lot of things have been going on, I mean, in the way you never expected."
                  : "Well, but  something beautiful has been created while you take a trip in the space"}
              </div>
            </a.div>
          )}
          {isDivVisible && (
            <a.div className="game-q1" style={questionOneSecondProps}>
              <div className="w-100">
                <div className="d-flex justify-content-center">
                  <img src="https://nineplanets.org/wp-content/uploads/2019/09/earth.png" />
                  <div
                    className="earth-click"
                    onClick={() => {
                      setIsDivVisible(null);
                      setPlaying(true);
                    }}
                  >
                    CLICK ME
                  </div>
                </div>
                <div style={{ width: "400px" }} className="text-center m-auto">
                  Let me show you the world
                </div>
              </div>
            </a.div>
          )}
        </div>
      )}
      {/* End of Question 1 */}
      {/* Question two */}
      {secondQuestionAppend && !questionTwoAnsYes && !questionTwoAnsNo && (
        <div className="game-content">
          {questionOneAns == "Yes" ? (
            <a.div className="game-q1" style={secondContentProps}>
              {matches && matchesHeight && (
                <div className="game-content d-flex image">
                  <div>
                    <img
                      src="image/angel.png"
                      width="auto"
                      height={400}
                      style={{
                        position: "relative",
                        top: "-10px",
                        left: "20px",
                      }}
                      className="image"
                    />
                  </div>
                  <div>
                    <img
                      src="image/astronaut.png"
                      width="auto"
                      height={400}
                      style={{
                        position: "relative",
                        top: "-10px",
                        left: "-20px",
                      }}
                    />
                  </div>
                </div>
              )}
              <div style={{ textAlign: "center", margin: "10px 0px" }}>
                Do you still want to return to earth, Is earth still a home for
                you actually?
              </div>
              <div className="game-group">
                <div className="game-choice-group">
                  <div
                    className="game-choice-btn"
                    onClick={() => questionTwo("Yes")}
                  >
                    Yes, it always be my home
                  </div>

                  <div
                    className="game-choice-btn"
                    onClick={() => questionTwo("No")}
                  >
                    Not sure that I can handle the change
                  </div>
                </div>
              </div>
            </a.div>
          ) : (
            <a.div className="game-q1" style={secondContentProps}>
              {matches && matchesHeight && (
                <div className="game-content d-flex">
                  <div>
                    <img
                      src="image/angel.png"
                      width="auto"
                      height={400}
                      style={{
                        position: "relative",
                        top: "-10px",
                        left: "20px",
                      }}
                    />
                  </div>
                  <div>
                    <img
                      src="image/astronaut.png"
                      width="auto"
                      height={400}
                      style={{
                        position: "relative",
                        top: "-10px",
                        left: "-20px",
                      }}
                    />
                  </div>
                </div>
              )}
              <div style={{ textAlign: "center", margin: "10px 0px" }}>
                Want to change your mind about returning to our beloved home?{" "}
              </div>
              <div className="game-group">
                <div className="game-choice-group">
                  <div
                    className="game-choice-btn"
                    onClick={() => questionTwo("Yes")}
                  >
                    Let’s go home, I’ve changed my mind
                  </div>

                  <div
                    className="game-choice-btn"
                    onClick={() => questionTwo("No")}
                  >
                    I don’t want to go back{" "}
                  </div>
                </div>
              </div>
            </a.div>
          )}
        </div>
      )}

      {questionTwoAnsNo && !questionTwoAnsYes && !questionTwoPartTwoNo && (
        <div className="game-content">
          <a.div className="game-q1" style={secondContentPropsTwoNo}>
            {matches && matchesHeight && (
              <div className="game-content d-flex image">
                <div>
                  <img src="image/angel.png" width="auto" height={400} />
                </div>
                <div>
                  <img src="image/astronaut.png" width="auto" height={400} />
                </div>
              </div>
            )}
            <div style={{ textAlign: "center", margin: "10px 0px" }}>
              Actually, the chaos that you’ve seen may not come from the outside
              but from the inside so give the world a try!!!
            </div>
            <div className="game-group">
              <div className="game-choice-group">
                {/* Ans Yes Again */}
                <div
                  className="game-choice-btn"
                  onClick={() => questionTwo("Yes")}
                >
                  Yeah, let’s go back home
                </div>

                <div
                  className="game-choice-btn"
                  onClick={() => questionTwoPartTwo("No")}
                >
                  Meh, still not sure{" "}
                </div>
              </div>
            </div>
          </a.div>
        </div>
      )}

      {questionTwoAnsYes && (
        <div className="gameStart-content last-game-container">
          {!isDivVisibleForQ2 ? (
            //  First Transition
            <div className="gamename-input">
              {/* <h5 style={{color:'red',padding:'0',margin:'0'}}</h5> */}
              <div className="text-white the-text">{questionTwoAnsYes}</div>
            </div>
          ) : (
            //  Second Transition
            <div className="gamename-input last-game-container">
              {/* <h5 style={{color:'red',padding:'0',margin:'0'}}</h5> */}
              <div className="text-white text-center">
                {age} Years since you left the earth. Do you still remember what
                it was like?
              </div>
              <a.div className="game-q1" style={secondContentPropsTwo}>
                <div style={{ textAlign: "center", margin: "10px 0px" }}>
                  Any stagnant that burden your life:
                </div>
                <div className="game-group">
                  <div className="last-game-choice-group">
                    <div className="row">
                      <div
                        className="last-game-choice-btn col-12"
                        onClick={() => lastQuestion("Love")}
                      >
                        <div className="text-center  my-button">Love</div>
                      </div>
                      <div
                        className="last-game-choice-btn col-12"
                        onClick={() => lastQuestion("Money")}
                      >
                        <div className="text-center  my-button">Money</div>
                      </div>
                      <div
                        className="last-game-choice-btn col-12"
                        onClick={() => lastQuestion("Luck")}
                      >
                        <div className="text-center  my-button">Luck</div>
                      </div>
                      <div
                        className="last-game-choice-btn col-12"
                        onClick={() => lastQuestion("Health")}
                      >
                        <div className="text-center  my-button">Health</div>
                      </div>
                      <div
                        className="last-game-choice-btn col-12"
                        onClick={() => lastQuestion("Friendship ")}
                      >
                        <div className="text-center  my-button">Friendship</div>
                      </div>
                    </div>
                  </div>
                </div>
              </a.div>
            </div>
          )}
        </div>
      )}
      {questionTwoPartTwoNo && (
        <div className="gameStart-content last-game-container">
          {!isDivVisibleForQ2 ? (
            //  First Transition
            <div className="gamename-input ">
              {/* <h5 style={{color:'red',padding:'0',margin:'0'}}</h5> */}
              <div className="row">
                {matches && matchesHeight && (
                  <div className="col-xs-12 col-xl-6 d-flex align-items-center justify-content-center ">
                    <img src="image/angel.png" width="auto" height={400} />
                  </div>
                )}
                <div
                  className={`col-xs-12 col-xl-6 text-center ${
                    matches && `the-text the-text-background`
                  } d-flex align-items-center`}
                >
                  Before returning back to our home you should check your
                  spiritual health first!
                </div>
              </div>
            </div>
          ) : (
            //  Second Transition
            <div className="gamename-input last-game-container">
              {/* <h5 style={{color:'red',padding:'0',margin:'0'}}</h5> */}
              <div className="text-white"></div>
              <a.div className="game-q1" style={secondContentPropsTwoNo}>
                <div style={{ textAlign: "center", margin: "10px 0px" }}>
                  Any stagnant that burden your life:
                </div>
                <div className="game-group">
                  <div className="last-game-choice-group">
                    <div className="row">
                      <div
                        className="last-game-choice-btn col-12"
                        onClick={() => lastQuestion("Love")}
                      >
                        <div className="text-center  my-button">Love</div>
                      </div>
                      <div
                        className="last-game-choice-btn col-12"
                        onClick={() => lastQuestion("Money")}
                      >
                        <div className="text-center  my-button">Money</div>
                      </div>
                      <div
                        className="last-game-choice-btn col-12"
                        onClick={() => lastQuestion("Luck")}
                      >
                        <div className="text-center  my-button">Luck</div>
                      </div>
                      <div
                        className="last-game-choice-btn col-12"
                        onClick={() => lastQuestion("Health")}
                      >
                        <div className="text-center  my-button">Health</div>
                      </div>
                      <div
                        className="last-game-choice-btn col-12"
                        onClick={() => lastQuestion("Friendship ")}
                      >
                        <div className="text-center  my-button">Friendship</div>
                      </div>
                    </div>
                  </div>
                </div>
              </a.div>
            </div>
          )}
        </div>
      )}

      <style jsx>
        {`
          .submit-btn,
          .submit-btn-mobile {
            margin-top: 5px;
            border-radius: 15px;
          }
          .submit-btn {
            background: linear-gradient(
              137.32deg,
              rgba(10, 8, 43, 0.96) 0.02%,
              rgba(39, 0, 102, 0.96) 99.96%
            );
          }
          .submit-btn-mobile {
            background: linear-gradient(180deg, #79c1f4, #4300d2);
          }
          .image {
            z-index: 0 !important;
          }
          @media only screen and (max-width: 750px) {
            .last-game-container {
              width: 100%;
              background: linear-gradient(
                137.32deg,
                rgba(10, 8, 43, 0.96) 0.02%,
                rgba(39, 0, 102, 0.96) 99.96%
              );
            }
          }

          .display-none {
            opacity: 0;
            display: none;
          }
          .game-section {
            position: relative;
            display: flex;
            width: auto;
            height: 100vh;
            overflow: hidden;
            background: black;
          }

          .the-text {
            font-size: 3rem;
            text-align: center;
          }
          .the-text-background {
            background: white;
            border: 5px solid black;
            color: black;
          }
          .gameStart-content {
            position: absolute;
            // width:100%;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            // display:flex;
            // justify-content:center;
          }
          .start-btn {
            background: linear-gradient(180deg, #79c1f4, #4300d2);
            cursor: pointer;
            opacity: 1;
            border-radius: 30px;
            padding: 50px;
          }

          .game-content {
            position: absolute;
            width: 100%;
            left: 50%;
            bottom: 0%;
            transform: translate(-50%, -50%);
            display: flex;
            justify-content: center;
          }
          .game-group {
            display: flex;
            width: 100%;
          }
          .game-choice-group {
            display: flex;
            flex-direction: row;
            width: 100%;
            padding: 15px;
          }
          .last-game-choice-group {
            // display:flex;
            // flex-direction:column;
            width: 100%;
            padding: 5px;
          }
          .game-choice-btn,
          last-game-choice-btn {
            background: linear-gradient(
              180deg,
              rgba(43, 67, 129, 0.96) 0.02%,
              rgba(31, 10, 90, 0.96) 99.96%
            );
            cursor: pointer;
            opacity: 1;
            border-radius: 20px;
            padding: 10px;
            width: 100%;
            text-align: center;
          }
          .game-choice-btn:hover,
          last-game-choice-btn:hover {
            background: linear-gradient(180deg, #79c1f4, #4300d2);
          }
          .game-choice-btn {
            margin: 0px 2px;
          }
          .last-game-choice-btn {
            padding-top: 10px;
          }
          .last-game-choice-btn .my-button {
            cursor: pointer;
            border-radius: 15px;
            padding: 5px;

            background: linear-gradient(
              180deg,
              rgba(43, 67, 129, 0.96) 0.02%,
              rgba(31, 10, 90, 0.96) 99.96%
            );
          }
          .last-game-choice-btn .my-button:hover {
            background: linear-gradient(180deg, #79c1f4, #4300d2);
          }
          .game-q1 {
            opacity: 1;
            transition: all 5s linear;
            background: linear-gradient(
              137.32deg,
              rgba(10, 8, 43, 0.96) 0.02%,
              rgba(39, 0, 102, 0.96) 99.96%
            );
            color: white;
          }
          .earth-click {
            position: absolute;
            // left:40%;
            top: 40%;
            font-size: 3rem;
            color: white;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}

export default Video;
