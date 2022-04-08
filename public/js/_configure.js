"use strict";for(var dropdown=document.querySelectorAll(".fnv-dropdowns > .fnv-dropdown"),_loop=function(e){var n=dropdown[e].querySelector(".fnv-dropTrigger"),o=n.querySelector(".fnv-leftSvgs"),r=dropdown[e].querySelector(".fnv-dropdownContent");o.addEventListener("click",function(e){o.contains(o)&&toggleFilterButton(r.classList.contains("fnv-openDrop"),r,n)})},i=0;i<dropdown.length;i++)_loop(i);function toggleFilterButton(e,n,o){e?(n.classList.remove("fnv-openDrop"),o.classList.remove("fnv-whileOpened")):(n.classList.add("fnv-openDrop"),o.classList.add("fnv-whileOpened"))}var ssdCount,gpuCount,ramCount,hddCount,finalPrice,prices={ssd:11500,cpu:21e3,gpu:101e3,ram:4700,motherboard:14e3,hdd:2900,cooler:4500,bp:7400};function changeFinal(){ssdCount=document.querySelector(".fnv-ssd .fnv-detailCount").value,gpuCount=document.querySelector(".fnv-gpu .fnv-detailCount").value,ramCount=document.querySelector(".fnv-ram .fnv-detailCount").value,hddCount=document.querySelector(".fnv-hdd .fnv-detailCount").value,finalPrice=prices.ssd*ssdCount+prices.cpu+prices.gpu*gpuCount+prices.ram*ramCount+prices.motherboard+prices.hdd*hddCount+prices.cooler+prices.bp,document.querySelector(".fnv-finalPrice").innerHTML=finalPrice+"₽"}window.onload=function(){changeFinal()};for(var countDropdowns=document.querySelectorAll(".fnv-dropdowns .fnv-dropdown .fnv-plusMinus"),_loop2=function(e){var n=1;countDropdowns[e].querySelector(".fnv-minus")&&countDropdowns[e].querySelector(".fnv-minus").addEventListener("click",function(){1<n&&(n--,countDropdowns[e].querySelector(".fnv-detailCount").value=n),changeFinal()}),countDropdowns[e].querySelector(".fnv-plus")&&countDropdowns[e].querySelector(".fnv-plus").addEventListener("click",function(){n++,countDropdowns[e].querySelector(".fnv-detailCount").value=n,changeFinal()})},_i=0;_i<countDropdowns.length;_i++)_loop2(_i);for(var basketArray,dropdowns=document.querySelectorAll(".fnv-dropdowns .fnv-dropdown"),_loop3=function(t){var c;dropdowns[t].querySelectorAll(".fnv-dropdownItem")&&(c=dropdowns[t].querySelectorAll(".fnv-dropdownItem"),dropdowns[t].querySelectorAll(".fnv-dropdownItem .fnv-choiceCheck button")&&function(){for(var r=dropdowns[t].querySelectorAll(".fnv-dropdownItem .fnv-choiceCheck button"),e=0;e<c.length;e++)!function(n){var o=c[n].querySelector(".fnv-choiceCheck");o.querySelector("button").addEventListener("click",function(){for(var e=0;e<r.length;e++)r[e].classList.remove("fnv-active");dropdowns[t].querySelector(".fnv-detailShort").innerHTML=o.querySelector("p").innerHTML,o.querySelector("button").classList.add("fnv-active"),prices.ssd=0===n?11500:19603,changeFinal()})}(e)}())},_i2=0;_i2<dropdowns.length;_i2++)_loop3(_i2);basketArray=null==localStorage.getItem("basketLocal")?[]:JSON.parse(localStorage.getItem("basketLocal"));var configurePcName=document.querySelector(".fnv-aboutPc h4").innerHTML,configureInfo=document.querySelector(".fnv-dropdowns"),configureToBasket=document.querySelector(".fnv-toBasket"),configureImage=document.querySelector(".fnv-aboutPc img").src;configureToBasket.addEventListener("click",function(){var e=configureInfo.querySelector(".fnv-ssd .fnv-detailShort").innerHTML,n=configureInfo.querySelector(".fnv-cpu .fnv-detailShort").innerHTML,o=configureInfo.querySelector(".fnv-gpu .fnv-detailShort").innerHTML,r=configureInfo.querySelector(".fnv-ram .fnv-detailShort").innerHTML,t=configureInfo.querySelector(".fnv-hdd .fnv-detailShort").innerHTML,c=configureInfo.querySelector(".fnv-motherBoard .fnv-detailShort").innerHTML,u=configureInfo.querySelector(".fnv-cooler .fnv-detailShort").innerHTML,d=configureInfo.querySelector(".fnv-bp .fnv-detailShort").innerHTML;basketArray.push({pcName:configurePcName,ssd:e,ssdCount:parseInt(ssdCount),cpu:n,gpu:o,gpuCount:parseInt(gpuCount),ram:r,ramCount:parseInt(ramCount),hdd:t,hddCount:parseInt(hddCount),motherBoard:c,cooler:u,bp:d,img:configureImage,finalPrice:finalPrice}),localStorage.setItem("basketLocal",JSON.stringify(basketArray))});
//# sourceMappingURL=_configure.js.map