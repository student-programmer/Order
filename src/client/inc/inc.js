export function cloneObject(object) {
    let newObject = {}
    
    for(let key in object) {
        newObject[key] = object[key]
    }
    
    return newObject
}

export function checkNumberInput(keyCode) {
    if (keyCode == 46 || keyCode == 8 || keyCode == 9 || keyCode == 27 || keyCode == 110 || keyCode == 190 ||
          (keyCode == 65 && ctrlKey === true) ||
          (keyCode >= 35 && keyCode <= 39)) {
            return true
    } else {
        if ((keyCode < 48 || keyCode > 57) && (keyCode < 96 || keyCode > 105)) {
            return false
        } 
    }
    
    return true;
}

export function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return re.test(email);
}

export function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export function parcePrice(price) {
    price = price.toString();
    return price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}


