// Workout data structure
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

// Global state
let workoutHistory = [];
let currentEditingWorkout = null;

// Simulated localStorage for sandbox environment
const simulatedStorage = {
  setItem: function(key, value) {
    // In a real environment, this would be: localStorage.setItem(key, value);
    console.log(`Saving to localStorage: ${key}`, value);
  },
  getItem: function(key) {
    // In a real environment, this would be: return localStorage.getItem(key);
    console.log(`Loading from localStorage: ${key}`);
    return null; // Simulate empty storage
  },
  removeItem: function(key) {
    // In a real environment, this would be: localStorage.removeItem(key);
    console.log(`Removing from localStorage: ${key}`);
  }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeTabs();
  initializeWorkoutTables();
  initializeEventListeners();
  loadWorkoutHistory();
  setTodayDate();
});

// Tab functionality
function initializeTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');
      
      // Remove active class from all tabs and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding content
      button.classList.add('active');
      document.getElementById(`tab-${targetTab}`).classList.add('active');
    });
  });
}

// Initialize workout tables
function initializeWorkoutTables() {
  Object.keys(workoutData).forEach(day => {
    createWorkoutTable(day, workoutData[day]);
  });
}

// Create workout table for a specific day
function createWorkoutTable(day, dayData) {
  const tbody = document.getElementById(`exercises${day}`);
  tbody.innerHTML = '';

  dayData.esercizi.forEach((exercise, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="exercise-name">${exercise.nome}</td>
      <td>${exercise.serie_reps}</td>
      <td>${exercise.peso_partenza}</td>
      <td><input type="text" class="exercise-input" data-field="peso_usato" data-day="${day}" data-index="${index}"></td>
      <td><input type="text" class="exercise-input" data-field="serie_effettive" data-day="${day}" data-index="${index}"></td>
      <td class="note-cell">
        <div class="note-text">${exercise.note_esercizio}</div>
      </td>
      <td>${exercise.recupero}</td>
      <td class="note-cell">
        <textarea class="exercise-input exercise-textarea" data-field="note_personali" data-day="${day}" data-index="${index}" placeholder="Note personali..."></textarea>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// Event listeners
function initializeEventListeners() {
  // Save buttons
  ['A', 'B', 'C', 'D'].forEach(day => {
    document.getElementById(`save${day}`).addEventListener('click', () => saveWorkout(day));
    document.getElementById(`exportPdf${day}`).addEventListener('click', () => exportToPDF(day));
    document.getElementById(`exportExcel${day}`).addEventListener('click', () => exportToExcel(day));
  });

  // History search
  document.getElementById('searchHistory').addEventListener('input', filterHistory);

  // History controls
  document.getElementById('exportHistoryExcel').addEventListener('click', exportHistoryToExcel);
  document.getElementById('clearHistory').addEventListener('click', showResetModal);

  // Backup controls
  document.getElementById('exportBackup').addEventListener('click', exportBackup);
  document.getElementById('importBackup').addEventListener('click', () => {
    document.getElementById('backupFile').click();
  });
  document.getElementById('backupFile').addEventListener('change', importBackup);

  // Modal controls
  document.getElementById('cancelDelete').addEventListener('click', hideDeleteModal);
  document.getElementById('confirmDelete').addEventListener('click', confirmDeleteWorkout);
  document.getElementById('cancelReset').addEventListener('click', hideResetModal);
  document.getElementById('confirmReset').addEventListener('click', confirmResetHistory);
}

// Set today's date in all date inputs
function setTodayDate() {
  const today = new Date().toISOString().split('T')[0];
  ['A', 'B', 'C', 'D'].forEach(day => {
    document.getElementById(`date${day}`).value = today;
  });
}

// Save workout
function saveWorkout(day) {
  const date = document.getElementById(`date${day}`).value;
  if (!date) {
    showMessage('Seleziona una data per l\'allenamento.', 'error');
    return;
  }

  const workoutSession = {
    id: currentEditingWorkout ? currentEditingWorkout.id : Date.now(),
    day: day,
    date: date,
    dayName: workoutData[day].nome,
    exercises: []
  };

  // Collect exercise data
  const inputs = document.querySelectorAll(`[data-day="${day}"]`);
  const exerciseData = {};

  inputs.forEach(input => {
    const index = input.getAttribute('data-index');
    const field = input.getAttribute('data-field');
    
    if (!exerciseData[index]) {
      exerciseData[index] = {
        nome: workoutData[day].esercizi[index].nome,
        serie_reps: workoutData[day].esercizi[index].serie_reps,
        peso_partenza: workoutData[day].esercizi[index].peso_partenza,
        note_esercizio: workoutData[day].esercizi[index].note_esercizio,
        recupero: workoutData[day].esercizi[index].recupero
      };
    }
    
    exerciseData[index][field] = input.value;
  });

  workoutSession.exercises = Object.values(exerciseData);

  // Save to history
  if (currentEditingWorkout) {
    const index = workoutHistory.findIndex(w => w.id === currentEditingWorkout.id);
    workoutHistory[index] = workoutSession;
    showMessage('Allenamento modificato con successo!', 'success');
    currentEditingWorkout = null;
  } else {
    workoutHistory.unshift(workoutSession);
    showMessage('Allenamento salvato con successo!', 'success');
  }

  saveWorkoutHistory();
  updateHistoryDisplay();
  clearWorkoutForm(day);
}

// Load workout for editing
function loadWorkoutForEditing(workoutId) {
  const workout = workoutHistory.find(w => w.id === workoutId);
  if (!workout) return;

  currentEditingWorkout = workout;
  
  // Switch to the workout day tab
  document.querySelector(`[data-tab="${workout.day}"]`).click();
  
  // Fill the date
  document.getElementById(`date${workout.day}`).value = workout.date;
  
  // Fill exercise data
  workout.exercises.forEach((exercise, index) => {
    const pesoInput = document.querySelector(`[data-day="${workout.day}"][data-index="${index}"][data-field="peso_usato"]`);
    const serieInput = document.querySelector(`[data-day="${workout.day}"][data-index="${index}"][data-field="serie_effettive"]`);
    const noteInput = document.querySelector(`[data-day="${workout.day}"][data-index="${index}"][data-field="note_personali"]`);
    
    if (pesoInput) pesoInput.value = exercise.peso_usato || '';
    if (serieInput) serieInput.value = exercise.serie_effettive || '';
    if (noteInput) noteInput.value = exercise.note_personali || '';
  });

  showMessage('Allenamento caricato per la modifica.', 'success');
}

// Clear workout form
function clearWorkoutForm(day) {
  const inputs = document.querySelectorAll(`[data-day="${day}"]`);
  inputs.forEach(input => {
    input.value = '';
  });
  setTodayDate();
}

// Delete workout
let workoutToDelete = null;

function showDeleteModal(workoutId) {
  workoutToDelete = workoutId;
  document.getElementById('deleteModal').classList.remove('hidden');
}

function hideDeleteModal() {
  workoutToDelete = null;
  document.getElementById('deleteModal').classList.add('hidden');
}

function confirmDeleteWorkout() {
  if (workoutToDelete) {
    workoutHistory = workoutHistory.filter(w => w.id !== workoutToDelete);
    saveWorkoutHistory();
    updateHistoryDisplay();
    showMessage('Allenamento eliminato con successo.', 'success');
  }
  hideDeleteModal();
}

// Reset history
function showResetModal() {
  document.getElementById('resetModal').classList.remove('hidden');
}

function hideResetModal() {
  document.getElementById('resetModal').classList.add('hidden');
}

function confirmResetHistory() {
  workoutHistory = [];
  saveWorkoutHistory();
  updateHistoryDisplay();
  showMessage('Cronologia resettata completamente.', 'success');
  hideResetModal();
}

// History management
function loadWorkoutHistory() {
  const saved = simulatedStorage.getItem('workoutHistory');
  if (saved) {
    try {
      workoutHistory = JSON.parse(saved);
    } catch (e) {
      console.error('Error loading workout history:', e);
      workoutHistory = [];
    }
  }
  updateHistoryDisplay();
}

function saveWorkoutHistory() {
  simulatedStorage.setItem('workoutHistory', JSON.stringify(workoutHistory));
}

function updateHistoryDisplay() {
  const historyList = document.getElementById('historyList');
  
  if (workoutHistory.length === 0) {
    historyList.innerHTML = `
      <div class="empty-state">
        <h3>Nessun allenamento salvato</h3>
        <p>Inizia a tracciare i tuoi allenamenti selezionando un giorno e salvando i tuoi progressi.</p>
      </div>
    `;
    return;
  }

  historyList.innerHTML = workoutHistory.map(workout => `
    <div class="history-item">
      <div class="history-header">
        <div class="history-info">
          <h3>Giorno ${workout.day} - ${formatDate(workout.date)}</h3>
          <p class="history-meta">${workout.dayName}</p>
        </div>
        <div class="history-actions">
          <button class="btn btn--sm btn--outline" onclick="loadWorkoutForEditing(${workout.id})">Modifica</button>
          <button class="btn btn--sm btn--outline" onclick="showDeleteModal(${workout.id})">Elimina</button>
        </div>
      </div>
      <div class="history-preview">
        ${workout.exercises.filter(ex => ex.peso_usato || ex.serie_effettive || ex.note_personali).slice(0, 4).map(exercise => `
          <div class="exercise-preview">
            <strong>${exercise.nome}</strong>
            <div class="exercise-data">
              ${exercise.peso_usato ? `Peso: ${exercise.peso_usato}` : ''}
              ${exercise.serie_effettive ? ` | Serie: ${exercise.serie_effettive}` : ''}
              ${exercise.note_personali ? ` | Note: ${exercise.note_personali}` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// Filter history
function filterHistory() {
  const searchTerm = document.getElementById('searchHistory').value.toLowerCase();
  const historyItems = document.querySelectorAll('.history-item');
  
  historyItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Export functions
function exportToPDF(day) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const date = document.getElementById(`date${day}`).value;
  
  doc.setFontSize(18);
  doc.text(`Allenamento Giorno ${day}`, 20, 20);
  doc.setFontSize(12);
  doc.text(`Data: ${formatDate(date)}`, 20, 30);
  doc.text(`${workoutData[day].nome}`, 20, 40);
  
  let yPosition = 60;
  const exercises = collectWorkoutData(day);
  
  exercises.forEach(exercise => {
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }
    
    doc.text(`${exercise.nome}`, 20, yPosition);
    yPosition += 10;
    doc.text(`Serie/Reps: ${exercise.serie_reps} | Peso: ${exercise.peso_usato || 'N/A'}`, 30, yPosition);
    yPosition += 10;
    if (exercise.note_personali) {
      doc.text(`Note: ${exercise.note_personali}`, 30, yPosition);
      yPosition += 10;
    }
    yPosition += 5;
  });
  
  doc.save(`allenamento-${day}-${date}.pdf`);
  showMessage('PDF esportato con successo!', 'success');
}

function exportToExcel(day) {
  const exercises = collectWorkoutData(day);
  const date = document.getElementById(`date${day}`).value;
  
  const ws = XLSX.utils.json_to_sheet(exercises);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, `Giorno ${day}`);
  
  XLSX.writeFile(wb, `allenamento-${day}-${date}.xlsx`);
  showMessage('Excel esportato con successo!', 'success');
}

function exportHistoryToExcel() {
  if (workoutHistory.length === 0) {
    showMessage('Nessuna cronologia da esportare.', 'error');
    return;
  }
  
  const flatData = workoutHistory.flatMap(workout => 
    workout.exercises.map(exercise => ({
      Data: workout.date,
      Giorno: workout.day,
      'Nome Giorno': workout.dayName,
      Esercizio: exercise.nome,
      'Serie/Reps': exercise.serie_reps,
      'Peso Partenza': exercise.peso_partenza,
      'Peso Usato': exercise.peso_usato || '',
      'Serie Effettive': exercise.serie_effettive || '',
      'Note Esercizio': exercise.note_esercizio,
      Recupero: exercise.recupero,
      'Note Personali': exercise.note_personali || ''
    }))
  );
  
  const ws = XLSX.utils.json_to_sheet(flatData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Cronologia Completa');
  
  XLSX.writeFile(wb, 'cronologia-allenamenti.xlsx');
  showMessage('Cronologia esportata in Excel!', 'success');
}

// Backup functions
function exportBackup() {
  const backup = {
    version: '1.0',
    exportDate: new Date().toISOString(),
    workoutHistory: workoutHistory
  };
  
  const dataStr = JSON.stringify(backup, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  
  const link = document.createElement('a');
  link.href = URL.createObjectURL(dataBlob);
  link.download = `backup-allenamenti-${new Date().toISOString().split('T')[0]}.json`;
  link.click();
  
  showMessage('Backup esportato con successo!', 'success');
}

function importBackup(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const backup = JSON.parse(e.target.result);
      if (backup.workoutHistory && Array.isArray(backup.workoutHistory)) {
        workoutHistory = backup.workoutHistory;
        saveWorkoutHistory();
        updateHistoryDisplay();
        showMessage('Backup importato con successo!', 'success');
      } else {
        showMessage('Formato backup non valido.', 'error');
      }
    } catch (error) {
      showMessage('Errore nell\'importazione del backup.', 'error');
    }
  };
  reader.readAsText(file);
  
  // Reset file input
  event.target.value = '';
}

// Utility functions
function collectWorkoutData(day) {
  const exercises = [];
  const inputs = document.querySelectorAll(`[data-day="${day}"]`);
  const exerciseData = {};

  inputs.forEach(input => {
    const index = input.getAttribute('data-index');
    const field = input.getAttribute('data-field');
    
    if (!exerciseData[index]) {
      exerciseData[index] = {
        nome: workoutData[day].esercizi[index].nome,
        serie_reps: workoutData[day].esercizi[index].serie_reps,
        peso_partenza: workoutData[day].esercizi[index].peso_partenza,
        note_esercizio: workoutData[day].esercizi[index].note_esercizio,
        recupero: workoutData[day].esercizi[index].recupero
      };
    }
    
    exerciseData[index][field] = input.value;
  });

  return Object.values(exerciseData);
}

function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('it-IT');
}

function showMessage(message, type) {
  // Remove existing messages
  const existingMessages = document.querySelectorAll('.message');
  existingMessages.forEach(msg => msg.remove());
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `message message--${type}`;
  messageDiv.textContent = message;
  
  const container = document.querySelector('.container');
  container.insertBefore(messageDiv, container.firstChild);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}