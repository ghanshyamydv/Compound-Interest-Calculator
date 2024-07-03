window.addEventListener('load',()=>{
    let params=(new URL(document.location)).searchParams;
    let takenyear=params.get('takenyear')
    let takenmonth=params.get("takenmonth");
    let takenday=params.get("takenday");


    let returnyear=params.get("returnyear");
    let returnmonth=params.get("returnmonth");
    let returnday=params.get("returnday");

    let principle=params.get("principle");
    let rate=params.get("rate");

    //calculating year
    let year=parseInt(returnyear)-parseInt(takenyear);
    let month=0;
    let day=0;
    //calculating month
    if(parseInt(returnmonth)<parseInt(takenmonth)){
        year=year-1;
        month=(parseInt(returnmonth)+12)-parseInt(takenmonth);

    }else{
        month=parseInt(returnmonth)-parseInt(takenmonth)
    }
    //calculating day
    if(parseInt(returnday)<parseInt(takenday)){
        month=month-1;
        day=(parseInt(returnday)+30)-parseInt(takenday);

    }else{
        day=parseInt(returnday)-parseInt(takenday)
    }

    let pvalue=parseInt(principle);
    let r=parseInt(rate);

    let p=pvalue;
    for(let i=year;i>=1;i--){
        let oneyearinterest=(p*12*r)/100;
        p+=oneyearinterest;
    };
    let yearinterest=p-pvalue;
    let monthinterest=(p*month*r)/100;
    let onemonthinterest=monthinterest/month;
    let dayinterest=(onemonthinterest/30)*day;
    let totalinterest=Math.round(yearinterest+monthinterest+dayinterest);
    let amount=pvalue+totalinterest;
    
    // console.log(year);
    // console.log(month);
    // console.log(day);
    // console.log(totalinterest);
    // console.log(amount);

    let returndate=document.querySelector('.return');
    returndate.innerHTML=`रकम भुझाउने मिति : <span>${returnyear}</span> साल <span>${returnmonth}</span> महिना <span>${returnday}</span> गते`;
    let takendate=document.querySelector('.borrow');
    takendate.innerHTML=`रकम भुझाउने मिति : <span>${takenyear}</span> साल <span>${takenmonth}</span> महिना <span>${takenday}</span> गते`
    let pr=document.querySelector('.pr');
    pr.innerHTML=`मूलधन : रु <span>${principle}</span>`
    let prrate=document.querySelector('.rate');
    prrate.innerHTML=`ब्याज दर : <span>${rate}</span> % प्रति महिना`;
    let totaltime=document.querySelector('.totaltime');
    totaltime.innerHTML=`ब्याज चलेको : <span>${year}</span> साल <span>${month}</span> महिना <span>${day}</span> दिन`;
    let tinterest=document.querySelector('.interest');
    tinterest.innerHTML=`जम्मा ब्याज : रु <span>${totalinterest}</span>`;
    let tamount=document.querySelector('.amount');
    tamount.innerHTML=`जम्मा रकम ब्याज सहित : रु <span>${amount}</span>`;

    let calculateAnother=document.querySelector(".btn");
    calculateAnother.addEventListener('click',()=>{
        window.location.href="./interest.html";
    })

})
