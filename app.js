// Piano di Allenamento App - JavaScript
// Sistema di salvataggio in memoria per testing - pronto per localStorage su GitHub Pages

// Dati degli esercizi per ogni giorno
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

// Sistema di storage (memoria per testing, localStorage pronto per produzione)
const Storage = {
  // Per testing: usa array in memoria
  history: [],
  
  // Metodi per salvare/caricare (pronti per localStorage)
  saveHistory: function(data) {
    // Testing: salva in memoria
    this.history = data;
    
    // Pronto per GitHub Pages - decommentare la riga sotto:
    localStorage.setItem('workout_history', JSON.stringify(data));
  },
  
  loadHistory: function() {
    // Testing: carica da memoria
    return this.history;
    
    // Pronto per GitHub Pages - decommentare le righe sotto:
    const stored = localStorage.getItem('workout_history');
    return stored ? JSON.parse(stored) : [];
  }
};

// Variabili globali
let currentDeleteIndex = null;

// Inizializzazione
document.addEventListener('DOMContentLoaded', function() {
  setupTabs();
  initializeTables();
  setCurrentDate();
  loadHistory();
});

// Setup navigazione tab - CORRETTO
function setupTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.dataset.tab;
      
      // Rimuovi active da tutti i tab
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      // Aggiungi active al tab selezionato
      btn.classList.add('active');
      
      // Gestisce il tab cronologia correttamente
      let tabElement;
      if (targetTab === 'cronologia') {
        tabElement = document.getElementById('tab-cronologia');
        // Aggiorna la cronologia quando viene aperta
        loadHistory();
      } else {
        tabElement = document.getElementById(`tab-${targetTab}`);
      }
      
      if (tabElement) {
        tabElement.classList.add('active');
      }
    });
  });
}

// Inizializza le tabelle con i dati degli esercizi
function initializeTables() {
  Object.keys(workoutData).forEach(day => {
    const tbody = document.getElementById(`tbody-${day}`);
    const exercises = workoutData[day].esercizi;
    
    tbody.innerHTML = '';
    exercises.forEach((exercise, index) => {
      const row = createExerciseRow(exercise, day, index);
      tbody.appendChild(row);
    });
  });
}

// Crea una riga della tabella per un esercizio
function createExerciseRow(exercise, day, index) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td><strong>${exercise.nome}</strong></td>
    <td>${exercise.serie_reps}</td>
    <td>${exercise.peso_partenza}</td>
    <td><input type="text" class="peso-input" data-day="${day}" data-index="${index}" data-field="peso_usato" placeholder="Es. 12kg"></td>
    <td><input type="text" class="serie-input" data-day="${day}" data-index="${index}" data-field="serie_effettive" placeholder="Es. 3x8"></td>
    <td class="note-input">${exercise.note_esercizio}</td>
    <td><input type="text" class="recupero-input" data-day="${day}" data-index="${index}" data-field="recupero" value="${exercise.recupero}"></td>
    <td><textarea class="note-input" data-day="${day}" data-index="${index}" data-field="note_personali" placeholder="Note personali..."></textarea></td>
  `;
  return row;
}

// Imposta la data corrente
function setCurrentDate() {
  const today = new Date().toISOString().split('T')[0];
  ['A', 'B', 'C', 'D'].forEach(day => {
    const dateInput = document.getElementById(`date-${day}`);
    if (dateInput && !dateInput.value) {
      dateInput.value = today;
    }
  });
}

// Raccoglie i dati di un giorno di allenamento
function collectDayData(day) {
  const dateInput = document.getElementById(`date-${day}`);
  const date = dateInput.value;
  
  if (!date) {
    alert('Seleziona una data per l\'allenamento');
    return null;
  }
  
  const exercises = [];
  const inputs = document.querySelectorAll(`[data-day="${day}"]`);
  
  // Raggruppa gli input per esercizio
  const exerciseData = {};
  inputs.forEach(input => {
    const index = input.dataset.index;
    const field = input.dataset.field;
    
    if (!exerciseData[index]) {
      exerciseData[index] = {
        nome: workoutData[day].esercizi[index].nome,
        serie_reps: workoutData[day].esercizi[index].serie_reps,
        peso_partenza: workoutData[day].esercizi[index].peso_partenza,
        note_esercizio: workoutData[day].esercizi[index].note_esercizio
      };
    }
    
    exerciseData[index][field] = input.value;
  });
  
  // Converte in array
  Object.keys(exerciseData).forEach(index => {
    exercises.push(exerciseData[index]);
  });
  
  return {
    day: day,
    nome: workoutData[day].nome,
    date: date,
    timestamp: new Date().getTime(),
    exercises: exercises
  };
}

// Salva un giorno nella cronologia
function saveDay(day) {
  const dayData = collectDayData(day);
  if (!dayData) return;
  
  const history = Storage.loadHistory();
  history.push(dayData);
  Storage.saveHistory(history);
  
  showSuccessMessage('Allenamento salvato con successo!');
  
  // Se siamo già nella cronologia, aggiorna la visualizzazione
  if (document.getElementById('tab-cronologia').classList.contains('active')) {
    loadHistory();
  }
}

// Carica e visualizza la cronologia
function loadHistory() {
  const history = Storage.loadHistory();
  const historyList = document.getElementById('history-list');
  
  if (history.length === 0) {
    historyList.innerHTML = '<p class="no-history">Nessun allenamento salvato ancora.</p>';
    return;
  }
  
  historyList.innerHTML = '';
  history.forEach((workout, index) => {
    const historyItem = createHistoryItem(workout, index);
    historyList.appendChild(historyItem);
  });
}

// Crea un elemento della cronologia
function createHistoryItem(workout, index) {
  const div = document.createElement('div');
  div.className = 'history-item';
  
  const exerciseSummary = workout.exercises
    .filter(ex => ex.peso_usato || ex.serie_effettive)
    .slice(0, 3)
    .map(ex => `${ex.nome}: ${ex.peso_usato} (${ex.serie_effettive})`)
    .join(', ');
  
  div.innerHTML = `
    <div class="history-item-header">
      <div>
        <h3 class="history-item-title">Giorno ${workout.day} - ${workout.nome}</h3>
        <div class="history-item-date">${formatDate(workout.date)}</div>
      </div>
      <div class="history-item-actions">
        <button class="btn btn--sm btn--secondary" onclick="editWorkout(${index})">Modifica</button>
        <button class="btn btn--sm btn--outline" onclick="showDeleteModal(${index})">Elimina</button>
      </div>
    </div>
    <div class="history-item-preview">
      ${exerciseSummary || 'Nessun dato inserito'}
    </div>
  `;
  
  return div;
}

// Modifica un allenamento
function editWorkout(index) {
  const history = Storage.loadHistory();
  const workout = history[index];
  
  // Passa al tab del giorno
  const dayTab = document.querySelector(`[data-tab="${workout.day}"]`);
  dayTab.click();
  
  // Imposta la data
  document.getElementById(`date-${workout.day}`).value = workout.date;
  
  // Popola i campi
  workout.exercises.forEach((exercise, exerciseIndex) => {
    const pesoInput = document.querySelector(`[data-day="${workout.day}"][data-index="${exerciseIndex}"][data-field="peso_usato"]`);
    const serieInput = document.querySelector(`[data-day="${workout.day}"][data-index="${exerciseIndex}"][data-field="serie_effettive"]`);
    const recuperoInput = document.querySelector(`[data-day="${workout.day}"][data-index="${exerciseIndex}"][data-field="recupero"]`);
    const noteInput = document.querySelector(`[data-day="${workout.day}"][data-index="${exerciseIndex}"][data-field="note_personali"]`);
    
    if (pesoInput) pesoInput.value = exercise.peso_usato || '';
    if (serieInput) serieInput.value = exercise.serie_effettive || '';
    if (recuperoInput) recuperoInput.value = exercise.recupero || '';
    if (noteInput) noteInput.value = exercise.note_personali || '';
  });
  
  // Rimuovi l'allenamento dalla cronologia (verrà ri-salvato quando l'utente clicca Salva)
  history.splice(index, 1);
  Storage.saveHistory(history);
  
  showSuccessMessage('Allenamento caricato per modifica');
}

// Mostra modal di conferma eliminazione
function showDeleteModal(index) {
  currentDeleteIndex = index;
  document.getElementById('deleteModal').classList.remove('hidden');
}

// Chiude modal di eliminazione
function closeDeleteModal() {
  currentDeleteIndex = null;
  document.getElementById('deleteModal').classList.add('hidden');
}

// Conferma eliminazione
function confirmDelete() {
  if (currentDeleteIndex !== null) {
    const history = Storage.loadHistory();
    history.splice(currentDeleteIndex, 1);
    Storage.saveHistory(history);
    
    loadHistory();
    closeDeleteModal();
    showSuccessMessage('Allenamento eliminato');
  }
}

// Export PDF
function exportPDF(day) {
  const dayData = collectDayData(day);
  if (!dayData) return;
  
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  // Titolo
  doc.setFontSize(18);
  doc.text(`Giorno ${day} - ${dayData.nome}`, 20, 20);
  doc.setFontSize(12);
  doc.text(`Data: ${formatDate(dayData.date)}`, 20, 30);
  
  // Tabella esercizi
  let yPos = 50;
  doc.setFontSize(10);
  
  dayData.exercises.forEach((exercise, index) => {
    if (yPos > 270) {
      doc.addPage();
      yPos = 20;
    }
    
    doc.text(`${index + 1}. ${exercise.nome}`, 20, yPos);
    yPos += 7;
    doc.text(`   Serie/Reps: ${exercise.serie_reps}`, 20, yPos);
    yPos += 7;
    if (exercise.peso_usato) {
      doc.text(`   Peso usato: ${exercise.peso_usato}`, 20, yPos);
      yPos += 7;
    }
    if (exercise.serie_effettive) {
      doc.text(`   Serie effettive: ${exercise.serie_effettive}`, 20, yPos);
      yPos += 7;
    }
    if (exercise.note_personali) {
      doc.text(`   Note: ${exercise.note_personali}`, 20, yPos);
      yPos += 7;
    }
    yPos += 5;
  });
  
  doc.save(`Allenamento_Giorno_${day}_${dayData.date}.pdf`);
  showSuccessMessage('PDF esportato con successo!');
}

// Export Excel giorno singolo
function exportExcel(day) {
  const dayData = collectDayData(day);
  if (!dayData) return;
  
  const wb = XLSX.utils.book_new();
  
  const wsData = [
    [`Giorno ${day} - ${dayData.nome}`],
    [`Data: ${formatDate(dayData.date)}`],
    [],
    ['Esercizio', 'Serie/Reps', 'Peso partenza', 'Peso usato', 'Serie effettive', 'Note esercizio', 'Recupero', 'Note personali']
  ];
  
  dayData.exercises.forEach(exercise => {
    wsData.push([
      exercise.nome,
      exercise.serie_reps,
      exercise.peso_partenza,
      exercise.peso_usato || '',
      exercise.serie_effettive || '',
      exercise.note_esercizio,
      exercise.recupero || '',
      exercise.note_personali || ''
    ]);
  });
  
  const ws = XLSX.utils.aoa_to_sheet(wsData);
  XLSX.utils.book_append_sheet(wb, ws, `Giorno ${day}`);
  
  XLSX.writeFile(wb, `Allenamento_Giorno_${day}_${dayData.date}.xlsx`);
  showSuccessMessage('Excel esportato con successo!');
}

// Export cronologia completa Excel
function exportHistoryExcel() {
  const history = Storage.loadHistory();
  if (history.length === 0) {
    alert('Nessun allenamento da esportare');
    return;
  }
  
  const wb = XLSX.utils.book_new();
  
  // Sheet cronologia
  const summaryData = [
    ['Cronologia Completa Allenamenti'],
    [],
    ['Data', 'Giorno', 'Nome Allenamento', 'Esercizi completati']
  ];
  
  history.forEach(workout => {
    const completedExercises = workout.exercises.filter(ex => ex.peso_usato || ex.serie_effettive).length;
    summaryData.push([
      workout.date,
      `Giorno ${workout.day}`,
      workout.nome,
      completedExercises
    ]);
  });
  
  const summaryWs = XLSX.utils.aoa_to_sheet(summaryData);
  XLSX.utils.book_append_sheet(wb, summaryWs, 'Cronologia');
  
  // Sheet per ogni allenamento
  history.forEach((workout, index) => {
    const wsData = [
      [`Giorno ${workout.day} - ${workout.nome}`],
      [`Data: ${formatDate(workout.date)}`],
      [],
      ['Esercizio', 'Serie/Reps', 'Peso partenza', 'Peso usato', 'Serie effettive', 'Note esercizio', 'Recupero', 'Note personali']
    ];
    
    workout.exercises.forEach(exercise => {
      wsData.push([
        exercise.nome,
        exercise.serie_reps,
        exercise.peso_partenza,
        exercise.peso_usato || '',
        exercise.serie_effettive || '',
        exercise.note_esercizio,
        exercise.recupero || '',
        exercise.note_personali || ''
      ]);
    });
    
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    XLSX.utils.book_append_sheet(wb, ws, `${workout.date}_${workout.day}`);
  });
  
  XLSX.writeFile(wb, `Cronologia_Completa_Allenamenti.xlsx`);
  showSuccessMessage('Cronologia esportata con successo!');
}

// Export backup JSON
function exportBackup() {
  const history = Storage.loadHistory();
  const backup = {
    version: '1.0',
    timestamp: new Date().toISOString(),
    data: history
  };
  
  const dataStr = JSON.stringify(backup, null, 2);
  const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
  
  const exportFileDefaultName = `backup_allenamenti_${new Date().toISOString().split('T')[0]}.json`;
  
  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
  
  showSuccessMessage('Backup esportato con successo!');
}

// Import backup
function importBackup() {
  document.getElementById('backupInput').click();
}

// Gestisce il ripristino del backup
function handleBackupRestore(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const backup = JSON.parse(e.target.result);
      
      if (backup.data && Array.isArray(backup.data)) {
        Storage.saveHistory(backup.data);
        loadHistory();
        showSuccessMessage('Backup ripristinato con successo!');
      } else {
        alert('File di backup non valido');
      }
    } catch (error) {
      alert('Errore nel leggere il file di backup');
    }
  };
  
  reader.readAsText(file);
  
  // Reset input
  event.target.value = '';
}

// Formatta la data per la visualizzazione
function formatDate(dateString) {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('it-IT', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Mostra messaggio di successo
function showSuccessMessage(message) {
  // Rimuovi messaggi esistenti
  const existing = document.querySelector('.success-message');
  if (existing) {
    existing.remove();
  }
  
  const messageEl = document.createElement('div');
  messageEl.className = 'success-message';
  messageEl.textContent = message;
  
  document.body.appendChild(messageEl);
  
  // Mostra il messaggio
  setTimeout(() => {
    messageEl.classList.add('show');
  }, 100);
  
  // Rimuovi il messaggio dopo 3 secondi
  setTimeout(() => {
    messageEl.classList.remove('show');
    setTimeout(() => {
      if (messageEl.parentNode) {
        messageEl.parentNode.removeChild(messageEl);
      }
    }, 300);
  }, 3000);
}

// Gestione click fuori dal modal
document.addEventListener('click', function(e) {
  const modal = document.getElementById('deleteModal');
  if (e.target === modal) {
    closeDeleteModal();
  }
});
