import React from 'react'
import { IoMdClose } from 'react-icons/io';
import { GiGlassBall } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { removeBall } from '../redux/actions';
import { BiTennisBall , BiBowlingBall } from 'react-icons/bi'
function BallCard(props) {

    const dispatch = useDispatch();
    const handelRemove = (index) => {
        dispatch( removeBall(index) )
    }

    return (
        <div className={'ballsContainer__ballCards__item'}>
            <IoMdClose onClick={ () => handelRemove(props.ballIndx) }/>
            {
                ( props.ballWeight >= 0 && props.ballWeight <= 99 ) ?
                <BiTennisBall />
                : ( props.ballWeight >= 100 && props.ballWeight <= 999 ) ?
                <GiGlassBall /> 
                : ( props.ballWeight >= 1000) && <BiBowlingBall /> 
            }
            {
                (props.ballWeight) ? <p> {props.ballWeight} Kg </p>
                : <p>500 kg</p>
            }            
        </div>
    )
}

export default BallCard
