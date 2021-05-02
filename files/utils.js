export const parseRequestUrl = () => {

    let url = document.location.hash.toLocaleLowerCase();
    let request = url.split('/');
    return { // [0] is empty string ,maybe coz it was splitted /
        resource : request[1], // product
        id : request[2], // id
        verb : request[3], // undefined 
    }
}