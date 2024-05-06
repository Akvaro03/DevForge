import { useEffect, useRef } from "react";

function IsInView({ funcInView }: { funcInView: () => void }) {
    const h5Ref = useRef(null)
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

        if (h5Ref.current) {
            observer.observe(h5Ref.current);
        }

        // Limpiar el observer cuando el componente se desmonte
        return () => observer.disconnect();
    }, [funcInView]);
    return (
        <h5 ref={h5Ref} />
    )
}

export default IsInView;