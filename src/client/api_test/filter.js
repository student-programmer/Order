import axios from 'axios'

const dataTest = {
    status: true,
    rows: {
        'categories' : {
            'type': 'checkbox',
            'title': 'Category',
            'data': [
                {
                    'id' : 1,
                    'name'  : 'VPN',
                },
                {
                    'id' : 2,
                    'name'  : 'Hosting',
                },
                {
                    'id' : 3,
                    'name'  : 'Filesharing',
                },
            ]
        },
        'duration' : {
            'type': 'checkbox',
            'title': 'Duration',
            'data': [
                {
                    'id' : 1,
                    'name'  : '1 month',
                },
                {
                    'id' : 2,
                    'name'  : '2 month',
                },
                {
                    'id' : 3,
                    'name'  : '3 month',
                },
                {
                    'id' : 4,
                    'name'  : '12 month',
                },
            ]
        },        
    }
};

const dataTestVpn = {
    status: true,
    rows: {
        'countries' : {
            'type': 'dropdown',
            'title': 'Country',
            'multiple' : true,
            'data': [
                {
                    'id' : 1,
                    'name'  : 'Andora',
                },
                {
                    'id' : 2,
                    'name'  : 'Germany',
                },
                {
                    'id' : 3,
                    'name'  : 'USA',
                },
            ]
        },
        'technologies' : {
            'type': 'checkbox',
            'title': 'Techonoly',
            'multiple' : true,
            'data': [
                {
                    'id' : 1,
                    'name'  : 'L2TP',
                },
                {
                    'id' : 2,
                    'name'  : 'TLS',
                },
                {
                    'id' : 3,
                    'name'  : 'PPTP',
                },
            ]
        },
        'licenses' : {
            'type': 'dropdown',
            'title': 'License for',
            'multiple' : true,
            'data': [
                {
                    'id' : 1,
                    'name'  : 'Andora',
                },
                {
                    'id' : 2,
                    'name'  : 'Germany',
                },
                {
                    'id' : 3,
                    'name'  : 'USA',
                },
            ]
        },
        'servers' : {
            'type': 'dropdown',
            'title': 'Servers',
            'multiple' : true,
            'data': [
                {
                    'id' : 1,
                    'name'  : 'Andora',
                },
                {
                    'id' : 2,
                    'name'  : 'Germany',
                },
                {
                    'id' : 3,
                    'name'  : 'USA',
                },
            ]
        },
    }
};

export function getFilterList(data) {
    console.log('getFilterList---->', data)
    
    let rows = data['category'] == 'bundle' ? dataTest : dataTestVpn
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(rows)
        }, 3000)
    })
}