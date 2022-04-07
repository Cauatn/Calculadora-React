import styled from "styled-components";
import Button from "../Button";

const BotaoCaixa = styled.div`
    width: 100%;
    height: calc(100% - 110px);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 10px;
`

export default function ButtonBox() {

    const btnValues = [
        ["C", "+-", "%", "/"],
        [7, 8, 9, "X"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        [0, ".", "="],
      ];

    return (
        <BotaoCaixa>
            {  btnValues.flat().map((btn, key) => {
                return (
                    <Button
                        key={key}
                        valor={`${btn}`}
                        className={btn === "=" ? "equals" : ""}
                        onclick={()=>{}}
                    />
                )
            }) }
        </BotaoCaixa>
    )
}