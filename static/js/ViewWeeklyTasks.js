const renderWeeklyChart = (mondata,tuedata,weddata,thudata,fridata,satdata,sundata) => {
const ctx = document.getElementById('myChartWeekly').getContext('2d');
const myChartWeekly = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Breaks', 'Tasks', 'Meetings'],
        datasets: [
            
        {
            label: 'Monday',
            data: mondata,
            backgroundColor: [
                'rgba(0, 255, 0, 0.2)',
                'rgba(0, 255, 0, 0.2)',
                'rgba(0, 255, 0, 0.2)'
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)'
            ],
            borderWidth: 1
        },





        {
            label: 'Tuesday',
            data: tuedata,
            backgroundColor: [
                'rgba(0, 0, 255, 0.2)',
                'rgba(0, 0, 255, 0.2)',
                'rgba(0, 0, 255, 0.2)'
                
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)'
            ],
            borderWidth: 1
        },



        {
            label: 'Wednesday',
            data: weddata,
            backgroundColor: [
                'rgba(220, 20, 60, 0.2)',
                'rgba(220, 20, 60, 0.2)',
                'rgba(220, 20, 60, 0.2)'
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)'
            ],
            borderWidth: 1
        },



        {
            label: 'Thursday',
            data: thudata,
            backgroundColor: [
                'rgba(255, 140, 0, 0.2)',
                'rgba(255, 140, 0, 0.2)',
                'rgba(255, 140, 0, 0.2)'
                
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)'
            ],
            borderWidth: 1
        },
    



        {
            label: 'Friday',
            data: fridata,
            backgroundColor: [
                'rgba(255, 0, 0, 0.2)',
                'rgba(255, 0, 0, 0.2)',
                'rgba(255, 0, 0, 0.2)'
                
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)'
            ],
            borderWidth: 1
        },


        {
            label: 'Saturday',
            data: satdata,
            backgroundColor: [
                'rgba(173, 216, 230, 0.2)',
                'rgba(173, 216, 230, 0.2)',
                'rgba(173, 216, 230, 0.2)'
                
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)'
            ],
            borderWidth: 1
        },



        {
            label: 'Sunday',
            data: sundata,
            backgroundColor: [
                'rgba(255, 0, 255, 0.2)',
                'rgba(255, 0, 255, 0.2)',
                'rgba(255, 0, 255, 0.2)'
                
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)'
            ],
            borderWidth: 1
        },
    
    
    
    
    ]
    },
    options: {
        scales: {
            yAxes: [{ ticks:{beginAtZero:true},stacked: true}],
            xAxes: [{stacked: true}]
        }
    }
});
};





const getWeeklyChartData = () => {
    fetch("get_weekly_tasks")
      .then((res) => res.json())
      .then((Wresults) => {
        
        const WMONDAY = Wresults.MONDAY;
        const WTUESDAY = Wresults.TUESDAY;
        const WWEDNESDAY = Wresults.WEDNESDAY;
        const WTHURSDAY = Wresults.THURSDAY;
        const WFRIDAY = Wresults.FRIDAY;
        const WSATURDAY = Wresults.SATURDAY;
        const WSUNDAY = Wresults.SUNDAY;
        const [mondata] = [Object.values(WMONDAY)];
        const [tuedata] = [Object.values(WTUESDAY)];
        const [weddata] = [Object.values(WWEDNESDAY)];
        const [thudata] = [Object.values(WTHURSDAY)];
        const [fridata] = [Object.values(WFRIDAY)];
        const [satdata] = [Object.values(WSATURDAY)];
        const [sundata] = [Object.values(WSUNDAY)];
        renderWeeklyChart(mondata,tuedata,weddata,thudata,fridata,satdata,sundata);
        });
  };
  
  document.onload = getWeeklyChartData();
