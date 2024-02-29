// Dados utilizados na simulação
const dataImovel = [
  ["Crédito","Parcelas","Plano"],['R$ 70.000,00','R$ 349,00','200x'],['R$ 75.000,00','R$ 374,00','200x'],['R$ 80.000,00','R$ 399,00','200x'],['R$ 85.000,00','R$ 424,00','200x'],['R$ 90.000,00','R$ 449,00','200x'],['R$ 95.000,00','R$ 474,00','200x'],['R$ 100.000,00','R$ 499,00','200x'],['R$ 105.000,00','R$ 524,00','200x'],['R$ 110.000,00','R$ 549,00','200x'],['R$ 115.000,00','R$ 574,00','200x'],['R$ 120.000,00','R$ 599,00','200x'],['R$ 125.000,00','R$ 624,00','200x'],['R$ 130.000,00','R$ 649,00','200x'],['R$ 135.000,00','R$ 674,00','200x'],['R$ 140.000,00','R$ 699,00','200x'],['R$ 140.000,00','R$ 687,00','200x'],['R$ 150.000,00','R$ 736,00','200x'],['R$ 160.000,00','R$ 786,00','200x'],['R$ 170.000,00','R$ 835,00','200x'],['R$ 180.000,00','R$ 884,00','200x'],['R$ 190.000,00','R$ 933,00','200x'],['R$ 200.000,00','R$ 982,00','200x'],['R$ 210.000,00','R$ 1.031,00','200x'],['R$ 220.000,00','R$ 1.080,00','200x'],['R$ 230.000,00','R$ 1.129,00','200x'],['R$ 240.000,00','R$ 1.179,00','200x'],['R$ 250.000,00','R$ 1.228,00','200x'],['R$ 260.000,00','R$ 1.277,00','200x'],['R$ 270.000,00','R$ 1.326,00','200x'],['R$ 280.000,00','R$ 1.375,00','200x'],['R$ 280.000,00','R$ 1.352,00','200x'],['R$ 290.000,00','R$ 1.401,00','200x'],['R$ 300.000,00','R$ 1.449,00','200x'],['R$ 310.000,00','R$ 1.497,00','200x'],['R$ 320.000,00','R$ 1.546,00','200x'],['R$ 330.000,00','R$ 1.594,00','200x'],['R$ 340.000,00','R$ 1.642,00','200x'],['R$ 350.000,00','R$ 1.690,00','200x'],['R$ 360.000,00','R$ 1.739,00','200x'],['R$ 370.000,00','R$ 1.787,00','200x'],['R$ 380.000,00','R$ 1.835,00','200x'],['R$ 390.000,00','R$ 1.884,00','200x'],['R$ 400.000,00','R$ 1.932,00','200x'],['R$ 410.000,00','R$ 1.980,00','200x'],['R$ 420.000,00','R$ 2.029,00','200x'],['R$ 430.000,00','R$ 2.077,00','200x'],['R$ 440.000,00','R$ 2.125,00','200x'],['R$ 450.000,00','R$ 2.174,00','200x'],['R$ 460.000,00','R$ 2.222,00','200x'],['R$ 470.000,00','R$ 2.270,00','200x'],['R$ 480.000,00','R$ 2.319,00','200x'],['R$ 490.000,00','R$ 2.367,00','200x'],['R$ 500.000,00','R$ 2.415,00','200x'],['R$ 510.000,00','R$ 2.464,00','200x'],['R$ 520.000,00','R$ 2.512,00','200x'],['R$ 530.000,00','R$ 2.560,00','200x'],['R$ 540.000,00','R$ 2.608,00','200x'],['R$ 550.000,00','R$ 2.657,00','200x'],['R$ 560.000,00','R$ 2.705,00','200x'],['R$ 600.000,00','R$ 2.862,00','200x'],['R$ 650.000,00','R$ 3.100,00','200x'],['R$ 700.000,00','R$ 3.339,00','200x'],['R$ 750.000,00','R$ 3.577,00','200x'],['R$ 800.000,00','R$ 3.816,00','200x'],['R$ 850.000,00','R$ 4.054,00','200x'],['R$ 900.000,00','R$ 4.293,00','200x']
]

const dataAuto = [
  ["Crédito", "Parcelas", "Plano"],['R$ 25.000,00','R$ 490,00','50x'],['R$ 27.500,00','R$ 539,00','50x'],['R$ 30.000,00','R$ 588,00','50x'],['R$ 32.500,00','R$ 637,00','50x'],['R$ 35.000,00','R$ 686,00','50x'],['R$ 37.500,00','R$ 735,00','50x'],['R$ 40.000,00','R$ 784,00','50x'],['R$ 42.500,00','R$ 833,00','50x'],['R$ 45.000,00','R$ 882,00','50x'],['R$ 47.500,00','R$ 931,00','50x'],['R$ 50.000,00','R$ 981,00','50x'],['R$ 34.000,00','R$ 467,00','72x'],['R$ 35.000,00','R$ 481,00','72x'],['R$ 37.500,00','R$ 515,00','72x'],['R$ 40.000,00','R$ 550,00','72x'],['R$ 42.500,00','R$ 584,00','72x'],['R$ 45.000,00','R$ 618,00','72x'],['R$ 47.500,00','R$ 653,00','72x'],['R$ 50.000,00','R$ 687,00','72x'],['R$ 52.500,00','R$ 722,00','72x'],['R$ 55.000,00','R$ 756,00','72x'],['R$ 57.500,00','R$ 790,00','72x'],['R$ 60.000,00','R$ 825,00','72x'],['R$ 62.500,00','R$ 859,00','72x'],['R$ 65.000,00','R$ 893,00','72x'],['R$ 62.500,00','R$ 763,00','80x'],['R$ 67.500,00','R$ 824,00','80x'],['R$ 72.500,00','R$ 885,00','80x'],['R$ 77.500,00','R$ 946,00','80x'],['R$ 82.500,00','R$ 1.007,00','80x'],['R$ 87.500,00','R$ 1.068,00','80x'],['R$ 92.500,00','R$ 1.129,00','80x'],['R$ 97.500,00','R$ 1.190,00','80x'],['R$ 102.500,00','R$ 1.251,00','80x'],['R$ 107.500,00','R$ 1.312,00','80x'],['R$ 112.500,00','R$ 1.373,00','80x'],['R$ 117.500,00','R$ 1.435,00','80x'],['R$ 122.500,00','R$ 1.496,00','80x'],['R$ 125.000,00','R$ 1.526,00','80x'],['R$ 125.000,00','R$ 1.351,00','90x'],['R$ 130.000,00','R$ 1.405,00','90x'],['R$ 140.000,00','R$ 1.513,00','90x'],['R$ 150.000,00','R$ 1.621,00','90x'],['R$ 160.000,00','R$ 1.729,00','90x'],['R$ 170.000,00','R$ 1.837,00','90x'],['R$ 180.000,00','R$ 1.945,00','90x'],['R$ 190.000,00','R$ 2.053,00','90x'],['R$ 200.000,00','R$ 2.161,00','90x']
]

// Elementos do DOM
const btnType = document.querySelectorAll('.type_selector');
const valueText = document.getElementById('value');
const valueResult = document.getElementById('result_value');
const valueResultDesc = document.getElementById('result_value_desc');
const btnAdd = document.getElementById('add');
const btnSubtract = document.getElementById('sub');
const btnTotal = document.getElementById('total');
const btnPortion = document.getElementById('portion'); 
const btnSimulate = document.getElementById('simulate');
const cSimulationResult = document.getElementById('c_result_value');
const fSimulationResult = document.getElementById('f_result_value');
const cSimulationQuota = document.getElementById('c_quota_x');
const fSimulationQuota = document.getElementById('f_quota_x');
const cSimulationQuotaValue = document.getElementById('c_quota_value');
const fSimulationQuotaValue = document.getElementById('f_quota_value');
const economyValue = document.getElementById('economy');


// Aumenta e diminui o valor que aparece no display de crédito
let currentCreditIndex = 1;
// Define o tipo inicialmente como imóvel
let currentType = dataImovel;
// Define o tipo de simulação inicialmente como "total"
let currentSimulationType = 'total';

function updateCreditValue() {
  const credit = currentType[currentCreditIndex][0];
  const quota = currentType[currentCreditIndex][1];
  valueText.textContent = currentSimulationType === 'total' ? credit : quota;
}

function handleAddClick() {
  if (currentCreditIndex < currentType.length - 1) {
    currentCreditIndex++;
    updateCreditValue();
  }
}

function handleSubtractClick() {
  if (currentCreditIndex > 1) {
    currentCreditIndex--;
    updateCreditValue();
  }
}

// Função para simular o valor
btnSimulate.addEventListener('click', () => {
  simulateLoan(currentType);
});

function simulateLoan(currentType) {
  document.getElementById('loading').classList.add('loading');
  document.getElementById('spinner').classList.add('spinner');
  setTimeout(() => {
    const creditValue = valueText.textContent;
    const credit = currentType[currentCreditIndex][0];
    const quotaValue = currentType[currentCreditIndex][1];
    const planValue = currentType[currentCreditIndex][2];

    // Atualize o elemento de resultado com o valor simulado
    valueResult.textContent = creditValue;
    cSimulationResult.textContent = creditValue;
    cSimulationQuota.textContent = planValue.toLowerCase() + ' de';
    cSimulationQuotaValue.textContent = quotaValue;
    fSimulationQuotaValue.textContent = quotaValue;
    valueResultDesc.textContent = '(valor total)';

    if (planValue.toLowerCase() === '50x') {
      fSimulationQuota.textContent = '100x de';
    }

    if (planValue.toLowerCase() === '200x') {
      fSimulationQuota.textContent = '300x de';
    } 

    function formatCurrency(value) {
      return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
      });
    }

    // Obtém o valor da parcela do plano e adiciona 2
    const quotaNum = parseFloat(quotaValue.replace(/[^0-9,.]/g, '').replace(',', '.')); // Remove caracteres não numéricos e substitui vírgula por ponto
    const planNum = parseFloat(fSimulationQuota.textContent.replace(/[^0-9,.]/g, '').replace(',', '.')); // Remove caracteres não numéricos e substitui vírgula por ponto
    const simulationResultValue = Math.round(planNum * quotaNum * 100); // Multiplica por 100 para obter o valor em centavos e arredonda

    // Formata o valor da parcela simulada como "R$00.000,00"
    fSimulationResult.textContent = formatCurrency(simulationResultValue / 100); // Divide por 100 para obter o valor em reais novamente

    // Calcular diferença entre o valor simulado e o valor do crédito total
    const creditToNum = parseInt(creditValue.replace(/[^0-9]/g, '').replace(',', '.')); // Remove caracteres não numéricos e substitui vírgula por ponto
    const differenceValue = Math.round((simulationResultValue - creditToNum)); // Multiplica o crédito total por 100 para obter o valor em centavos e arredonda

    // Exibir a diferença como economia
    economyValue.textContent = formatCurrency(differenceValue / 100); // Divide por 100 para obter o valor em reais novamente

    if (currentSimulationType !== 'total') {
      valueResultDesc.textContent = '(valor da parcela)';
      cSimulationResult.textContent = credit;
    }

    // Remover a classe "loading" após um pequeno atraso para que o efeito seja perceptível
    document.getElementById('loading').classList.remove('loading');
    document.getElementById('spinner').classList.remove('spinner');
  }, 500); // 500ms (meio segundo)
}

// Event listener para o botão de Crédito total
btnTotal.addEventListener('click', () => {
  if (currentSimulationType !== 'total') {
    currentSimulationType = 'total';
    btnTotal.classList.add('selected'); // Adiciona a classe "selected" no botão "Crédito total"
    btnPortion.classList.remove('selected'); // Remove a classe "selected" do botão "Valor da parcela"
    updateCreditValue();
  }
});

// Event listener para o botão de Valor da parcela
btnPortion.addEventListener('click', () => {
  if (currentSimulationType !== 'portion') {
    currentSimulationType = 'portion';
    btnTotal.classList.remove('selected'); // Remove a classe "selected" do botão "Crédito total"
    btnPortion.classList.add('selected'); // Adiciona a classe "selected" no botão "Valor da parcela"
    updateCreditValue();
  }
});

// Event listeners para os botões de aumentar e diminuir o crédito
btnAdd.addEventListener('click', handleAddClick);
btnSubtract.addEventListener('click', handleSubtractClick);

// Atualizar o valor do crédito inicialmente
updateCreditValue();

const houseBtn = document.getElementById('houseBtn');
const carBtn = document.getElementById('carBtn');

// Função para alternar entre os botões e carregar os dados corretos
function handleTypeClick(event) {
  const clickedBtn = event.currentTarget;

  if (clickedBtn.classList.contains('active')) {
    return;
  }

  document.querySelector('.type_selector.active').classList.remove('active');
  clickedBtn.classList.add('active');

  if (clickedBtn === houseBtn) {
    currentType = dataImovel;
  } else if (clickedBtn === carBtn) {
    currentType = dataAuto;
  }

  currentCreditIndex = 1;

  // Atualize os elementos com os dados apropriados com base no tipo selecionado
  updateCreditValue();
}

// Adiciona o ouvinte de evento a cada botão
btnType.forEach(btn => {
  btn.addEventListener('click', handleTypeClick);
});

// Chamada inicial para carregar os dados de imóvel (caso queira que o imóvel seja selecionado inicialmente)
handleTypeClick({ currentTarget: houseBtn });