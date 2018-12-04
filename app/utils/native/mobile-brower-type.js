const ua = navigator.userAgent.toLowerCase();

const type = (ua.indexOf('android') > -1 || ua.indexOf('linux') > -1)?'android':'ios';

export default type;