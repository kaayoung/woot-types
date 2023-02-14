import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import askData from '../../data/dummyData';
import AskList from './AskList';

export default function AskContainer({title, toMbti, showCnt}) {

    const navigate = useNavigate() ;

    const filteredData = askData.filter(x => {
        if (toMbti=="all") {
            return x
        } else {
            return x.to == toMbti
        }
    }).slice(0,showCnt)

    return (
        <AskWrapper>
            <div className='top'>
                <h2>{title}</h2>
                <button onClick={() => navigate('/list')}>더 보기</button>
            </div>
            <div className='ask-container' onClick={() => navigate('/list')}>
                <ul>
                        {filteredData.map(x => {
                            if (filteredData.indexOf(x)==showCnt-1) {
                                return (<AskList key={x.id} to={x.to}
                                    content={x.content} writerMbti={x.writerMbti} 
                                    writerName={x.writerName} likes={x.likes} commentsCnt={x.comments.length}/>)
                            }
                            return (
                                <>
                                    <AskList key={x.id} to={x.to} id={x.id}
                                    content={x.content} writerMbti={x.writerMbti} 
                                    writerName={x.writerName} likes={x.likes} commentsCnt={x.comments.length}/>
                                    <div className="line"></div>
                                </>
                                )
                        })}                    

                </ul>
            </div>
        </AskWrapper>
    );
}

const AskWrapper = styled.div`
    margin-top: 35px;
    .top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .top h2{
        font-size: 1.3rem;
        font-weight: 700;
    }
    .top button {
        font-size: 0.9rem;        
        color : var(--dark-blue) ;
        padding-right: 0;
    }
    .line {
        display: inline-block;
        width: 100%;
        height: 1px;
        background-color: var(--light-gray);
    }
`