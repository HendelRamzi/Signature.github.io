import { CountUp } from './node_modules/countup.js/dist/countUp.min.js';
const client = new CountUp('client_counter', 300, { enableScrollSpy: true,
    duration: 2,
    useEasing: false,
    useGrouping: false,
});

const rea = new CountUp('rea_counter', 1500, { enableScrollSpy: true,
    duration: 2,
    useEasing: false,
    useGrouping: false,
});


if (!client.error || !rea.error) {
    client.start();
    rea.start();
} else {
    console.error(client.error);
    console.error(rea.error);
}