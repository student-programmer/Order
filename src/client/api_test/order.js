import axios from 'axios'

const dataTest = {
    status: true,
    rows: [
        {
            'item' : 'Nord VPN 1 month premium',
            'price' : 5,
            'code' : 'sdfwfd2efsdfsdfssdf',
            'link' : 'www.zbigz.com',
        },
        {
            'item' : 'Nord VPN 1 month premium',
            'price' : 5,
            'code' : 'sdfwfd2efsdfsdfssdf',
            'link' : '',
        },
        {
            'item' : 'Nord VPN 1 month premium',
            'price' : 5,
            'code' : 'sdfwfd2efsdfsdfssdf',
            'link' : '',
        },
        {
            'item' : 'Nord VPN 1 month premium',
            'price' : 5,
            'code' : 'sdfwfd2efsdfsdfssdf',
            'link' : '',
        },
        {
            'item' : 'Nord VPN 1 month premium',
            'price' : 5,
            'code' : 'sdfwfd2efsdfsdfssdf',
            'link' : '',
        },
        {
            'item' : 'Nord VPN 1 month premium',
            'price' : 5,
            'code' : 'sdfwfd2efsdfsdfssdf',
            'link' : '',
        },
        {
            'item' : 'Nord VPN 1 month premium',
            'price' : 5,
            'code' : 'sdfwfd2efsdfsdfssdf',
            'link' : '',
        },
        {
            'item' : 'Nord VPN 1 month premium',
            'price' : 5,
            'code' : 'sdfwfd2efsdfsdfssdf',
            'link' : '',
        },
        {
            'item' : 'Nord VPN 1 month premium',
            'price' : 5,
            'code' : 'sdfwfd2efsdfsdfssdf',
            'link' : '',
        },
        {
            'item' : 'Nord VPN 1 month premium',
            'price' : 5,
            'code' : 'sdfwfd2efsdfsdfssdf',
            'link' : '',
        },
        
    ]
};

export function getAccountOrders(data) {
    console.log('getAccountOrders---->', data)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataTest)
        }, 200)
    })
}