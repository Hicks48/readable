// Source for this was taken from 
// https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 
export function generateUUID() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }