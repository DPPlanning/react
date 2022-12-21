const Client = [
    {
        "memberIdx": "0",
        "name": "김철수",
        "busynessNumber":"111-22-33333",
        "apiHost": "https://api.naver.com",
        "apiKey": "0100000000acd8dbd0585d985b16c22abcdf0ae93b69ed02a28585f249b0b473ef2bf81b0a",
        "customerId": "1095825",
        "secretKey": "AQAAAABjaicRx/MzIKFwgQuhgTkrVtoZcID0+tMOCGHaUN0CBg=="
    },
    {
        "memberidx": "1",
        "name": "김철수",
        "busynessNumber":"111-22-33333",
        "apiHost": "https://api.naver.com",
        "apiKey": "0100000000acd8dbd0585d985b16c22abcdf0ae93b69ed02a28585f249b0b473ef2bf81b0a",
        "customerId": "1095825",
        "secretKey": "AQAAAABjaicRx/MzIKFwgQuhgTkrVtoZcID0+tMOCGHaUN0CBg=="
    },
    {
        "memberIdx": "2",
        "name": "김철수",
        "busynessNumber":"111-22-33333",
        "apiHost": "https://api.naver.com",
        "apiKey": "0100000000acd8dbd0585d985b16c22abcdf0ae93b69ed02a28585f249b0b473ef2bf81b0a",
        "customerId": "1095825",
        "secretKey": "AQAAAABjaicRx/MzIKFwgQuhgTkrVtoZcID0+tMOCGHaUN0CBg=="
    },
    {
        "memberIdx": "3",
        "name": "김철수",
        "busynessNumber":"111-22-33333",
        "apiHost": "https://api.naver.com",
        "apiKey": "0100000000acd8dbd0585d985b16c22abcdf0ae93b69ed02a28585f249b0b473ef2bf81b0a",
        "customerId": "1095825",
        "secretKey": "AQAAAABjaicRx/MzIKFwgQuhgTkrVtoZcID0+tMOCGHaUN0CBg=="
    },
    {
        "memberIdx": "4",
        "name": "김철수",
        "busynessNumber":"111-22-33333",
        "apiHost": "https://api.naver.com",
        "apiKey": "0100000000acd8dbd0585d985b16c22abcdf0ae93b69ed02a28585f249b0b473ef2bf81b0a",
        "customerId": "1095825",
        "secretKey": "AQAAAABjaicRx/MzIKFwgQuhgTkrVtoZcID0+tMOCGHaUN0CBg=="
    },

]

export const getClient = (memberidx) => {
    return Client.filter((item) => item.memberidx === memberidx || memberidx=== '0' || memberidx=== '1'  );
}