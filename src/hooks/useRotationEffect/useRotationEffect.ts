// React
import { useEffect } from 'react';

const useRotationEffect = (className: string) => {
    useEffect(() => {
        const elements = document.querySelectorAll(`.${className}`);

        elements.forEach(element => {
            const htmlElement = element as HTMLElement;

            const handleMouseMove = (event: MouseEvent) => {
                // Obtém as dimensões da classe .action
                const actionRect = htmlElement.getBoundingClientRect();
                const actionWidth = actionRect.width;
                const actionHeight = actionRect.height;

                // Calcula o ângulo de rotação com base na posição do mouse dentro da classe
                const rotateY = ((event.clientX - actionRect.left) / actionWidth - 0.5) * 30;
                const rotateX = ((event.clientY - actionRect.top) / actionHeight - 0.5) * -30;

                // Aplica as transformações CSS com base nas coordenadas do mouse
                htmlElement.style.willChange = 'transform';
                htmlElement.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                htmlElement.style.transformStyle = 'preserve-3d';
            };

            const handleMouseLeave = () => {
                htmlElement.style.transform = 'rotateX(0deg) rotateY(0deg)';
            };

            // Redefine a transformação quando o mouse sai da classe
            htmlElement.addEventListener('mousemove', handleMouseMove);
            htmlElement.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                htmlElement.removeEventListener('mousemove', handleMouseMove);
                htmlElement.removeEventListener('mouseleave', handleMouseLeave);
            };
        });
    }, [className]);
};

export default useRotationEffect;
