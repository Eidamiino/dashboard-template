import Dashboard from './lib/features/home/Dashboard.svelte';
import Page1 from './lib/features/pages/Page1.svelte';
import Page2 from './lib/features/pages/Page2.svelte';
import Page3 from './lib/features/pages/Page3.svelte';

const Pages = [
    {
        name: "Page1",
        url: "/page1",
    },
    {
        name: "Page2",
        url: "/page2",
    },
    {
        name: "Page3",
        url: "/page3",
    }
];

const PageUrls = Pages.reduce((acc, x) => {
    acc[x.name] = x.url;
    return acc;
}, {});

export default {
    [PageUrls.Page1]: Page1,
    [PageUrls.Page2]: Page2,
    [PageUrls.Page3]: Page3,
    '*': Dashboard,
};