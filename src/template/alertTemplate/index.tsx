import Style from "./alertTemplate.module.css"
interface AlertProp {
    tittle: string,
    color: "green" | "red"
}

function AlertTemplate({ tittle, color }: AlertProp) {
    const styleAlert = color === "red" ? Style.alertBoxFailed : Style.alertBoxTrue

    return (
        <div className={styleAlert} >
            {tittle}
        </div>
    );
}

export default AlertTemplate;