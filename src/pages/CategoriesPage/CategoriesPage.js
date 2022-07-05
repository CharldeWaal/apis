import React, { useEffect, useState } from "react";
import styled from 'styled-components';

//import redux selectors, dispatch
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, isLoading, selectCategories } from "../../features/apiSlice";

import { Tile } from "../../components/Tile/Tile";

const CategoryPageContainer = styled.main`
    height: calc(100vh - 70px - 28px);
    width: 100vw;
    overflow-y: scroll;

    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    padding-top: 6px;
`;

const Loading = styled.div`
    margin: auto;
`;

export const CategoriesPage = () => {
    const dispatch = useDispatch();
    const categories = useSelector(selectCategories);
    const loading = useSelector(isLoading);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [])

    return (
        <CategoryPageContainer>
                {loading ? <Loading>Loading...</Loading> :
                categories.map((data, index) => {
                    return (
                        <Tile key={index} title={data}></Tile> 
                    )
                })}
        </CategoryPageContainer>

    )
}