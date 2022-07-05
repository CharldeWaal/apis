import React, { useEffect } from "react";
import styled from 'styled-components';
import { useParams } from "react-router-dom";

//import redux selectors, dispatch
import { useDispatch, useSelector } from "react-redux";
import { fetchAPICategory, isLoading, selectSortedAPIs } from "../../features/apiSlice";

const Container = styled.section`
    display: flex;
    width: 100%;
    height: calc(100vh - 70px - 28px);
    overflow-y: scroll;
    overflow-x: auto;
    justify-content: flex-start;
    align-items: flex-start;

    @media (min-width: 1520px) {
        justify-content: center;
    }
`;

const Loading = styled.div`
    margin: auto;
`;

const StyledTable = styled.table`
    padding: 16px;
    border: 1px solid #48434f;
    border-collapse: collapse;
`;

const TableRow = styled.tr`
    border: 1px solid #48434f;

    &:nth-child(even) {background-color: #f2f2f2;}
`;

const TableHeader = styled.th`
    font-family: 'Inter';
    font-size: 16px;
    padding: 16px;
    border: 1px solid #48434f;
    text-align: left;
`; 

const TableData = styled.td`
    padding: 16px;
    border: 1px solid #48434f;
    text-align: left;
`;

const Link = styled.a`
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`;

export const Category = () => {
    let { category } = useParams();
    const dispatch = useDispatch();
    const allAPIs = useSelector(selectSortedAPIs);
    const loading = useSelector(isLoading);

    useEffect(() => {
        let result = '';
        result = category;
        if(result.includes(' ')){
            result = result.substring(0, result.indexOf(' '));
            console.log(result);
        }
        dispatch(fetchAPICategory(result));
    }, [])

    return (
        <Container>
            {loading ? <Loading>Loading...</Loading> : 
            <StyledTable>
                <thead>
                    <TableRow>
                        <TableHeader>API</TableHeader>
                        <TableHeader>Description</TableHeader>
                        <TableHeader>Auth</TableHeader>
                        <TableHeader>HTTPS</TableHeader>
                        <TableHeader>CORS</TableHeader>
                    </TableRow>
                </thead>
                <tbody>
                    {!loading &&
                    allAPIs.map((data, index) => {
                    return (
                        <TableRow key={index}>
                            <TableData><Link href={data.Link} target='_blank'>{data.API}</Link></TableData>
                            <TableData>{data.Description}</TableData>
                            <TableData>{data.Auth ? data.Auth : 'No'}</TableData>
                            <TableData>{data.HTTPS === true ? 'Yes' : 'No'}</TableData>
                            <TableData>{data.Cors.charAt(0).toUpperCase() + data.Cors.substring(1)}</TableData>
                        </TableRow>
                        )
                    })}
                </tbody>
            </StyledTable>
            }
        </Container>
    )
}