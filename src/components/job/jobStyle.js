import { css,styled } from "styled-components";
import {Flex} from '../common'

const JobBody = styled.div`
margin-top: 50px;
max-height: 1400px;
  ${Flex}
`
const JobListTitle = styled.div`
  ${Flex}
  left: 120px;
  padding: 10px 0;
  width: 100%;
  justify-content: flex-start;
  border-top: 1px solid #eee;
  strong {
    font-size: 19px;
    margin-right: 20px;
  }
  span {
    margin-left: 20px;
    strong {
      margin-right: 0;
      color: red;
    }
  }
`
const SortTypeList = styled.div`
  width: 100%;
  padding: 10px 0;
  border-top: 2px solid black;
`
const JobInfoTable = styled.table`
  width: 100%;
  border-top: 1px solid #aaa;
  border-collapse:collapse;
  thead {
    th {
      padding: 10px 0;
      background-color: #eee;
    border-bottom: 1px solid #bbb;
    }
  }
  tbody tr{
    &:hover {
      cursor: pointer;
      background-color: #f2fdff;
    }
  }
`
const TableContentTd = styled.td`
  border-bottom: 1px solid #ddd;
  padding: 0 40px;
  ${({ $type }) =>
    $type === "local" 
      ? css`
        width: 110px;
        line-height: 1.4;
        text-align: left;
        word-break: keep-all;
        overflow: hidden;
      `
      : $type === "title" 
      ? css`
        padding: 20px 40px;
        ${Flex}
        flex-direction: column;
        justify-content: flex-start;
      `
      : $type === "salary"
      ? css `
        width : 80px;
        text-align : right;
      `
      : css `
        width: 95px;
        text-align: center;
        `
  }
  span {
    width:100%;
    margin-bottom: 5px;
    line-height: 1.4;
  }
`
const JobsSpan = styled.span`
  color: ${props => props.color || "black"};
  font-size: ${props => props.size || "13px"};
`
const JobLocation = styled.div`
  padding: 20px 0 10px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 24px;
`
const JobSubContent = styled.div`
  ${Flex}
  flex-direction: column;
  width: 100%;
`
const RegistDate = styled.div`
  width: 100%;
  padding: 0 15px;
  text-align: left;
  margin-bottom: 15px;
`
const DetailInfoBody = styled.div`
  width: 100%;
  border-top: 2px solid #222;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
`
const DetailHead = styled.div`
  padding: 32px 40px 0;
  border-bottom: 1px solid #eee;

  p {
    font-size: 18px;
  }
  strong {
    max-width: 830px;
    line-height: 80px;
    font-size: 32px;
    letter-spacing: -2.4px;
    color: #222;
  }
`
const DetailCondition = styled.div`
  width: 100%;
  display: table;
  padding: 0 40px 0;
`
const ConditionTable =styled.div`
  border-bottom: 1px solid #eee;
  display: table-cell;
  ${({ $type }) =>
  $type === "left" 
    ? css`
      padding-right: 40px;
      border-right: 1px solid #eee;
    `
    : css`
    display: table-cell;
    width: 500px;
    padding: 0 0 30px 40px;
    `
  }
  div{
    padding: 25px 0 32px;
    font-size: 15px;
    letter-spacing: -0.8px;
    border-bottom: 1px solid #eee;
  }

    h3 {
      margin-bottom: 21px;
      font-size: 26px;
      letter-spacing: -1px;
      color: #222;
    }
    strong {
      font-size: 15px;
      letter-spacing: -0.8px;
      color: #222;
    }
    dl {
      display: table;
      dt{
        display: table-cell;
        width: 72px;
        padding-right: 14px;
        color: #999;
      }
      dd{
        display: table-cell;
        width: 501px;
      }
    }
`
export {
  JobBody,
  JobListTitle,
  SortTypeList,
  JobInfoTable,
  TableContentTd,
  JobsSpan,
  JobLocation,
  JobSubContent,
  RegistDate,
  DetailInfoBody,
  DetailHead,
  DetailCondition,
  ConditionTable,
}