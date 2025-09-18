// Dati del piano di allenamento
const workoutData = {
  "A": {
    "nome": "Petto-Dorso-Bicipiti-Addome",
    "esercizi": [
      {
        "nome": "Panca piana con manubri (spinte orizzontali)",
        "serie_reps": "3x8/10",
        "peso_partenza": "10kg x lato",
        "note_esercizio": "",
        "recupero": "120"
      },
      {
        "nome": "Lat machine triangolo",
        "serie_reps": "3x8/10",
        "peso_partenza": "35kg",
        "note_esercizio": "",
        "recupero": "120"
      },
      {
        "nome": "Spinte su panca inclinata 60° manubri",
        "serie_reps": "3x8/10",
        "peso_partenza": "8kg x lato",
        "note_esercizio": "",
        "recupero": "120"
      },
      {
        "nome": "Pulley triangolo",
        "serie_reps": "3x8/10",
        "peso_partenza": "25kg",
        "note_esercizio": "",
        "recupero": "120"
      },
      {
        "nome": "Curl manubri in piedi",
        "serie_reps": "3x10/12",
        "peso_partenza": "8kg x lato",
        "note_esercizio": "",
        "recupero": "90-120"
      },
      {
        "nome": "Hammer Curl manubri",
        "serie_reps": "3x10/12",
        "peso_partenza": "6/7 kg x lato",
        "note_esercizio": "",
        "recupero": "90-120"
      },
      {
        "nome": "Plank classico",
        "serie_reps": "2 x max tecnico",
        "peso_partenza": "",
        "note_esercizio": "Tieni sempre una buona forma esecutiva, quando vedi che la perdi ferma il cronometro. Obiettivo a medio termine: 120\"",
        "recupero": "90-120"
      },
      {
        "nome": "Side plank",
        "serie_reps": "2 x max tecnico x lato",
        "peso_partenza": "",
        "note_esercizio": "Tieni sempre una buona forma esecutiva, quando vedi che la perdi ferma il cronometro. Obiettivo a medio termine: 120\"",
        "recupero": "90-120"
      }
    ]
  },
  "B": {
    "nome": "Gambe-Spalle-Trapezio inferiore-Tricipiti-Erettori spinali",
    "esercizi": [
      {
        "nome": "Goblet Squat",
        "serie_reps": "3x8/10",
        "peso_partenza": "12kg",
        "note_esercizio": "",
        "recupero": "120"
      },
      {
        "nome": "Stacchi rumeni manubri",
        "serie_reps": "3x10/12",
        "peso_partenza": "8kg x lato",
        "note_esercizio": "",
        "recupero": "120"
      },
      {
        "nome": "Lento avanti con manubri da seduto",
        "serie_reps": "3x8/10",
        "peso_partenza": "8kg x lato",
        "note_esercizio": "",
        "recupero": "120"
      },
      {
        "nome": "Alzate laterali manubri",
        "serie_reps": "3x8/12",
        "peso_partenza": "3kg x lato",
        "note_esercizio": "Tieni sempre le spalle basse, gomiti semitesi e non strattonare il movimento, che deve risultare sempre controllato.",
        "recupero": "90-120"
      },
      {
        "nome": "Pushdown corda",
        "serie_reps": "3x10/12",
        "peso_partenza": "",
        "note_esercizio": "Cedimento tecnico ultima rep dell'ultima serie",
        "recupero": "90-120"
      },
      {
        "nome": "French press manubri",
        "serie_reps": "3x10/12",
        "peso_partenza": "",
        "note_esercizio": "Cedimento tecnico ultima rep dell'ultima serie",
        "recupero": "90-120"
      },
      {
        "nome": "Superman",
        "serie_reps": "2 x max tecnico",
        "peso_partenza": "",
        "note_esercizio": "Tieni sempre una buona forma esecutiva, quando vedi che la perdi ferma il cronometro. Obiettivo a medio termine: 120\"",
        "recupero": "90-120"
      }
    ]
  },
  "C": {
    "nome": "Dorso-Petto-Bicipiti-Addome",
    "esercizi": [
      {
        "nome": "Rematore con manubrio",
        "serie_reps": "3x8/10 x lato",
        "peso_partenza": "12kg x lato",
        "note_esercizio": "",
        "recupero": "120"
      },
      {
        "nome": "Push up",
        "serie_reps": "3x max tecnico",
        "peso_partenza": "",
        "note_esercizio": "",
        "recupero": "120"
      },
      {
        "nome": "Lat machine sbarra",
        "serie_reps": "3x8/10",
        "peso_partenza": "50-55kg",
        "note_esercizio": "",
        "recupero": "120"
      },
      {
        "nome": "Chest press",
        "serie_reps": "3x10/12",
        "peso_partenza": "",
        "note_esercizio": "Cedimento tecnico ultima rep dell'ultima serie",
        "recupero": "120"
      },
      {
        "nome": "Curl al cavo basso sbarra dritta",
        "serie_reps": "3x10/12",
        "peso_partenza": "",
        "note_esercizio": "Cedimento tecnico ultima rep dell'ultima serie",
        "recupero": "90-120"
      },
      {
        "nome": "Curl unilaterale Panca Scott (Preacher curl)",
        "serie_reps": "3x8/10",
        "peso_partenza": "",
        "note_esercizio": "Cedimento tecnico ultima rep dell'ultima serie",
        "recupero": "90-120"
      },
      {
        "nome": "Leg raises supino o appeso (addominali)",
        "serie_reps": "2 x max tecnico",
        "peso_partenza": "",
        "note_esercizio": "Movimento controllato e lento, retroversione mantenuta con lombare sempre piatta sul pavimento. Ginocchia sempre ben tese.",
        "recupero": "90-120"
      }
    ]
  },
  "D": {
    "nome": "Spalle-Tricipiti-Gambe",
    "esercizi": [
      {
        "nome": "Lento avanti con manubri da seduto",
        "serie_reps": "3x10/12",
        "peso_partenza": "6/7kg x lato",
        "note_esercizio": "",
        "recupero": "120"
      },
      {
        "nome": "Alzate posteriori con manubri prono su panca inclinata 30 gradi",
        "serie_reps": "3x8/12",
        "peso_partenza": "4/5 kg x lato",
        "note_esercizio": "",
        "recupero": "120"
      },
      {
        "nome": "Pushdown corda",
        "serie_reps": "3x10/12",
        "peso_partenza": "",
        "note_esercizio": "Cedimento tecnico ultima rep dell'ultima serie",
        "recupero": "90-120"
      },
      {
        "nome": "Bulgarian split squat corpo libero",
        "serie_reps": "3x8/15 x lato",
        "peso_partenza": "",
        "note_esercizio": "",
        "recupero": "120"
      },
      {
        "nome": "Leg extension",
        "serie_reps": "3x8/10",
        "peso_partenza": "",
        "note_esercizio": "Cedimento tecnico sulla terza serie",
        "recupero": "90-120"
      },
      {
        "nome": "Leg curl",
        "serie_reps": "3x8/10",
        "peso_partenza": "",
        "note_esercizio": "Cedimento tecnico sulla terza serie",
        "recupero": "90-120"
      },
      {
        "nome": "Side bending con manubrio",
        "serie_reps": "3x8/10 x lato",
        "peso_partenza": "8kg",
        "note_esercizio": "",
        "recupero": "90-120"
      }
    ]
  }
};

// Variabili globali
let currentDay = 'A';
let workoutHistory = [];

// Inizializzazione dell'app
document.addEventListener('DOMContentLoaded', function() {
  console.log('Inizializzazione app...');
  
  // Aspetta un po' per essere sicuri che il DOM sia completamente caricato
  setTimeout(() => {
    initializeApp();
  }, 100);
});

function initializeApp() {
  console.log('App inizializzata');
  setDefaultDate();
  setupNavigationTabs();
  setupActionButtons();
  
  // Carica il giorno iniziale
  showWorkoutSection();
  loadWorkoutDay(currentDay);
}

function setupNavigationTabs() {
  const navTabs = document.querySelectorAll('.nav-tab');
  console.log('Setup navigation tabs, trovati:', navTabs.length);
  
  navTabs.forEach((tab, index) => {
    console.log(`Tab ${index}:`, tab.getAttribute('data-day'));
    
    // Rimuovi event listener esistenti
    tab.replaceWith(tab.cloneNode(true));
  });
  
  // Riassegna gli event listener ai nuovi elementi
  const newNavTabs = document.querySelectorAll('.nav-tab');
  newNavTabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const day = this.getAttribute('data-day');
      console.log('Clicked tab:', day);
      
      // Rimuovi active da tutti i tab
      newNavTabs.forEach(t => t.classList.remove('active'));
      
      // Aggiungi active al tab corrente
      this.classList.add('active');
      
      if (day === 'cronologia') {
        console.log('Showing history section');
        showHistorySection();
      } else {
        console.log('Showing workout section for day:', day);
        currentDay = day;
        showWorkoutSection();
        
        // Forza il caricamento del giorno dopo un breve delay
        setTimeout(() => {
          loadWorkoutDay(day);
        }, 50);
      }
    });
  });
}

function setupActionButtons() {
  const saveBtn = document.getElementById('save-day');
  const printBtn = document.getElementById('print-day');
  const pdfBtn = document.getElementById('export-pdf');
  const excelBtn = document.getElementById('export-excel');
  const historyExcelBtn = document.getElementById('export-history-excel');
  
  if (saveBtn) saveBtn.addEventListener('click', saveWorkoutDay);
  if (printBtn) printBtn.addEventListener('click', printWorkoutDay);
  if (pdfBtn) pdfBtn.addEventListener('click', exportToPDF);
  if (excelBtn) excelBtn.addEventListener('click', exportToExcel);
  if (historyExcelBtn) historyExcelBtn.addEventListener('click', exportHistoryToExcel);
}

function setDefaultDate() {
  const today = new Date().toISOString().split('T')[0];
  const dateInput = document.getElementById('workout-date');
  if (dateInput) {
    dateInput.value = today;
    console.log('Data impostata:', today);
  }
}

function showWorkoutSection() {
  const workoutSection = document.getElementById('workout-section');
  const historySection = document.getElementById('history-section');
  
  console.log('Showing workout section');
  
  if (workoutSection) {
    workoutSection.style.display = 'block';
    workoutSection.classList.remove('hidden');
  }
  if (historySection) {
    historySection.style.display = 'none';
    historySection.classList.add('hidden');
  }
}

function showHistorySection() {
  const workoutSection = document.getElementById('workout-section');
  const historySection = document.getElementById('history-section');
  
  console.log('Showing history section');
  
  if (workoutSection) {
    workoutSection.style.display = 'none';
    workoutSection.classList.add('hidden');
  }
  if (historySection) {
    historySection.style.display = 'block';
    historySection.classList.remove('hidden');
  }
  
  loadHistory();
}

function loadWorkoutDay(day) {
  console.log('Loading workout day:', day);
  
  const dayData = workoutData[day];
  if (!dayData) {
    console.error('Nessun dato trovato per il giorno:', day);
    return;
  }
  
  const dayTitle = document.getElementById('day-title');
  const tableBody = document.getElementById('exercise-table-body');
  
  if (!dayTitle || !tableBody) {
    console.error('Elementi DOM non trovati', { dayTitle: !!dayTitle, tableBody: !!tableBody });
    return;
  }
  
  // Aggiorna il titolo
  const newTitle = `Giorno ${day} - ${dayData.nome}`;
  console.log('Updating title to:', newTitle);
  dayTitle.textContent = newTitle;
  
  // Pulisci e ricostruisci la tabella
  tableBody.innerHTML = '';
  console.log('Cleared table, adding', dayData.esercizi.length, 'exercises');
  
  dayData.esercizi.forEach((exercise, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="exercise-name">${exercise.nome}</td>
      <td>${exercise.serie_reps}</td>
      <td>${exercise.peso_partenza}</td>
      <td><input type="text" class="peso-usato" data-exercise="${index}" placeholder="Peso usato"></td>
      <td><input type="number" class="serie-effettive" data-exercise="${index}" placeholder="Serie" min="0"></td>
      <td>${exercise.note_esercizio}</td>
      <td>${exercise.recupero}</td>
      <td><textarea class="note-personali" data-exercise="${index}" placeholder="Note personali..." rows="2"></textarea></td>
    `;
    tableBody.appendChild(row);
  });
  
  console.log('Workout day loaded successfully for day:', day);
}

function saveWorkoutDay() {
  const dateInput = document.getElementById('workout-date');
  const date = dateInput ? dateInput.value : '';
  
  if (!date) {
    alert('Inserisci la data dell\'allenamento');
    return;
  }
  
  const dayData = workoutData[currentDay];
  if (!dayData) {
    alert('Errore nel caricamento dei dati del giorno');
    return;
  }
  
  const workoutSession = {
    date: date,
    day: currentDay,
    dayName: dayData.nome,
    exercises: [],
    timestamp: new Date().toISOString()
  };
  
  const exercises = dayData.esercizi;
  const pesoUsatoInputs = document.querySelectorAll('.peso-usato');
  const serieEffettiveInputs = document.querySelectorAll('.serie-effettive');
  const notePersonaliInputs = document.querySelectorAll('.note-personali');
  
  exercises.forEach((exercise, index) => {
    const pesoUsato = pesoUsatoInputs[index] ? pesoUsatoInputs[index].value.trim() : '';
    const serieEffettive = serieEffettiveInputs[index] ? serieEffettiveInputs[index].value.trim() : '';
    const notePersonali = notePersonaliInputs[index] ? notePersonaliInputs[index].value.trim() : '';
    
    workoutSession.exercises.push({
      nome: exercise.nome,
      serie_reps: exercise.serie_reps,
      peso_partenza: exercise.peso_partenza,
      peso_usato: pesoUsato,
      serie_effettive: serieEffettive,
      note_esercizio: exercise.note_esercizio,
      recupero: exercise.recupero,
      note_personali: notePersonali
    });
  });
  
  workoutHistory.push(workoutSession);
  console.log('Allenamento salvato:', workoutSession);
  console.log('Totale allenamenti in cronologia:', workoutHistory.length);
  showSuccessMessage('Allenamento salvato con successo!');
}

function showSuccessMessage(message) {
  const messageElement = document.getElementById('success-message');
  if (messageElement) {
    const p = messageElement.querySelector('p');
    if (p) {
      p.textContent = message;
    }
    messageElement.classList.remove('hidden');
    
    setTimeout(() => {
      messageElement.classList.add('hidden');
    }, 3000);
  }
}

function loadHistory() {
  const historyList = document.getElementById('history-list');
  
  if (!historyList) {
    console.error('Elemento history-list non trovato');
    return;
  }
  
  console.log('Loading history, found', workoutHistory.length, 'workouts');
  
  if (workoutHistory.length === 0) {
    historyList.innerHTML = '<div class="card"><div class="card__body"><p>Nessun allenamento salvato ancora. Vai ai giorni di allenamento e salva un workout per vederlo qui!</p></div></div>';
    return;
  }
  
  historyList.innerHTML = '';
  
  // Ordina per data decrescente
  const sortedHistory = [...workoutHistory].sort((a, b) => new Date(b.date) - new Date(a.date));
  
  sortedHistory.forEach((session, sessionIndex) => {
    console.log(`Rendering session ${sessionIndex}:`, session);
    
    const historyItem = document.createElement('div');
    historyItem.className = 'history-item';
    
    const exercisesList = session.exercises.map(exercise => {
      const data = [];
      if (exercise.peso_usato) data.push(`Peso: ${exercise.peso_usato}`);
      if (exercise.serie_effettive) data.push(`Serie: ${exercise.serie_effettive}`);
      if (exercise.note_personali) data.push(`Note: ${exercise.note_personali}`);
      
      return `
        <div class="history-exercise">
          <div class="history-exercise-name">${exercise.nome}</div>
          <div class="history-exercise-data">${exercise.serie_reps}</div>
          <div class="history-exercise-data">${exercise.peso_partenza}</div>
          <div class="history-exercise-data">${data.length > 0 ? data.join(' | ') : 'Nessun dato inserito'}</div>
        </div>
      `;
    }).join('');
    
    historyItem.innerHTML = `
      <div class="history-item-header">
        <div class="history-item-date">${formatDate(session.date)}</div>
        <div class="history-item-day">Giorno ${session.day} - ${session.dayName}</div>
      </div>
      <div class="history-item-exercises">
        ${exercisesList}
      </div>
    `;
    
    historyList.appendChild(historyItem);
  });
}

function formatDate(dateString) {
  try {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('it-IT', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  } catch (error) {
    console.error('Errore nel formato data:', error);
    return dateString;
  }
}

function printWorkoutDay() {
  window.print();
}

function exportToPDF() {
  if (!window.jspdf) {
    alert('Libreria PDF non disponibile');
    return;
  }
  
  try {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();
    const dateInput = document.getElementById('workout-date');
    const date = dateInput ? dateInput.value : '';
    const dayData = workoutData[currentDay];
    
    if (!dayData) {
      alert('Errore nel caricamento dei dati');
      return;
    }
    
    pdf.setFontSize(20);
    pdf.text(`Giorno ${currentDay} - ${dayData.nome}`, 20, 30);
    pdf.setFontSize(12);
    pdf.text(`Data: ${formatDate(date)}`, 20, 45);
    
    let yPosition = 60;
    
    dayData.esercizi.forEach((exercise) => {
      if (yPosition > 250) {
        pdf.addPage();
        yPosition = 30;
      }
      
      pdf.setFontSize(12);
      pdf.text(exercise.nome, 20, yPosition);
      yPosition += 7;
      
      pdf.setFontSize(10);
      pdf.text(`Serie/Reps: ${exercise.serie_reps} | Peso partenza: ${exercise.peso_partenza}`, 20, yPosition);
      yPosition += 7;
      
      if (exercise.recupero) {
        pdf.text(`Recupero: ${exercise.recupero}s`, 20, yPosition);
        yPosition += 7;
      }
      
      if (exercise.note_esercizio) {
        const lines = pdf.splitTextToSize(exercise.note_esercizio, 170);
        pdf.text(lines, 20, yPosition);
        yPosition += lines.length * 5;
      }
      
      yPosition += 10;
    });
    
    pdf.save(`Allenamento_Giorno_${currentDay}_${date}.pdf`);
  } catch (error) {
    console.error('Errore export PDF:', error);
    alert('Errore durante l\'export PDF');
  }
}

function exportToExcel() {
  if (!window.XLSX) {
    alert('Libreria Excel non disponibile');
    return;
  }
  
  try {
    const dateInput = document.getElementById('workout-date');
    const date = dateInput ? dateInput.value : '';
    const dayData = workoutData[currentDay];
    
    if (!dayData) {
      alert('Errore nel caricamento dei dati');
      return;
    }
    
    const wb = XLSX.utils.book_new();
    const exercises = dayData.esercizi;
    const pesoUsatoInputs = document.querySelectorAll('.peso-usato');
    const serieEffettiveInputs = document.querySelectorAll('.serie-effettive');
    const notePersonaliInputs = document.querySelectorAll('.note-personali');
    
    const data = [
      ['Data', 'Esercizio', 'Serie/Reps', 'Peso partenza', 'Peso usato', 'Serie effettive', 'Note esercizio', 'Recupero(s)', 'Note personali']
    ];
    
    exercises.forEach((exercise, index) => {
      const pesoUsato = pesoUsatoInputs[index] ? pesoUsatoInputs[index].value.trim() : '';
      const serieEffettive = serieEffettiveInputs[index] ? serieEffettiveInputs[index].value.trim() : '';
      const notePersonali = notePersonaliInputs[index] ? notePersonaliInputs[index].value.trim() : '';
      
      data.push([
        date,
        exercise.nome,
        exercise.serie_reps,
        exercise.peso_partenza,
        pesoUsato,
        serieEffettive,
        exercise.note_esercizio,
        exercise.recupero,
        notePersonali
      ]);
    });
    
    const ws = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, `Giorno ${currentDay}`);
    XLSX.writeFile(wb, `Allenamento_Giorno_${currentDay}_${date}.xlsx`);
  } catch (error) {
    console.error('Errore export Excel:', error);
    alert('Errore durante l\'export Excel');
  }
}

function exportHistoryToExcel() {
  if (!window.XLSX) {
    alert('Libreria Excel non disponibile');
    return;
  }
  
  if (workoutHistory.length === 0) {
    alert('Nessun allenamento salvato nella cronologia');
    return;
  }
  
  try {
    const wb = XLSX.utils.book_new();
    
    const data = [
      ['Data', 'Giorno', 'Esercizio', 'Serie/Reps', 'Peso partenza', 'Peso usato', 'Serie effettive', 'Note esercizio', 'Recupero(s)', 'Note personali']
    ];
    
    workoutHistory.forEach(session => {
      session.exercises.forEach(exercise => {
        data.push([
          session.date,
          `${session.day} - ${session.dayName}`,
          exercise.nome,
          exercise.serie_reps,
          exercise.peso_partenza,
          exercise.peso_usato,
          exercise.serie_effettive,
          exercise.note_esercizio,
          exercise.recupero,
          exercise.note_personali
        ]);
      });
    });
    
    const ws = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, 'Cronologia Completa');
    
    const today = new Date().toISOString().split('T')[0];
    XLSX.writeFile(wb, `Cronologia_Allenamenti_${today}.xlsx`);
  } catch (error) {
    console.error('Errore export cronologia Excel:', error);
    alert('Errore durante l\'export della cronologia');
  }
}