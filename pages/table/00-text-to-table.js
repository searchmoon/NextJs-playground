import {useCallback, useRef, useState} from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  margin: 0 auto;
  margin-top: 35px;
  max-width: 800px;
  
  font-size: 10px;
  
  textarea{
    width: 100%;
    min-height: 500px;
  }
`

const getFirstNumbers = (string) => {
    const indexFirstNumber = string.search(/[0-9]/);
    if(indexFirstNumber === -1){
        return [indexFirstNumber, string];
    }
    let remain = string.substring(indexFirstNumber).trim();
    const firstNumber = remain.substring(0, remain.indexOf(" ")).trim();
    const remainAfter = remain.substring(remain.indexOf(" ") + 1).trim()
    return [firstNumber, remainAfter];
}

function copyTable(el, e) {
    e?.preventDefault();
    var table = document.getElementById(el || "table");

    if (navigator.clipboard) {
        var text = table.innerText.trim();
        navigator.clipboard.writeText(text).catch(function () { });
    }
}

const TextToTable = () => {

    const taRef = useRef(null);
    const guRef = useRef(null);
    const dongRef = useRef(null);

    const [arr, setArr] = useState([]);
    const [gu, setGu] = useState('');
    const [dong, setDong] = useState('');

    const handleTextArea = useCallback(()=>{
        console.log(taRef.current.value);
        const value = taRef.current.value;
        let addresses = value.split("\n");
        console.log('addresses : ', addresses);
        addresses = addresses.map(item => item.substring(item.indexOf(".") + 1).trim());
        console.log('addresses 1 : ', addresses);

        addresses = addresses.map(item => {
            const retObj = {
                name:'',
                localPhone: '',
                cellPhone: '',
                postcode: '',
                addr : '',
            };
            const indexFirstNumber = item.search(/[0-9]/);
            retObj.name = item.substring(0, indexFirstNumber).trim();


            let remain = item;
            let countWhile = 0;
            while(true){
                console.log('while ', countWhile, remain);
                countWhile++;
                if(countWhile > 100) break;
                let [firstNumber, remainTemp] = getFirstNumbers(remain);
                remain = remainTemp;
                if(firstNumber === -1){
                    break;
                }
                const count = (firstNumber.match(/-/g) || []).length;
                if(count === 1){
                    retObj.localPhone = firstNumber
                }
                if(count === 2){
                    retObj.cellPhone = firstNumber;
                }
                if(count === 0){
                    retObj.postcode = firstNumber;
                    break;
                }
            }
            retObj.addr = remain;
            return retObj;
        });
        console.log('addresses 2 : ', addresses);
        setGu(guRef.current.value);
        setDong(dongRef.current.value);
        setArr(addresses);
        setTimeout(()=>{
            copyTable();
        }, 500);
    }, [taRef.current, guRef.current, dongRef.current]);

    return (
        <Container>
            hello<br/>
            구 : <input type={'text'} ref={guRef} /><br/>
            동 : <input type={'text'} ref={dongRef} /><br/>
            <textarea ref={taRef}></textarea><br/>
            <button onClick={handleTextArea}>클릭</button>
            <hr/>
            <table id={'table'} border="1" cellPadding="5" cellSpacing="0">
                {arr.map((item, index) => <tr key={index}>
                    <td>{item.name}</td>
                    <td>{gu}</td>
                    <td>{dong}</td>
                    <td>{item.localPhone}</td>
                    <td>{item.cellPhone}</td>
                    <td>{item.postcode}</td>
                    <td>{item.addr}</td>
                </tr>)}
            </table>
        </Container>
    )
}

export default TextToTable;
