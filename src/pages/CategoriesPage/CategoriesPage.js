import React, { useEffect, useState } from "react";
import styled from 'styled-components';

//import redux selectors, dispatch
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, isLoading, selectCategories } from "../../features/apiSlice";

import { Tile } from "../../components/Tile/Tile";

const CategoryPageContainer = styled.main`
    height: calc(100vh - 70px);
    width: 100vw;
`;

const CategoriesFlex = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: calc(100vh - 70px);
    align-items: flex-start;
    justify-content: center;
    padding-top: 6px;
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
            <CategoriesFlex>
                {loading ? 'Loading...' :
                categories.map((data, index) => {
                    return (
                        <Tile key={index} title={data}></Tile> 
                    )
                })}
            </CategoriesFlex>
        </CategoryPageContainer>

    )
}