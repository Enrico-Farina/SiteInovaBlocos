document.addEventListener('DOMContentLoaded', function() {
    // Dados dos franqueados por região
    const franqueados = {
        'campinas': {
            nome: 'Campinas - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Campinas',
            estado: 'SP',
            telefone: '(19) 99120-2340',
            responsavel: 'João Ceschi Jr',
            whatsapp: '5519991202340',
            historia: 'A Inova Blocos Paredes Prontas Campinas é a matriz da franquia, oferecendo soluções inovadoras para construção civil com paredes prontas e sustentáveis.'
        },
        'sorocaba': {
            nome: 'Sorocaba - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Sorocaba',
            estado: 'SP',
            telefone: '(15) 99637-3177',
            responsavel: 'Douglas Teixeira',
            whatsapp: '5515996373177',
            historia: 'A Inova Blocos Paredes Prontas Sorocaba é uma franquia dedicada a oferecer soluções de construção civil com paredes prontas, focando na sustentabilidade e inovação.'
        },
        'curitiba': {
            nome: 'Curitiba - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Curitiba',
            estado: 'PR',
            telefone: '(41) 99603-0020',
            responsavel: 'Nelson Andrade Jr',
            whatsapp: '5541996030020',
            historia: 'A Inova Blocos Paredes Prontas Curitiba traz inovação e sustentabilidade para a construção civil paranaense.'
        },
        'luziania': {
            nome: 'Luziânia - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Luziânia',
            estado: 'GO',
            telefone: '(61) 98117-1911',
            responsavel: 'Alexandre Miranda',
            whatsapp: '5561981171911',
            historia: 'A Inova Blocos Paredes Prontas Luziânia atende a região com soluções de paredes prontas sustentáveis.'
        },
        'ribeirao-pires': {
            nome: 'Ribeirão Pires - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Ribeirão Pires',
            estado: 'SP',
            telefone: '(11) 95697-1507',
            responsavel: 'Fábio Lima',
            whatsapp: '5511956971507',
            historia: 'A Inova Blocos Paredes Prontas Ribeirão Pires oferece soluções eficientes para a construção local.'
        },
        'vale-do-paraiba': {
            nome: 'Vale do Paraíba - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Vale do Paraíba',
            estado: 'SP',
            telefone: '(12) 97812-8335',
            responsavel: 'Maciel e Denis',
            whatsapp: '5512978128335',
            historia: 'A franquia no Vale do Paraíba foca em eficiência e sustentabilidade na construção civil.'
        },
        'mogi-guacu': {
            nome: 'Mogi Guaçu - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Mogi Guaçu',
            estado: 'SP',
            telefone: '(19) 99750-8024',
            responsavel: 'Matheus Moura',
            whatsapp: '5519997508024',
            historia: 'A franquia de Mogi Guaçu atende a região com soluções em paredes prontas de alta qualidade.'
        },
        'ponta-grossa': {
            nome: 'Ponta Grossa - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Ponta Grossa',
            estado: 'PR',
            telefone: '(42) 99144-7822',
            responsavel: 'Fabrício Borges',
            whatsapp: '5542991447822',
            historia: 'A franquia de Ponta Grossa introduz soluções sustentáveis e eficientes para a construção local.'
        },
        'humaita': {
            nome: 'Humaitá - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Humaitá',
            estado: 'AM',
            telefone: '(97) 98111-0107',
            responsavel: 'Hélio e Cassandro',
            whatsapp: '5597981110107',
            historia: 'A franquia em Humaitá atende a região amazônica com foco em soluções sustentáveis.'
        },
        'porto-velho': {
            nome: 'Porto Velho - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Porto Velho',
            estado: 'RO',
            telefone: '(97) 98111-0107',
            responsavel: 'Hélio e Cassandro',
            whatsapp: '5597981110107',
            historia: 'A franquia em Porto Velho leva nossas soluções construtivas para Rondônia.'
        },
        'manaus': {
            nome: 'Manaus - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Manaus',
            estado: 'AM',
            telefone: '(97) 98111-0107',
            responsavel: 'Hélio e Cassandro',
            whatsapp: '5597981110107',
            historia: 'A franquia em Manaus atende a região com ênfase em sustentabilidade e resistência climática.'
        },
        'brasilia': {
            nome: 'Brasília - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Brasília',
            estado: 'DF',
            telefone: '(61) 99676-3320',
            responsavel: 'Emiliano',
            whatsapp: '5561996763320',
            historia: 'A franquia em Brasília oferece soluções inovadoras para a construção na capital federal.'
        },
        'arapiraca': {
            nome: 'Arapiraca - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Arapiraca',
            estado: 'AL',
            telefone: '(82) 98121-3460',
            responsavel: 'Eng. Sullyvan',
            whatsapp: '5582981213460',
            historia: 'A franquia de Arapiraca atende a região com soluções de paredes prontas sustentáveis.'
        },
        'camacari': {
            nome: 'Camaçari - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Camaçari',
            estado: 'BA',
            telefone: '(71) 9999-0197',
            responsavel: 'Cledmilson',
            whatsapp: '557199990197',
            historia: 'A franquia de Camaçari oferece eficiência e soluções inovadoras na construção civil da região.'
        },
        'jacobina': {
            nome: 'Jacobina - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Jacobina',
            estado: 'BA',
            telefone: '(74) 99116-0075',
            responsavel: 'Walter Gaya',
            whatsapp: '5574991160075',
            historia: 'A franquia de Jacobina atende a região focando na sustentabilidade e eficiência construtiva.'
        },
        'fortaleza': {
            nome: 'Fortaleza - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Fortaleza',
            estado: 'CE',
            telefone: '(85) 98885-4054',
            responsavel: 'João Mattos',
            whatsapp: '5585988854054',
            historia: 'A franquia de Fortaleza introduz tecnologia e praticidade para as obras no Ceará.'
        },
        'bacabal': {
            nome: 'Bacabal - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Bacabal',
            estado: 'MA',
            telefone: '(98) 9904-7663',
            responsavel: 'Denys Uchôa',
            whatsapp: '559899047663',
            historia: 'A franquia em Bacabal leva nossas soluções ágeis e sustentáveis para o Maranhão.'
        },
        'alfenas': {
            nome: 'Alfenas - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Alfenas',
            estado: 'MG',
            telefone: '(35) 99134-2902',
            responsavel: 'Bruno Gomes',
            whatsapp: '5535991342902',
            historia: 'A franquia de Alfenas entrega blocos inovadores para a construção civil do sul de Minas.'
        },
        'montes-claros': {
            nome: 'Montes Claros - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Montes Claros',
            estado: 'MG',
            telefone: '(38) 98417-0000',
            responsavel: 'Rodrigo Amaral',
            whatsapp: '5538984170000',
            historia: 'A franquia em Montes Claros foca no desenvolvimento sustentável da construção civil local.'
        },
        'belo-horizonte': {
            nome: 'Belo Horizonte - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Belo Horizonte',
            estado: 'MG',
            telefone: '(35) 99134-2902',
            responsavel: 'Bruno Gomes',
            whatsapp: '5535991342902',
            historia: 'A franquia na capital mineira traz agilidade e sustentabilidade para grandes e pequenas obras.'
        },
        'sapucai-mirim': {
            nome: 'Sapucaí-Mirim - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Sapucaí-Mirim',
            estado: 'MG',
            telefone: '(12) 99790-1200',
            responsavel: 'Alexandre Augusto',
            whatsapp: '5512997901200',
            historia: 'A franquia de Sapucaí-Mirim atende com dedicação oferecendo soluções estruturais de ponta.'
        },
        'tangara-da-serra': {
            nome: 'Tangará da Serra - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Tangará da Serra',
            estado: 'MT',
            telefone: '(65) 98136-8498',
            responsavel: 'Rafael Pontes',
            whatsapp: '5565981368498',
            historia: 'A franquia de Tangará da Serra apoia a expansão do agronegócio e das cidades do Mato Grosso com construção rápida.'
        },
        'altamira': {
            nome: 'Altamira - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Altamira',
            estado: 'PA',
            telefone: '(93) 99172-9391',
            responsavel: 'Eng. Neto',
            whatsapp: '5593991729391',
            historia: 'A franquia em Altamira fortalece a região norte com tecnologias sustentáveis para paredes prontas.'
        },
        'foz-do-iguacu': {
            nome: 'Foz do Iguaçu - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Foz do Iguaçu',
            estado: 'PR',
            telefone: '(45) 99970-8990',
            responsavel: 'Omar e Gustavo',
            whatsapp: '5545999708990',
            historia: 'A franquia em Foz do Iguaçu garante estruturas sólidas e modernas para o interior paranaense e fronteira.'
        },
        'londrina': {
            nome: 'Londrina - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Londrina',
            estado: 'PR',
            telefone: '(43) 99110-3306',
            responsavel: 'João Poli',
            whatsapp: '5543991103306',
            historia: 'A franquia de Londrina foca em inovações de alto padrão e agilidade para a região.'
        },
        'maringa': {
            nome: 'Maringá',
            endereco: 'Endereço do Franqueado - Inova Blocos Paredes Prontas',
            cidade: 'Maringá',
            estado: 'PR',
            telefone: '(44) 99173-5401',
            responsavel: 'Ildeu Carlos',
            whatsapp: '5544991735401',
            historia: 'A franquia de Maringá contribui para o forte ritmo da construção civil local com máxima eficiência.'
        },
        'paulo-frontin': {
            nome: 'Paulo Frontin - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Paulo Frontin',
            estado: 'PR',
            telefone: '(42) 99948-1431',
            responsavel: 'Cesar Cansan',
            whatsapp: '5542999481431',
            historia: 'A franquia de Paulo Frontin oferece praticidade e paredes prontas de excelente qualidade.'
        },
        'petrolina': {
            nome: 'Petrolina - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Petrolina',
            estado: 'PE',
            telefone: '(87) 99209-2366',
            responsavel: 'Alexandre Faria Lima',
            whatsapp: '5587992092366',
            historia: 'A franquia de Petrolina atende o Vale do São Francisco com inovação para o mercado imobiliário.'
        },
        'tupandi': {
            nome: 'Tupandi - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Tupandi',
            estado: 'RS',
            telefone: '(51) 99798-9272',
            responsavel: 'Jairo Flach',
            whatsapp: '5551997989272',
            historia: 'A franquia de Tupandi consolida soluções eficientes para obras mais limpas no Rio Grande do Sul.'
        },
        'aracaju': {
            nome: 'Aracaju - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Aracaju',
            estado: 'SE',
            telefone: '(71) 99976-0000',
            responsavel: 'Guilherme Santos',
            whatsapp: '5571999760000',
            historia: 'A franquia na capital sergipana atua com excelência, garantindo rapidez e menor custo nas obras.'
        },
        'pindamonhangaba': {
            nome: 'Pindamonhangaba - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Pindamonhangaba',
            estado: 'SP',
            telefone: '(12) 97812-8335',
            responsavel: 'Maciel e Denis',
            whatsapp: '5512978128335',
            historia: 'A franquia em Pindamonhangaba trabalha focada no crescimento ágil e ecológico do mercado local.'
        },
        'encarnacion': {
            nome: 'Encarnación - Inova Blocos Paredes Prontas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Encarnación',
            estado: 'PY',
            telefone: '(71) 99999-0197',
            responsavel: 'Cledmilson Santos',
            whatsapp: '5571999990197',
            historia: 'Nossa franquia internacional no Paraguai impulsiona a construção civil em Encarnación com blocos ecológicos e inovação.'
        }
    };

    function adicionarCardFranqueado(container, franqueado) {
        const card = document.createElement('div');
        card.className = 'franchisee-card';

        card.innerHTML = `
            <h3>${franqueado.nome}</h3>
            <div class="franchisee-info">
                <p>${franqueado.responsavel}</p>
            </div>
            <div class="franchisee-contact">
                <i class="fas fa-map-marker-alt"></i>
                <span>${franqueado.endereco}, ${franqueado.cidade} - ${franqueado.estado}</span>
            </div>
            <div class="franchisee-contact">
                <i class="fas fa-phone"></i>
                <span>${franqueado.telefone}</span>
            </div>
            ${franqueado.whatsapp ? `
                <div class="franchisee-contact">
                    <a href="https://wa.me/${franqueado.whatsapp}" target="_blank" class="whatsapp-button">
                        <i class="fab fa-whatsapp"></i> Conversar no WhatsApp
                    </a>
                </div>
            ` : ''}
            ${franqueado.historia ? `
                <div class="franchisee-contact">
                    <a href="franquias/${franqueado.cidade.toLowerCase().replace(/\s+/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}.html" class="history-button">
                        <i class="fas fa-book"></i> História do Franqueado
                    </a>
                </div>
            ` : ''}
        `;

        container.appendChild(card);
    }

    function filtrarFranqueados(estadoSelecionado) {
        const franqueadosContainer = document.getElementById('franchisees-list');
        if (!franqueadosContainer) return;

        franqueadosContainer.innerHTML = '';
        
        let encontrou = false;

        Object.keys(franqueados).forEach(key => {
            const franqueado = franqueados[key];
            
            if (estadoSelecionado === 'todos' || franqueado.estado === estadoSelecionado) {
                adicionarCardFranqueado(franqueadosContainer, franqueado);
                encontrou = true;
            }
        });

        if (!encontrou) {
            franqueadosContainer.innerHTML = `
                <div style="text-align: center; width: 100%; padding: 20px;">
                    <p style="font-family: 'Open Sans', sans-serif; color: #666; font-size: 1.1rem;">
                        Nenhum franqueado encontrado neste estado.
                    </p>
                </div>
            `;
        }
    }

    const franqueadosContainer = document.getElementById('franchisees-list');
    const regiaoSelect = document.getElementById('regiao-select');

    if (franqueadosContainer) {
        Object.keys(franqueados).forEach(key => {
            adicionarCardFranqueado(franqueadosContainer, franqueados[key]);
        });

        if (regiaoSelect) {
            regiaoSelect.addEventListener('change', function () {
                filtrarFranqueados(this.value);
            });
        }
    }

    const franchiseForm = document.getElementById('franchise-form');
    if (franchiseForm) {
        franchiseForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Obrigado pelo seu interesse! Em breve nossa equipe entrará em contato.');
            franchiseForm.reset();
        });
    }
});
