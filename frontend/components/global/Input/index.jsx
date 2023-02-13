import * as styled from "./style";
import {
    useEffect, 
    useState
} from "react";

export const input = ({
    id, 
    type,
    placeHolder,
    regex,
    maxLength, 
    width, 
    action 
}) => {
    const [
        value, 
        setValue
    ] = useState('');

    useEffect(() => {

        if (regex && !regex.test(value.slice(-1))) return setValue(value.substring(0, value.length -1));
        return;
    }, [value, regex])

    const CondicionalRenders = {
        SearchIcon() {
            return (
                <styled.IconContainer
                    onClick={() => action(value)}
                >
                    <styled.Icon
                        src={SearchSVG}
                    />
                </styled.IconContainer>
            )
        },        
    }

    return (
        <styled.inputContainer 
            type={type}
            width={width}
        >
            <styled.InputTextConcainer>
                <styled.InputText
                    id={id}
                    placeHolder={placeHolder}
                    onChange={(e) => setValue(e.target.value)}
                    type={type}
                    value={value}
                    maxLength={maxLength ? maxLength : 524288}
                />
            </styled.InputTextConcainer>
            {
                type === "search" ? CondicionalRenders.SearchIcon() : <></>
            }
        </styled.inputContainer>
    );
};