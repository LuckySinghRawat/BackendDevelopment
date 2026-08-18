import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send('server is Ready');
});

app.get('/api/code',(req,res) => {
    const code = [
        {
            id: 1,
            title: 'code1',
            content:'this is code 1'
        },
        {
            id: 2,
            title: 'code2',
            content:'this is code 2'
        },
        {
            id: 3,
            title: 'code3',
            content:'this is code 3'
        },
        {
            id: 4,
            title: 'code4',
            content:'this is code 4'
        },
        {
            id: 5,
            title: 'code5',
            content:'this is code 5'
        }
    ];
    res.send(code);
})

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`);
});