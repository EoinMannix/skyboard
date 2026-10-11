const dashboard = function(req, res){
    res.render('dashboard', { 
        title: 'SkyBoard - Live departures and arrivals',
        pageHeader: {
            title: 'Dublin Airport',
            code: 'DUB',
            strapline: 'Live departures and arrivals. 2 flights are delayed and 1 is canclled.'
            },
            departures: [{
                starred: true,
                flight: 'EI152',
                place: 'London (LHR)',
                time: '06:45',
                gate: '102',
                status: 'On Time',
                colour: 'success'
            },
            {
                starred: false,
                flight: 'FR1024',
                place: 'Paris (BVA)',
                time: '06:50',
                gate: '216',
                status: 'Boarding',
                colour: 'warning'
            },
            {
                starred: true,
                flight: 'EI105',
                place: 'New York (JFK)',
                time: '07:05',
                gate: '405',
                status: 'Check-in',
                colour: 'warning'
            },
            {
                starred: false,
                flight: 'FR7132',
                place: 'Barcalona (BCN)',
                time: '07:15',
                gate: '210',
                status: 'Delayed',
                colour: 'danger'
            },
            {
                starred: false,
                flight: 'EK162',
                place: 'Dubai (DXB)',
                time: '07:40',
                gate: '332',
                status: 'On time',
                colour: 'success'
            },
            {
                starred: false,
                flight: 'EI350',
                place: 'Munich (MUC)',
                time: '08:10',
                gate: '305',
                status: 'Cancelled',
                colour: 'danger'
            }],
            
            arrivals: [
            {
                starred: false,
                flight: 'EI153',
                place: 'London (LHR)',
                time: '06:40',
                terminal: 'T2',
                status: 'Landed',
                colour: 'success'
            },
            {
                starred: true,
                flight: 'FR936',
                place: 'Krakow (KRK)',
                time: '06:45',
                terminal: 'T1',
                status: 'On time',
                colour: 'success'
            },
            {
                starred: false,
                flight: 'EI106',
                place: 'New York (JFK)',
                time: '07:00',
                terminal: 'T2',
                status: 'On time',
                colour: 'success'
            },
            {
                starred: false,
                flight: 'LH978',
                place: 'Frankfurt (FRA)',
                time: '07:10',
                terminal: 'T1',
                status: 'Baggage',
                colour: 'warning' 
            },
            {
                starred: true,
                flight: 'QR17',
                place: 'Doha (DOH)',
                time: '07:15',
                terminal: 'T2',
                status: 'Delayed',
                colour: 'danger'
            },
            {
                starred: false,
                flight: 'FR553',
                place: 'Faro (FAO)',
                time: '07:45',
                terminal: 'T1',
                status: 'Expected',
                colour: 'warning'
            }],
            
            watchlist: [{
                flight: 'EI152',
                status: 'On time',
                colour: 'success'
            },
            {
                flight: 'EI105',
                status: 'Check-in',
                colour: 'warning'
            },
            {
                flight: 'FR963',
                status: 'On time',
                colour: 'success'
            },
            {
                flight: 'QR17',
                status: 'Delayed',
                colour: 'danger'
            }]
        });
     };

module.exports = {
    dashboard
};