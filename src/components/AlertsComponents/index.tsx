import { useEffect } from "react";

interface Alert {
    text: string;
}

function AlertsComponents({ alerts }: { alerts: Alert[] }) {
    useEffect(() => {
        console.log(alerts)
    }, [alerts])

    return (
        <div>
        </div>
    );
}

export default AlertsComponents;