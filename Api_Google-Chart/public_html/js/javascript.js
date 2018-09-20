function calcular() {
    var ano = document.getElementById("ano").value;
    var mes = document.getElementsByName("mes");
    if (ano !== '') {
        if(ano <= 2018){
            if (mes[0].value !== '' && mes[1].value !== '' && mes[2].value !== '' && mes[3].value !== '' && mes[4].value !== '' && mes[5].value !== '' && mes[6].value !== '' && mes[7].value !== '' &&
            mes[8].value !== '' && mes[9].value !== '' && mes[10].value !== '' && mes[11].value !== '') {
        var resultA = document.getElementById("resultA");
        resultA.innerHTML = "<strong>Informacion ventas año: " + ano + "</strong>";
        enviarDatos();
            }
    else {
         alert("Complete el campo ventas");
    }
    } else {
         alert("año debe ser menor o igual a 2018");
    }
    } else {
         alert("Complete el campo año");
    }
}
function enviarDatos() {
    var ano = document.getElementById("ano").value;
    var periodo = document.getElementById("periodo").value;
    var mes = document.getElementsByName("mes");
     if (ano !== ''&&ano <= 2018&&mes[0].value !== '' && mes[1].value !== '' && mes[2].value !== '' && mes[3].value !== '' && mes[4].value !== '' && mes[5].value !== '' && mes[6].value !== '' && mes[7].value !== '' &&
            mes[8].value !== '' && mes[9].value !== '' && mes[10].value !== '' && mes[11].value !== '') {
        var per = "";
        switch (parseInt(periodo)) {
            case 3:
                per = "Cuatrimestre";
                break;
            case 4:
                per = "Trimestre";
                break;
            case 6:
                per = "Bimestre";
                break;
        }
        var datos = [];
        for (var i = 1; i < parseInt(periodo) + 1; i++) {
            var total = 0;
            var j = 12 / parseInt(periodo) * (i - 1);
            var max = (12 / parseInt(periodo)) * parseInt(i);

            for (j; j < max; j++) {
                total += parseInt(mes[j].value);
            }
            datos[i - 1] = total;
        }
        draw_chart(per, datos);
        }
}


function draw() {

    drawChart(57);
    google.charts.setOnLoadCallback(drawChart);

}

function draw_chart(per, datos)
{
    drawChart(per, datos);
    drawTable(per, datos);
    google.charts.setOnLoadCallback(drawChart);
    google.charts.setOnLoadCallback(drawTable);

}

function drawChart(per, datos) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', per);
    data.addColumn('number', 'Valores');
    data.addRows(datos.length);
    for (i = 0; i < datos.length; i++)
    {
        data.setCell(i, 0, per + " " + (i + 1).toString());
        data.setCell(i, 1, datos[i].valueOf());

    }
    var options = {
        title: "Grafica Ventas " + per,
        width: 600,
        height: 200,
        legend: {position: 'none'},
        chart: {title: 'Chess opening moves',
            subtitle: 'popularity by percentage'},
        bars: 'horizontal', // Required for Material Bar Charts.
        axes: {
            x: {
                0: {side: 'top', label: 'Percentage'} // Top x-axis.
            }
        },
        bar: {groupWidth: "90%"}
    };

    var chart = new google.visualization.BarChart(document.getElementById('grafica'));
    chart.draw(data, options);

}


function drawTable(per, datos) {

    var data = new google.visualization.DataTable();
    data.addColumn('string', per);
    data.addColumn('number', 'Valores');
    data.addRows(datos.length);
    for (i = 0; i < datos.length; i++)
    {
        data.setCell(i, 0, per + " " + (i + 1).toString());
        data.setCell(i, 1, datos[i].valueOf());
    }
    var opc = {
        width: '100%',
        height: '100%'};
    var table = new google.visualization.Table(document.getElementById('tabla'));

    table.draw(data, opc);
}