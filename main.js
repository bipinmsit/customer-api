//npm install express
//npm install cors 
var express = require('express');
var cors = require('cors')
var app = express();
app.use(express.json());
app.use(cors());
var customers =[
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      name: "Vivek Singhwal",
      email: "vivek@pyther.com",
      address: "India",
      phone:'9724232340'
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      name: "Vivek",
      email: "vivek@pyther.com",
      address: "India",
      phone:'9724232340'
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      name: "Rashid",
      email: "vivek@pyther.com",
      address: "India",
      phone:'9724232340'
    }
  ];


app.get('/', (req,res)=>{
	res.send("Hello world");
});

//get all
app.get('/customer', (req,res)=>{
	res.send(customers);
});

//by by id
app.get('/customer/:id', function (req, res) {
    var customer = {};
    var id=req.params.id;
    customers.filter((item)=>{
      if(item.id == id){
        customer = item;
      }
    });
    res.send(customer);
  });

//add record
app.post('/customer', function (req, res) {
    req.body.id = Date.now() +"r";
    customers.push(req.body);
    res.send({result:"ok", msg:"record added successfully"});
});

//delete
app.delete('/customer', function (req, res) {
  var id = req.body.id;
  customers = customers.filter((item)=>(item.id != id));
  res.send({result:"ok", msg:"record deleted successfully"});
});

app.put('/customer', function (req, res) { //update
  var customer = req.body;
  for(var i=0; i<customers.length; i++){
    if(customer.id == customers[i].id){
      customers[i] = customer;
      break;
    }
  }
  res.send({result:"ok", msg:"record updated successfully"});
});


app.listen(4000);
