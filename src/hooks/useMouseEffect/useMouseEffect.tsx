// React
import { useEffect } from 'react';

const useCursorEffect = (className: string) => {
    useEffect(() => {
        const isCursorLocked = false;
        const cursor = document.getElementById('cursor');
        const cursorContentWrap = document.querySelector('.cursor-content-wrap');
        const cursorContent = document.querySelector('.cursor-content');
        const cursorHighlight = document.querySelector('.cursor-highlight');

        function cursorMove(event: MouseEvent) {
            if (!isCursorLocked && cursor) {
                cursor.style.top = event.clientY + 'px';
                cursor.style.left = event.clientX + 'px';
                (cursorContent as HTMLElement).style.opacity = '50%';
            }
        }

        document.addEventListener('mousemove', cursorMove);

        document.querySelectorAll(`.${className}`).forEach(container => {
            container.addEventListener(
                'mouseenter',
                event => {
                    const target = event.currentTarget as HTMLElement;
                    if (target.classList.contains(className)) {
                        const containerRect = target.getBoundingClientRect();

                        (cursorContentWrap as HTMLElement).style.opacity = '0%';
                        (cursorHighlight as HTMLElement).style.opacity = '40%';
                        (cursorHighlight as HTMLElement).style.width = containerRect.height / 2 + 'px';
                        (cursorHighlight as HTMLElement).style.height = containerRect.height / 2 + 'px';
                        (cursorHighlight as HTMLElement).style.webkitFilter = 'blur(' + containerRect.height / 4 + 'px)';
                        (cursorHighlight as HTMLElement).style.filter = 'blur(' + containerRect.height / 4 + 'px)';
                    }
                },
                { passive: true }
            );

            container.addEventListener('mouseleave', () => {
                (cursorContentWrap as HTMLElement).style.opacity = '100%';
                (cursorHighlight as HTMLElement).style.opacity = '0%';
            });
        });

        return () => {
            document.removeEventListener('mousemove', cursorMove);
        };
    }, [className]);
};

export default useCursorEffect;
