import {Modalized} from "../libs/modalized";

document.addEventListener('DOMContentLoaded', () => {
    /**
     * name — уникальное название popup
     * overlay — использовать overlay (нужно добавить компонент overlay в проект)
     * autoplay — открытие popup по времени
     * autoplayTime — время через которое откроется popup. Время указывается в мс. 1 сек = 1 000 мс.
     * autoplayOffsetTime — время в секундах на которое нужно сохранить закрытым popup.
     * customTitle — замена заголовка (ищет название по data-modals-title на кнопке)
     * formName — замена скрытого поля с названием формы (ищет название по data-modals-form-name на кнопке)
     * @type {Modalized}
     */
    const modalCallback = new Modalized({
        name: 'callback',
        overlay: true
    })
/*    const modalCallback2 = new Modalized({
        name: 'callback2',
        overlay: true,
        autoplay: true,
        autoplayTime: 1000,
        autoplayOffsetTime: 86400
    })*/
})
