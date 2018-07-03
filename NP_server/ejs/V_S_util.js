var fs = require('fs');
var data = fs.readFileSync(__dirname + '/V_template.ejs', 'utf8');
data = data.replace("<head>", '');
data = data.replace("</head>", '');

first_data = "<% include ./HeaderFooter/Header.ejs %>\n"
end_data = "\n<% include ./HeaderFooter/Footer.ejs %>"

var result_data = first_data.concat(data, end_data);

fs.writeFileSync(__dirname + '/V_S.ejs', result_data, 'utf8');
console.log(__dirname)
console.log("success Util!");