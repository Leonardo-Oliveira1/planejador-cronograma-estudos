/**
 * @jest-environment jsdom
 */

const html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>
    <style>
        body {
            background-color: #ba4949;
            color: white;
        }

        #btn-comecar {
            cursor: pointer;
            border: none;
            margin: 20px 0px 0px;
            padding: 0px 12px;
            border-radius: 4px;
            box-shadow: rgb(235, 235, 235) 0px 6px 0px;
            font-size: 22px;
            height: 55px;
            color: rgb(186, 73, 73);
            font-weight: bold;
            width: 200px;
            background-color: white;
            transition: color 0.5s ease-in-out 0s;
        }

        #btn-comecar:active {
            transform: translateY(6px);
            box-shadow: none;
        }
    </style>

    <div class="container d-flex flex-column align-items-center">
        <style>
            .nav a{
                color: white;
                font-weight: 500;

            }

            .nav-link{
                cursor: pointer;
            }

            .nav-link:hover{
                color: white;
            }
        </style>
        <ul class="nav nav-tabs" style="margin-top: 10px; margin-bottom: 32px;">
            <li class="nav-item">
                <a class="nav-link active" onclick="DOM_showElement('cronograma', this)" aria-current="page">Cronômetro</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" onclick="DOM_showElement('horarios', this)">Horários</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" onclick="DOM_showElement('conteudos', this)">Conteúdos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" onclick="DOM_showElement('conteudo_semana', this)" aria-disabled="true">Próximos assuntos</a>
            </li>
        </ul>

        

        <div id="cronograma">        
            <h2 id="assunto_a_estudar"></h2>
            <center><h3 id="totalHorasHoje"></h3></center>
            <div style="display: flex; background-color: #c15c5c;" class="w-100 flex-column align-items-center">
                <span class="fs-5 mt-3" id="etapa-1-description"></span>
                <span id="etapa-2-description" style="display: none;"></span>
                <span id="etapa-3-description" style="display: none;"></span>
                <span id="etapa-4-description" style="display: none;"></span>

                <h1 id="etapa-1-counter" style="font-size: 120px; font-weight: bold;"></h1>
                <h1 id="etapa-2-counter" style="font-size: 120px; font-weight: bold; display: none;"></h1>
                <h1 id="etapa-3-counter" style="font-size: 120px; font-weight: bold; display: none;"></h1>
                <h1 id="etapa-4-counter" style="font-size: 120px; font-weight: bold; display: none;"></h1>

                <button id="btn-comecar" class="mb-2">Começar</button><br>
            </div>

            
            <div id="progresso"></div>
        </div>

        <div id="horarios" style="display: none;">
            <input type="checkbox" id="segunda-habilitado" checked>
            <label>Segunda-feira:</label>
            <input type="time" onchange="DOM_showHorasEstudadas('segunda')" id="segunda-inicio" value="16:00" disabled
                required />
            <input type="time" onchange="DOM_showHorasEstudadas('segunda')" id="segunda-fim" value="20:00" required disabled/>
            <span id="segunda-horas-estudadas">--</span><br>

            <input type="checkbox" id="terca-habilitado" checked>
            <label>Terça-feira:</label>
            <input type="time" onchange="DOM_showHorasEstudadas('terca')" id="terca-inicio" value="20:00" required disabled/>
            <input type="time" onchange="DOM_showHorasEstudadas('terca')" id="terca-fim" value="22:01" required disabled/>
            <span id="terca-horas-estudadas">--</span><br>

            <input type="checkbox" id="quarta-habilitado" checked>
            <label>Quarta-feira:</label>
            <input type="time" onchange="DOM_showHorasEstudadas('quarta')" id="quarta-inicio" value="20:00" required disabled/>
            <input type="time" onchange="DOM_showHorasEstudadas('quarta')" id="quarta-fim" value="22:02" required disabled/>
            <span id="quarta-horas-estudadas">--</span><br>

            <input type="checkbox" id="quinta-habilitado">
            <label>Quinta-feira:</label>
            <input type="time" onchange="DOM_showHorasEstudadas('quinta')" id="quinta-inicio" value="20:30" required disabled/>
            <input type="time" onchange="DOM_showHorasEstudadas('quinta')" id="quinta-fim" value="21:30" required disabled/>
            <span id="quinta-horas-estudadas">--</span><br>

            <input type="checkbox" id="sexta-habilitado">
            <label>Sexta-feira:</label>
            <input type="time" onchange="DOM_showHorasEstudadas('sexta')" id="sexta-inicio" value="20:30" required disabled/>
            <input type="time" onchange="DOM_showHorasEstudadas('sexta')" id="sexta-fim" value="21:30" required disabled/>
            <span id="sexta-horas-estudadas">--</span><br>

            <input type="checkbox" id="sabado-habilitado" checked>
            <label>Sábado:</label>
            <input type="time" onchange="DOM_showHorasEstudadas('sabado')" id="sabado-inicio" value="08:30" required disabled/>
            <input type="time" onchange="DOM_showHorasEstudadas('sabado')" id="sabado-fim" value="11:30" required disabled/>
            <span id="sabado-horas-estudadas">--</span><br>

            <input type="checkbox" id="domingo-habilitado" checked>
            <label>Domingo:</label>
            <input type="time" onchange="DOM_showHorasEstudadas('domingo')" id="domingo-inicio" value="20:30"
                required disabled/>
            <input type="time" onchange="DOM_showHorasEstudadas('domingo')" id="domingo-fim" value="22:00" required disabled/>
            <span id="domingo-horas-estudadas">--</span><br>

            <br>

            <span id="horasPorSemana">Horas semanais de estudos: ...</span>
        </div>

        <div id="conteudos" style="display: none;">
            <h2>Contéudos que você vai estudar</h2>
            <ul id="lista-materias"></ul>
        </div>

        <div id="conteudo_semana" style="display: none;">
            <h1>Próximos assuntos da semana</h1>
            <h2 id="assuntoList"></h2>
        </div>

        <script>
            function DOM_hiddenAllScreens(){
                let cronograma = document.getElementById('cronograma');
                let conteudos = document.getElementById('conteudos');
                let conteudo_semana = document.getElementById('conteudo_semana');
                let horarios = document.getElementById('horarios');

                cronograma.style.display = "none";
                conteudos.style.display = "none";
                conteudo_semana.style.display = "none";
                horarios.style.display = "none";

                const links = document.querySelectorAll('.nav-link');

                links.forEach(link => {
                    link.classList.remove('active');
                });

            }
            function DOM_showElement(element_id, element_this){
                DOM_hiddenAllScreens()

                document.getElementById(element_id).style.display = "block";

                element_this.classList.add("active");
            }
        </script>
        
    </div>

</body>

<script src="app.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>

</html>`;

beforeEach(() => {
    document.body.innerHTML = html;
})

test('get times input data', () => {
    const { getHorasEstudosPorDia } = require('./../app');
    expect(getHorasEstudosPorDia("segunda")).toBe("4 horas");
    expect(getHorasEstudosPorDia("terca")).toBe("2 horas e 1 minuto");
    expect(getHorasEstudosPorDia("quarta")).toBe("2 horas e 2 minutos");
});

const horas_dias = [1, 3, 21.5, 11.5, 0.5, 10, 5]
test('add to horas diarias array', () => {
    const { addHorasDiariasToArray } = require('./../app');

    let horasDiarias = [
        {
            dia: 'domingo',
            tempo: 0
        },
        {
            dia: 'segunda',
            tempo: 0
        },
        {
            dia: 'terca',
            tempo: 0
        },
        {
            dia: 'quarta',
            tempo: 0
        },
        {
            dia: 'quinta',
            tempo: 0
        },
        {
            dia: 'sexta',
            tempo: 0
        },
        {
            dia: 'sabado',
            tempo: 0
        },
    ];
    
    horasDiarias = addHorasDiariasToArray("domingo", horas_dias[0]);
    horasDiarias = addHorasDiariasToArray("segunda", horas_dias[1]);
    horasDiarias = addHorasDiariasToArray("terca", horas_dias[2]);
    horasDiarias = addHorasDiariasToArray("quarta", horas_dias[3]);
    horasDiarias = addHorasDiariasToArray("quinta", horas_dias[4]);
    horasDiarias = addHorasDiariasToArray("sexta", 0);
    horasDiarias = addHorasDiariasToArray("sabado", horas_dias[6]);
    horasDiarias = addHorasDiariasToArray("sexta", horas_dias[5]);

    expect(horasDiarias[0].tempo).toBe(horas_dias[0]);
    expect(horasDiarias[1].tempo).toBe(horas_dias[1]);
    expect(horasDiarias[2].tempo).toBe(horas_dias[2]);
    expect(horasDiarias[3].tempo).toBe(horas_dias[3]);
    expect(horasDiarias[4].tempo).toBe(horas_dias[4]);
    expect(horasDiarias[5].tempo).toBe(horas_dias[5]);
    expect(horasDiarias[6].tempo).toBe(horas_dias[6]);
});

test('convert horas decimal para horas e minutos', () => {
    const { convertHorasParaHorasEMinutos } = require('./../app');
    expect(convertHorasParaHorasEMinutos(1)).toBe("1 hora");
    expect(convertHorasParaHorasEMinutos(2)).toBe("2 horas");
    expect(convertHorasParaHorasEMinutos(2.32)).toBe("2 horas e 19 minutos");
});

test('get horas totais de estudo', () => {
    const { getHorasEstudosTotais } = require('./../app');

    let horasTotais = horas_dias[0] + horas_dias[1] + 
    horas_dias[2] + horas_dias[3] + horas_dias[4] + 
    horas_dias[5] + horas_dias[6];

    expect(getHorasEstudosTotais()).toBe(horasTotais);
});

test('ordenar assuntos por prioridade', () => {
    const { ordenarAssuntosPorPrioridade } = require('./../app');

    let materias = [
        {
            nome: 'Química',
            assuntos: [
                {
                    nome: 'Nomenclatura IUPAC',
                    horas_estimadas: 3.2,
                    prioridade: 5,
                    totalmente_aprendido: false
                },
                {
                    nome: 'NOX',
                    horas_estimadas: 2,
                    prioridade: 4,
                    totalmente_aprendido: false
                },
            ]
        },
        {
            nome: 'Física',
            assuntos: [
                {
                    nome: 'Corrente elétrica',
                    horas_estimadas: 1,
                    prioridade: 1,
                    totalmente_aprendido: false
                }
            ]
        },
        {
            nome: 'História',
            assuntos: [            
                {
                    nome: 'Egito antigo',
                    horas_estimadas: 1,
                    prioridade: 2,
                    totalmente_aprendido: true
                },
                {
                    nome: 'Grécia',
                    horas_estimadas: 1,
                    prioridade: 1,
                    totalmente_aprendido: true
                },
                {
                    nome: 'Proclamação da República',
                    horas_estimadas: 1,
                    prioridade: 3,
                    totalmente_aprendido: false
                }
            ]
        },
    ];

    let expected = [
        {
            "assunto": "Nomenclatura IUPAC", 
            "horas": 3.2, 
            "prioridade": 5
        }, 
        {
            "assunto": "NOX", 
            "horas": 2, 
            "prioridade": 4
        }, 
        {
            "assunto": "Proclamação da República", 
            "horas": 1, 
            "prioridade": 3
        },
        {
            "assunto": "Corrente elétrica", 
            "horas": 1, 
            "prioridade": 1
        } 
    ]


    expect(ordenarAssuntosPorPrioridade(materias)).toEqual(expected);
});
