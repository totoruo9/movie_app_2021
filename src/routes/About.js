import React from 'react';
import "./About.css"

function About(){
    return(
        <div className="about__wrap">
            <h3 className="about__title">영화 정보 사이트입니다.</h3>
            <p className="about__info">
                영화 정보를 보여주는 사이트입니다.<br />
                react와 react-router를 연습하기 위해 만들어 졌으며<br />
                노마드 코더의 강의를 참고하였습니다.
            </p>
        </div>
    )
}

export default About;