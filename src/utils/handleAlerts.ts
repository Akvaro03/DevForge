import { Dispatch, SetStateAction } from "react";

interface Alert {
    text: string;
}


function handleAlerts(setData: Dispatch<React.SetStateAction<Alert[]>>, newAlert: string) {
    setData((prev: Alert[]) => [...prev, { text: newAlert }])
    setTimeout(() => {
        setData(prev => {
            const indexAlert = prev.findLastIndex(alert => alert.text === newAlert)
            return prev.splice(indexAlert, 1);
        })
    }, 2500);
}

export default handleAlerts;