import React, {useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';
import ListItem from '../components/list/ListItem';
import askData from '../data/dummyData';

export default function ListPage(props) {

    const [index , setIndex] = useState(2) ;
    const [items , setItems] = useState(askData.slice(0,index)) ;

    const fetchItems = () => {
        setTimeout(() => {
            setItems(items.concat(askData.slice(index,index+2)))
        }, 500);
        setIndex(p => p+2)
    }

    return (
        <ListContainer>
            <InfiniteScroll dataLength={items.length} next={fetchItems} hasMore={true}>
                {items.map(x => {                
                return (<ListItem
                    key={x.id} 
                    data={x}
                    />)})}
            </InfiniteScroll>
        </ListContainer>
    );
}

const ListContainer = styled.div`
    max-width: 500px;
    margin: auto;
    padding: 15px 10px;
`
