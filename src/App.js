import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef, useState } from 'react';
import { Container, Row } from 'react-bootstrap'
import BallCard from './components/BallCard';

import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';
import { BsGear, BsShuffle } from 'react-icons/bs';
import './style/App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addBall, bubbleSortBalls, bubbleSortRevBalls, countingSortBalls, descSortBalls, insertionSortBalls, mergeSortBalls, quickSortBalls, selectionSortBalls, unSortBalls } from './redux/actions';
function App() {

    const [bweight, setBweight] = useState(0);
    const ballIn = useRef(null);

    const dispatch = useDispatch();

    const ballItems = useSelector( state => state.balls );

    const [sortType, setSortType] = useState('');   
    
    const handelSortColors = (e) => {
        let pr = e.target.parentElement;
        for( let i=0; i<pr.children.length-1; i++ ){
            if( pr.children[i] === e.target ){
                pr.children[i].style.color = '#5779be';
                pr.children[i].style.backgroundColor = 'white';
            }else{
                pr.children[i].style.color = 'white';
                pr.children[i].style.backgroundColor = '#1890FF';
            }
        }
    }

    const handelBubbleSort = (e) => { dispatch( bubbleSortBalls(ballItems) ); 
        document.querySelector("h3").textContent = 'Big o notation : O(n^2)';
        handelSortColors(e);
    }

    const handelSelectionSort = (e) => { dispatch( selectionSortBalls(ballItems) ); 
        document.querySelector("h3").textContent = 'Big o notation : O(n^2)';
        handelSortColors(e);
    }

    const handelMergeSort = (e) => { dispatch( mergeSortBalls(ballItems) );
        document.querySelector("h3").textContent = 'Big o notation : O(n log n)';
        handelSortColors(e);
    }

    const handelQuickSort = (e) => { dispatch( quickSortBalls(ballItems) ); 
        document.querySelector("h3").textContent = 'Big o notation : O(n)';
        handelSortColors(e);
    }

    const handelInsertionSort = (e) => { dispatch( insertionSortBalls(ballItems) ); 
        document.querySelector("h3").textContent = 'Big o notation : O(n ^ 2)';
        handelSortColors(e);
    }

    const handelCountingSort = (e) => { dispatch( countingSortBalls(ballItems) ); 
        document.querySelector("h3").textContent = 'Big o notation O(n) + O(n^2)';
        handelSortColors(e);
    }

    const handelUnSort = () => { dispatch( unSortBalls(ballItems) ); 
        document.querySelector("h3").textContent = 'Shuffle Mode';

        let ps = document.querySelectorAll('.ballsContainer__sortWrapper p');
        for( let i=0; i<ps.length; i++ ){
            ps[i].style.color = 'white';
            ps[i].style.backgroundColor = '#1890FF';
        }
    }

    const handelDescSort = () => { dispatch( descSortBalls(ballItems) ); 
        document.querySelector("h3").textContent = 'Descending Order';
    }

    const handelChange = () => { setBweight( parseInt(ballIn.current.value) ); };

    const handelInsert = (e) => { 
        e.preventDefault();
        dispatch( addBall(bweight) );
        setBweight(0);
        ballIn.current.value = '';
        console.log( bweight );  
    };
    
    const handelRevSort = () => {
        if ( document.getElementById("descSort").classList.contains('Bubble') 
        || document.getElementById("descSort").classList.contains('Selection') 
        || document.getElementById("descSort").classList.contains('Merge') 
        || document.getElementById("descSort").classList.contains('Quick') 
        || document.getElementById("descSort").classList.contains('Insertion') 
        || document.getElementById("descSort").classList.contains('Counting')){ 
            handelDescSort(); 
        }else{ console.log('no class yet'); }
    }


    const SortFuns = [ handelBubbleSort, handelSelectionSort, handelMergeSort, handelQuickSort, handelInsertionSort, handelCountingSort ];
    const SortTypes = [ 'Bubble', 'Selection', 'Merge', 'Quick', 'Insertion', 'Counting' ];
    return (
        <>
            <h1 className={'text-center'}>Ball App</h1>
            <div className={'ballInsert'}>
                <form onSubmit={handelInsert}>
                    <input type='text' placeholder='Type Ball Weight' ref={ballIn} onChange={handelChange}/>
                    <button type='submit'>Insert</button>
                </form>
            </div>
            <Container className={'ballsContainer'}>
                <Row>
                    <div className={'ballsContainer__ballCards col-8 col-xl-9 col-lg-9 col-md-7 col-sm-8 col-xs-8'}>{
                        ballItems.map( (ballItem, index) =>{ 
                            return(
                                <BallCard key={index} ballWeight={ballItem.weight} ballIndx={index}/>
                            );
                        })
                    }</div>
                    <div className={' col-4 col-xl-3 col-lg-3 col-md-5 col-sm-4 col-xs-4'}>
                        <div className={'ballsContainer__sortWrapper'}>
                            <p onClick={(event) => { handelBubbleSort(event);    setSortType('Bubble'); }}> Bubble </p>
                            <p onClick={(event) => { handelSelectionSort(event); setSortType('Selection'); }}> Selection </p>
                            <p onClick={(event) => { handelMergeSort(event);     setSortType('Merge'); }}> Merge </p>
                            <p onClick={(event) => { handelQuickSort(event);     setSortType('Quick'); }}> Quick </p>
                            <p onClick={(event) => { handelInsertionSort(event); setSortType('Insertion'); }}> Insertion </p>
                            <p onClick={(event) => { handelCountingSort(event);  setSortType('Counting'); }}> Counting </p>
                        
                            <div className={'ballsContainer__sortWrapper__btns'}>
                                {/* <p onClick={handelRevSort}>  */}
                                    <AiFillCaretDown id='descSort' className={`${sortType}`} onClick={handelRevSort}/> 
                                {/* </p>                             */}
                                <BsShuffle onClick={handelUnSort}/>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <h3>Big o notation type</h3>
                </Row>
            </Container>
        </>
    )
}

export default App
