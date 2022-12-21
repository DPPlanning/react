import React from 'react';

const Client = ({client,style}) => {
    const DownLoadCsv = () => {
        console.log(client);
    }
    return (
        <div className={style.naver__main_box_list_item_list} onClick={DownLoadCsv}>
        <div>
            {client.name}
        </div>
        <div>
            {client.apiKey}
        </div>
        <div>
            {client.customerId}
        </div>
        <div>
           <button>다운로드</button>
        </div>
    </div>
    );
};

export default Client;