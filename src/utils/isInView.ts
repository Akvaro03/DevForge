import { useEffect } from "react";

function isInView(funcInView: () => void, ref: React.MutableRefObject<null>) {
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5 // El h2 debe ser al menos un 50% visible para activar la intersección
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    funcInView()
                }
            });
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        // Limpiar el observer cuando el componente se desmonte
        return () => observer.disconnect();
    }, []);
}

export default isInView;