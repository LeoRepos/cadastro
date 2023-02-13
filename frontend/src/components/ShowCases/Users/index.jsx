import { Header } from "../../global/Header";
import * as CPT from "./ExportComponentsUsers"
import * as styled from "./style";

export const WhosCaseUsers = () => {
    return (    
        <styled.ShowCaseContainer>
            <Header CurrentPage={"Usuários"} />
            <CPT.TitleTable />
        </styled.ShowCaseContainer>
    );
};