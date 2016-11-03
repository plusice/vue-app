import { EventEmitter } from 'events';

const store = new EventEmitter();

export default store;


store.pageData = {
	sidebarTree: {
        url: '/',
        links:[
            {
                name: 'nav.index',
                iconClass: 'am-icon-file',
                url: '/index'
            },
            {
                name: 'nav.module1',
                iconClass: 'am-icon-file',
                url: '/module1',
                links: [
                    {
                        name: 'nav.module1_1',
                        iconClass: 'am-icon-file',
                        url: '/module1/a'
                    },
                    {
                        name: 'nav.module1_2',
                        iconClass: 'am-icon-file',
                        url: '/module1/b'
                    }
                ]
            }
        ]
    }
}