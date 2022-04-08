"use strict";var basketArray;function removeDuplicates(n,t){var e,a,s=[],i={};for(e in n)i[n[e][t]]=n[e];for(a in i)s.push(i[a]);return s}var uniqueArray=removeDuplicates(basketArray=null==localStorage.getItem("basketLocal")?[]:JSON.parse(localStorage.getItem("basketLocal")),"finalPrice");localStorage.setItem("basketLocal",JSON.stringify(uniqueArray));var basketContent=document.querySelector(".fnv-basketContent");uniqueArray.map(function(n){n.hasOwnProperty("pcName")&&(basketContent.innerHTML+='<div class="fnv-basketItem fnv-pc">\n            <div class="fnv-itemInfo">\n                <h5>'.concat(n.pcName,'</h5>\n                <div class="fnv-detailsPC">\n                    <div class="fnv-detailPC fnv-ssd">\n                        <svg xmlns="http://www.w3.org/2000/svg" width="25.493" height="25.493"\n                             viewBox="0 0 25.493 25.493">\n                            <path\n                                d="M3,31.493H28.493V25.12H3Zm2.549-4.78H8.1V29.9H5.549ZM3,6v6.373H28.493V6Zm5.1,4.78H5.549V7.593H8.1ZM3,21.933H28.493V15.56H3Zm2.549-4.78H8.1V20.34H5.549Z"\n                                transform="translate(-3 -6)" fill="#737373" />\n                        </svg>\n                        <div>\n                            <p class="fnv-nameOfDetail">\n                                твердотелый накопитель\n                            </p>\n                            <p class="fnv-aboutDetail">').concat(n.ssd," x").concat(n.ssdCount,'</p>\n                        </div>\n                    </div>\n                    <div class="fnv-detailPC fnv-cpu">\n                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\n                             width="31"\n                             height="32" viewBox="0 0 31 32">\n                            <defs>\n                                <pattern id="pattern1" preserveAspectRatio="none" width="100%" height="100%"\n                                         viewBox="0 0 24 24">\n                                    <image width="24" height="24"\n                                           xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB8SURBVHgB5ZVJCsAwCEW15Kw9VC+b0kVAbMQBpUjfKmA0+tEI8BVzzjN6phzQHZQMUslqQMRr+T7nV9BljDyw8xn8dUhmWC5p1fDEqERDMmhBuI90t1yikjmgzWKWyMNPJfIMnkmJrEkulwh3GdAPy0tFo8TJ2Gr9N1p/biebebzePgb0AAAAAElFTkSuQmCC" />\n                                </pattern>\n                            </defs>\n                            <rect id="l_2" width="31" height="32" fill="url(#pattern1)" />\n                        </svg>\n                        <div>\n                            <p class="fnv-nameOfDetail">\n                                процессор\n                            </p>\n                            <p class="fnv-aboutDetail">').concat(n.cpu,'</p>\n                        </div>\n                    </div>\n                    <div class="fnv-detailPC fnv-ram">\n                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\n                             width="31"\n                             height="32" viewBox="0 0 31 32">\n                            <defs>\n                                <pattern id="pattern2" preserveAspectRatio="none" width="100%" height="100%"\n                                         viewBox="0 0 24 24">\n                                    <image width="24" height="24"\n                                           xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABjSURBVHgB7ZNRCsAgDEOb4Vl3qF22Yx/CVlYNWgSh70tiTSy0IkkyC+pBVU8JBMD1ESID3l6lV1B/w2rW6xCHp9g+YDUqIIr9A4p38TdVrEYbjuKOafSyLQFWmO2itRNJMsYNDJgy3QoDOV0AAAAASUVORK5CYII=" />\n                                </pattern>\n                            </defs>\n                            <rect id="l_3" width="31" height="32" fill="url(#pattern2)" />\n                        </svg>\n                        <div>\n                            <p class="fnv-nameOfDetail">\n                                оперативная память\n                            </p>\n                            <p class="fnv-aboutDetail">').concat(n.ram," x").concat(n.ramCount,'</p>\n                        </div>\n                    </div>\n                    <div class="fnv-detailPC fnv-gpu">\n                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\n                             width="31"\n                             height="32" viewBox="0 0 31 32">\n                            <defs>\n                                <pattern id="pattern3" preserveAspectRatio="none" width="100%" height="100%"\n                                         viewBox="0 0 24 24">\n                                    <image width="24" height="24"\n                                           xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADFSURBVHgB7ZU9CgIxEIUTEbbRa1hpo9Wewzt4KE9g5TG00kYbvYaVNvELBFnQlTcSWZbdB49ks/OTzA/jXNvh636EEFbOYsj7tUXe5OCb7MD9GUNVkFsuWKbp80pI9oqe9AKMlywjuIFbWCSHeRyACTxy6zu8sd/BmaJoycGjsi+cCNXBGZaEZQyj8Tm8KIpSkgnLIeVhmY5O8UzRlasoVY1UOVVk7YNPDdf3QTYHER3tg1q0Zh68jUzrqHwZUkfmrw4awxM/Zl2mctjtEgAAAABJRU5ErkJggg==" />\n                                </pattern>\n                            </defs>\n                            <rect id="l_1" width="31" height="32" fill="url(#pattern3)" />\n                        </svg>\n                        <div>\n                            <p class="fnv-nameOfDetail">\n                                видеокарта\n                            </p>\n                            <p class="fnv-aboutDetail">').concat(n.gpu," x").concat(n.gpuCount,'</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="fnv-aboutPrice">\n                <p>Стоимость:</p>\n                <p class="fnv-price">').concat(parseInt(n.finalPrice),' ₽</p>\n                <p>Количество:</p>\n                <label>\n                    <input class="fnv-itemCount" type="text" size="1" value="1">\n                </label>\n                <button class="fnv-removeItem">\n                    Убрать из корзины\n                </button>\n            </div>\n            <div class="fnv-forImg">\n                <img src="').concat(n.img,'" alt="">\n            </div>\n        </div>')),n.hasOwnProperty("keyboardName")&&(basketContent.innerHTML+='<div class="fnv-basketItem fnv-keyb">\n                <div class="fnv-itemInfo">\n                    <h5>'.concat(n.keyboardName,'</h5>\n                    <div class="fnv-flexStats">\n                        <div>\n                            <span>Тип клавиатуры</span><span class="fnv-typeOfKey">').concat(n.keyboardType,'</span>\n                        </div>\n                        <div>\n                            <span>Тип подключения</span><span class="fnv-typeOfConnect">').concat(n.keyboardConnect,'</span>\n                        </div>\n                        <div>\n                            <span>Длина кабеля</span><span class="fnv-length">').concat(n.keyboardLength,'</span>\n                        </div>\n                        <div>\n                            <span>Материал</span><span class="fnv-material">').concat(n.keyboardMaterial,'</span>\n                        </div>\n                    </div>\n                </div>\n                <div class="fnv-aboutPrice">\n                    <p>Стоимость:</p>\n                    <p class="fnv-price">').concat(parseInt(n.finalPrice),' ₽</p>\n                    <p>Количество:</p>\n                    <label>\n                        <input class="fnv-itemCount" type="text" size="1" value="1">\n                    </label>\n                    <button class="fnv-removeItem">\n                        Убрать из корзины\n                    </button>\n                </div>\n                <div class="fnv-forImg">\n                    <img src="').concat(n.img,'" alt="">\n                </div>\n            </div>'))});for(var basketItems=basketContent.querySelectorAll(".fnv-basketItem"),_loop=function(n){var t=basketItems[n].querySelector(".fnv-price"),e=basketItems[n].querySelector(".fnv-itemCount"),a=parseInt(t.innerHTML);e.addEventListener("input",function(){t.innerHTML=a*e.value+" ₽"}),basketItems[n].querySelector(".fnv-removeItem").addEventListener("click",function(){for(var n=basketArray.length-1;0<=n;--n)basketArray[n].finalPrice===parseInt(t.innerHTML)/e.value&&basketArray.splice(n,1);localStorage.setItem("basketLocal",JSON.stringify(basketArray)),document.location.reload()})},i=0;i<basketItems.length;i++)_loop(i);
//# sourceMappingURL=_basket.js.map