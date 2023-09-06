const sign_in =document.querySelector("#sign-in-btn");
const sign_up =document.querySelector("#sign-up-btn");
const container =document.querySelector(".container");

sign_up.addEventListener('click',()=>{
    container.classList.add("sign_up_mode");
})
sign_in.addEventListener('click',()=>{
    container.classList.remove("sign_up_mode");
})
const up=document.querySelector("#up");
const login =document.querySelector("#in");
const res1=document.querySelector("#signin-res");
const res2=document.querySelector("#signup-res");

up.addEventListener("click",()=>{
    const name1=document.querySelector("#n2").value;
    const email=document.querySelector("#m2").value;
    const password=document.querySelector("#p2").value;
    if(name1==""){
        const n=document.querySelector("#errn2");
        n.innerHTML="Enter your name";
        setTimeout(()=>{
            n.innerHTML="";
        },2000)
        return 
    }
    if(email==""){
        const m=document.querySelector("#errm2");
        m.innerHTML="Enter your email";
        setTimeout(()=>{
            m.innerHTML="";
        },2000)
        return 
    }
    else{
        if(email.includes('@') && email.includes('.') && !email.includes(' ')){
            var a=email.indexOf('@');
            var b=email.indexOf('.');
            if(a==0 || (b-a!=6) || email.substring(b)!='.com' || email.charAt(0).toLowerCase()!=email.charAt(0)){
                const m=document.querySelector("#errm2");
                m.innerHTML="Invalid email";
                setTimeout(()=>{
                    m.innerHTML="";
                },2000)
                return 
            }
        }
        else{
            const m=document.querySelector("#errm2");
            m.innerHTML="Invalid email";
            setTimeout(()=>{
                m.innerHTML="";
            },2000)
            return 
        }
    }
    if(password==""){
        const p=document.querySelector("#errp2");
        p.innerHTML="Enter a password";
        setTimeout(()=>{
            p.innerHTML="";
        },2000)
        return 
    }
    const data={
        name:name1,
        mail:email,
        passs:password
    }
    fetch("http://localhost:5000/signup",{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response =>response.json())
    .then(ans => {
        // console.log(ans.result);
        res2.innerHTML=ans.result;
        setTimeout(()=>{
            res2.innerHTML="";
        },2000)
    })
    .catch(err =>{
        // console.log(err);
        res2.innerHTML=err;
        setTimeout(()=>{
            res2.innerHTML="";
        },2000)
    })
});

login.addEventListener("click",()=>{
    const email=document.querySelector("#m1").value;
    const password=document.querySelector("#p1").value;
    if(email==""){
        const m=document.querySelector("#errm1");
        m.innerHTML="Enter your email";
        setTimeout(()=>{
            m.innerHTML="";
        },2000)
        return 
    }
    if(email.includes('@') && email.includes('.') && !email.includes(' ')){
        var a=email.indexOf('@');
        var b=email.indexOf('.');
        if(a==0 || (b-a!=6) || email.substring(b)!='.com' || email.charAt(0).toLowerCase()!=email.charAt(0)){
            const m=document.querySelector("#errm1");
            m.innerHTML="Invalid email";
            setTimeout(()=>{
                m.innerHTML="";
            },2000)
            return 
        }
    }
    else{
        const m=document.querySelector("#errm1");
        m.innerHTML="Invalid email";
        setTimeout(()=>{
            m.innerHTML="";
        },2000)
        return 
    }
    if(password==""){
        const p=document.querySelector("#errp1");
        p.innerHTML="Enter a password";
        setTimeout(()=>{
            p.innerHTML="";
        },2000)
        return 
    }
    
    const data={
        mail:email,
        pas1:password
    }
    fetch("http://localhost:5000/signin",{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response =>response.json())
    .then(ans => {
        // console.log(ans.result);
        res1.innerHTML=ans.result;
        setTimeout(()=>{
            res1.innerHTML="";
        },2000)
    })
    .catch(err =>{
        // console.log(err);
        res1.innerHTML=err;
        setTimeout(()=>{
            res1.innerHTML="";
        },2000)
    })
});
