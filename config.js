const PAGE_URL = process.env.NODE_ENV === 'production'
? 'placeholder'
: 'http://localhost:5005';

module.exports = {  PAGE_URL };