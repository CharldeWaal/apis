import React, { useEffect, useState } from "react";
import styled from 'styled-components';

import { Tile } from "../../components/Tile/Tile";
import { fetchAPICategories } from "../../utils/utils";

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
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchAPICategories().then((res) => {
            console.log(res);
            setCategories(res);
        })
    }, [])

    return (
        <CategoryPageContainer>
            <CategoriesFlex>
                {categories.categories &&
                categories.categories.map((data) => {
                    return (
                        <Tile key={data.id} title={data}></Tile> 
                    )
                })}
            </CategoriesFlex>
        </CategoryPageContainer>

    )
}