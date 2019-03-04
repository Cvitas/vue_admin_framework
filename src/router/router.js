/**
 *
 * @author Chasen
 * @create 2019-03-02 12:40
 **/
const Home = () => import(/* webpackChunkName: "Home" */'@/views/Home.vue');
const About = () => import(/* webpackChunkName: "About" */'@/views/About.vue');

export default {
    mode: 'hash',
    base: __dirname,
    routes: [{
        path: '/About', component: About, name: "About", meta: {title: "点餐"}, children: []
    },
        {path: '/', component: Home, name: "Home", meta: {title: "Home"}}
    ]
}