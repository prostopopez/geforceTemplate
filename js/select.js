window.onload = function () {
    crearSelect();
}

function isMobileDevice() {
    return (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);
};


var li = new Array();

function crearSelect() {
    var div_cont_select = document.querySelectorAll('[data-mate-select=\'active\']');

    for (var e = 0; e < div_cont_select.length; e++) {
        div_cont_select[e].setAttribute('data-indx-select', e);
        div_cont_select[e].setAttribute('data-selec-open', 'false');
        var ul_cont = document.querySelectorAll('[data-indx-select=\'' + e + '\'] > .fnv-contListSelectMate > ul');
        var select_ = document.querySelectorAll('[data-indx-select=\'' + e + '\'] >select')[0];

        if (isMobileDevice()) {
            select_.setAttribute('data-selec-index', e);

            $(select_).on('change', function () {
                _selectOption(this.selectedIndex, this.getAttribute('data-selec-index'));
            });
        }

        var select_optiones = select_.options;
        document.querySelectorAll('[data-indx-select=\'' + e + '\']  > .fnv-selecionadoOpcion ')[0].setAttribute('data-n-select', e);
        document.querySelectorAll('[data-indx-select=\'' + e + '\']  > .fnv-iconSelectMate ')[0].setAttribute('data-n-select', e);

        for (var i = 0; i < select_optiones.length; i++) {
            li[i] = document.createElement('li');
            if (select_optiones[i].selected == true || select_.value == select_optiones[i].innerHTML) {
                li[i].className = 'active';
                document.querySelector('[data-indx-select=\'' + e + '\']  > .fnv-selecionadoOpcion ').innerHTML = select_optiones[i].innerHTML;
            }
            ;
            li[i].setAttribute('data-index', i);
            li[i].setAttribute('data-selec-index', e);
// funcion click al selecionar
            li[i].addEventListener('click', function () {
                _selectOption(this.getAttribute('data-index'), this.getAttribute('data-selec-index'));
            });

            li[i].innerHTML = select_optiones[i].innerHTML;
            ul_cont[0].appendChild(li[i]);

        }
        ; // Fin For select_optiones
    }
    ; // fin for divs_cont_select
} // Fin Function


var cont_slc = 0;

function openSelect(idx) {
    var idx1 = idx.getAttribute('data-n-select');
    var ul_cont_li = document.querySelectorAll('[data-indx-select=\'' + idx1 + '\'] .fnv-contSelectInt > li');
    var hg = 0;
    var slect_open = document.querySelectorAll('[data-indx-select=\'' + idx1 + '\']')[0].getAttribute('data-selec-open');
    var slect_element_open = document.querySelectorAll('[data-indx-select=\'' + idx1 + '\'] select')[0];

    if (isMobileDevice()) {
        if (window.document.createEvent) { // All
            var evt = window.document.createEvent('MouseEvents');
            evt.initMouseEvent('mousedown', false, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            slect_element_open.dispatchEvent(evt);
        } else if (slect_element_open.fireEvent) { // IE
            slect_element_open.fireEvent('onmousedown');
        } else {
            slect_element_open.click();
        }
    } else {


        for (var i = 0; i < ul_cont_li.length; i++) {
            hg += ul_cont_li[i].offsetHeight;
        };

        if (slect_open == 'false') {
            document.querySelectorAll('[data-indx-select=\'' + idx1 + '\']')[0].setAttribute('data-selec-open', 'true');
            document.querySelectorAll('[data-indx-select=\'' + idx1 + '\'] > .fnv-contListSelectMate > ul')[0].style.height = hg + 'px';
            document.querySelectorAll('[data-indx-select=\'' + idx1 + '\'] > .fnv-iconSelectMate')[0].style.transform = 'rotate(180deg)';
        } else {
            document.querySelectorAll('[data-indx-select=\'' + idx1 + '\']')[0].setAttribute('data-selec-open', 'false');
            document.querySelectorAll('[data-indx-select=\'' + idx1 + '\'] > .fnv-iconSelectMate')[0].style.transform = 'rotate(0deg)';
            document.querySelectorAll('[data-indx-select=\'' + idx1 + '\'] > .fnv-contListSelectMate > ul')[0].style.height = '0px';
        }
    }

} // fin function open_select

function salirSelect(indx) {
    var select_ = document.querySelectorAll('[data-indx-select=\'' + indx + '\'] > select')[0];
    document.querySelectorAll('[data-indx-select=\'' + indx + '\'] > .fnv-contListSelectMate > ul')[0].style.height = '0px';
    document.querySelector('[data-indx-select=\'' + indx + '\'] > .fnv-iconSelectMate').style.transform = 'rotate(0deg)';
    document.querySelectorAll('[data-indx-select=\'' + indx + '\']')[0].setAttribute('data-selec-open', 'false');
}


function _selectOption(indx, selc) {
    var select_ = document.querySelectorAll('[data-indx-select=\'' + selc + '\'] > select')[0];

    var li_s = document.querySelectorAll('[data-indx-select=\'' + selc + '\'] .fnv-contSelectInt > li');
    var p_act = document.querySelectorAll('[data-indx-select=\'' + selc + '\'] > .fnv-selecionadoOpcion')[0].innerHTML = li_s[indx].innerHTML;
    var select_optiones = document.querySelectorAll('[data-indx-select=\'' + selc + '\'] > select > option');

    for (var i = 0; i < li_s.length; i++) {
        if (li_s[i].className == 'active') {
            li_s[i].className = '';
        };

        li_s[indx].className = 'active';
    };

    select_optiones[indx].selected = true;
    select_.selectedIndex = indx;
    select_.onchange();
    salirSelect(selc);
}

