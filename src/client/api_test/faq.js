const dataFAQinfo = {
    status: true, 
    rows: [ 
        {
            'id': 1,
            'question': 'What is VPN',
            'answer': 'This is a programm for ...',
            'index': 0
           
        },
        {
            'id': 2,
            'question': 'What is VPN',
            'answer': 'This is a programm for ...',
            'index': 1
        },
        {
            'id': 3,
            'question': 'What is VPN',
            'answer': 'This is a programm for ...',
            'index': 2
        },
        ]
    };
    export function getFAQlist(data) {
        console.log('getFAQlist---->', data)
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(dataFAQinfo)
            }, 200)
        })
    }