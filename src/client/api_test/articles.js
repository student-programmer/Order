const dataArticlesInfo = {
    status: true, 
    rows: [ 
        {
            'id': 1,
            'image': 'https://skesov.ru/wp-content/uploads/2020/11/how-vpn-works-1536x982.jpg',
            'title': 'First articles',
            'description': "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, sequi? Distinctio necessitatibus omnis nulla vero quod itaque porro? Eveniet id ipsa ad nam libero facere possimus quaerat quia praesentium totam!",
        },
        {
            'id': 2,
            'image': 'https://skesov.ru/wp-content/uploads/2020/11/how-vpn-works-1536x982.jpg',
            'title': 'Second articles',
            'description': "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, sequi? Distinctio necessitatibus omnis nulla vero quod itaque porro? Eveniet id ipsa ad nam libero facere possimus quaerat quia praesentium totam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, sequi? Distinctio necessitatibus omnis nulla vero quod itaque porro? Eveniet id ipsa ad nam libero facere possimus quaerat quia praesentium totam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, sequi? Distinctio necessitatibus omnis nulla vero quod itaque porro? Eveniet id ipsa ad nam libero facere possimus quaerat quia praesentium totam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, sequi? Distinctio necessitatibus omnis nulla vero quod itaque porro? Eveniet id ipsa ad nam libero facere possimus quaerat quia praesentium totam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, sequi? Distinctio necessitatibus omnis nulla vero quod itaque porro? Eveniet id ipsa ad nam libero facere possimus quaerat quia praesentium totam!",
        },
        ]
    };
    export function getArticlesList(data) {
        console.log('getNewsList---->', data)
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(dataArticlesInfo)
            }, 200)
        })
    }