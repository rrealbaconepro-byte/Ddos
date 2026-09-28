import http from 'k6/http';

export const options = {
  stages: [
    { duration: '1m', target: 25 },
    { duration: '2m', target: 100 },
    { duration: '2m', target: 250 },
    { duration: '1m', target: 0 },
  ],
};

export default function () {
  http.get('https://rovival.onrender.com');
}
