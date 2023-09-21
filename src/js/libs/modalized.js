import {visibleOverlay} from "./overlay";
import {getCookie, setCookie} from "./cookies"

export function Modalized(options) {
    this.name = options.name;
    this.overlay = options.overlay || false;
    this.autoplay = options.autoplay || false;
    this.autoplayTime = options.autoplayTime || 0;
    this.autoplayOffsetTime = options.autoplayOffsetTime || 0;
    this.customTitle = options.customTitle || false;
    this.formName = options.formName || false;
    initModals(this);
    if (options.autoplay === true) openModalTimeout(this) // Если нужен автопоказ popup
}

function initModals(options) {
    const modalsLink = document.querySelectorAll(`[data-modals-link=${options.name}]`);
    //Блок проверок на ошибки
    if (modalsLink.length === 0 && options.autoplay === false) return null

    //Открытие popup
    modalsLink.forEach((link) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            //Находим popup и ссылки на него. Если чего-то нет, показываем ошибку.
            const modalName = link.getAttribute('data-modals-link');
            const modalItem = document.querySelector(`[data-modals-type='${modalName}']`);
            checkError('domItem', modalItem, `Not found popup ${options.name}`);
            if (!modalItem) return null
            modalItem.classList.add('_active');
            if (options.overlay === true) visibleOverlay('show');
            if (options.customTitle === true) changePopupName(link, modalItem);
            if (options.formName === true) changeFormName(link, modalItem);
            closeModal(modalItem, options);
        })
    })
}

//Открытие popup по времени
function openModalTimeout(options) {
    //Находим popup. Если нет, то показываем ошибку. Также делается проверка на наличие cookies
    const modalItem = document.querySelector(`[data-modals-type='${options.name}']`);
    if (!modalItem || getCookie(options.name)) {
        checkError('domArray', modalItem, `Not found popup ${options.name}`);
        return null
    }

    setTimeout(() => {
        modalItem.classList.add('_active');
        if (options.overlay === true) visibleOverlay('show', options);
        closeModal(modalItem, options);
    }, options.autoplayTime)
}

//Закрытие popup
function closeModal(item, options = null) {
    const arr = item.querySelectorAll('.js-close-modal')
    const arr2 = item.querySelectorAll('.js-close-modal-cookies-only')
    if (arr.length === 0 && arr2.length === 0) return null;
    arr.forEach(closeItem => {
        closeItem.addEventListener('click', function (e) {
            e.preventDefault();
            item.classList.remove('_active');
            visibleOverlay('hide');
            removeEventListener('click', closeModal);
            if (options.autoplay === true) {
                setCookie(options.name, 'true', {secure: true, 'max-age': options.autoplayOffsetTime});
            }
        })
    })

    //Запоминание, что popup больше не должен появляться. Без закрытия
    arr2.forEach(closeItem => {
        closeItem.addEventListener('click', function (e) {
            e.preventDefault();
            if (options.autoplay === true) {
                setCookie(options.name, 'true', {secure: true, 'max-age': options.autoplayOffsetTime});
            }
        })
    })
}

//Замена названия popup
function changePopupName(link, modal) {
    const titlePopup = link.getAttribute('data-modals-title');
    const titleField = modal.querySelector('.js-modal-title');
    if (titleField) titleField.textContent = titlePopup;

}

//Замена названия формы
function changeFormName(link, modal) {
    const formName = link.getAttribute('data-modals-form-name');
    const inputFormName = modal.querySelector("[name='form_name']");
    if (inputFormName) inputFormName.value = formName;
}

//Управление видимостью popup для внешних и внутренних модулей
export function visibleModal(visible = 'toggle', modalName = null) {
    let modals = document.querySelectorAll('.modal');
    switch (visible) {
        case 'show':
            modals.forEach((item) => {
                if(item.getAttribute('data-modals-type') === modalName) {
                    item.classList.add('_active');
                    closeModal(item)
                    visibleOverlay('show')
                }
            });
            break;
        case 'hide':
            modals.forEach((item) => {
                item.classList.remove('_active');
            });
            break;
        default:
            modals.forEach((item) => {
                item.classList.toggle('_active');
            });
    }
}

function checkError(type, item, text) {
    let commonError = '',
        error = null;
    if (type === 'domArray' && item.length === 0) {
        commonError = new Error(text);
        error = true;
    } else if (type === 'domItem' && !item) {
        commonError = new Error(text);
        error = true;
    }
    if (error === true) {
        console.error(commonError.stack)
        return true
    }
}
