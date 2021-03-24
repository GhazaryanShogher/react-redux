import React from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {sum, mmult,subtraction,division} from './../redux/Calculator/actions';


function Calculator(){
    const total = useSelector(state=>state.total);
    const dispatch = useDispatch();
    let inpValue = 0;

    const Button = styled.button`
        background: #0088cc;
        box-sizing:border-box;
        border-radius: 3px;
        outline:none;
        border:none;
        font-size:18px;
        color: white;
        margin: 5px;
        padding-top:${props => props.padding ? "3px" : 0};
        height:31px;
        width:36px
        `;
        const Input = styled.input`
        outline:none;
        padding: 7px;
        `;
        const Div = styled.input`
        padding: 7px;
        font-size:20px;
        `;

    return(
        <div>
            <div style={{fontSize:"20px", fontWeight:800}}>Total:{total}</div>
            <Input type="number" placeholder="Insert a number" onChange={(e)=>inpValue=e.target.valueAsNumber} />
            <Button onClick={()=>dispatch(sum(inpValue))}>+</Button>
            <Button onClick={()=>dispatch(subtraction(inpValue))}>-</Button>
            <Button onClick={()=>dispatch(mmult(inpValue))}>*</Button>
            <Button onClick={()=>dispatch(division(inpValue))}>/</Button>
        </div>
    )
}
export default Calculator;