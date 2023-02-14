import React from 'react';
import styled from 'styled-components';
import AskContainer from '../components/main/AskContainer';

export default function MainPage(props) {
    return (
        <MainContainer>
            <header>
                <div className='left'>
                    <div className='ask'>
                        <span>애스크</span>
                        <span>beta</span>
                    </div>
                    <h1 className='subtitle'>성격 유형에게 물어보세요</h1>
                </div>
                <div className='right'><button>질문하기</button></div>
            </header>

            <AskContainer title="ENFP에게 도착한 질문" toMbti="ENFP" showCnt={2}/>
            <AskContainer title="모든 유형의 질문" toMbti="all" showCnt={3}/>

        </MainContainer>
    );
}

const MainContainer = styled.div`
    max-width: 500px;
    margin: auto;
    padding: 15px 10px;

    header {
        display: flex;
        justify-content: space-between;
    }
    .ask {
        display: flex;
        align-items: flex-start;
        margin-bottom: 10px;
        font-weight: 500;
    }
    .ask span:nth-child(1) {
        color: var(--gray);
        margin-right: 4px;
    }
    .ask span:nth-child(2) {
        color: var(--SP--);
        font-size: 0.7rem;
    }
    .subtitle {
        font-size: 1.6rem;
        font-weight: 700;
    }
    .right {
        display: flex;
        align-items: center;
    }
    .right button {
        font-size: 1rem;
        font-weight: 600;
        border-radius: 20px;
        background-color: var(--dark-blue);
        color: var(--white);
        padding: 10px 15px;
    }

`
