import { useEffect } from "react";
import ModalComponent from "../modal";
import AlertTemplate from "@/template/alertTemplate";

interface Alert {
    text: string;
}

function AlertsComponents({ alerts }: { alerts: Alert[] }) {
    useEffect(() => {
        console.log(alerts)
    }, [alerts])


    return (
        <ModalComponent>
            <div className="flex-col gap-6 bg-opacity-75 transition-opacity flex justify-end items-end w-full h-full px-10 py-10">
                {alerts.map((alert, key) => (
                    <AlertTemplate color="red" tittle={alert.text} key={key} />
                ))}
            </div>
        </ModalComponent>
    );
}

export default AlertsComponents;